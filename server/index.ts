import express, { json } from "express";
import {
  AccountStatus,
  AuthStatus,
  checkSession,
  createAccount,
  logInUser,
  ReAuthStatus,
  verifyAccount,
  VerifyStatus,
} from "./auth";
import { StatusCode } from "./codes";
import { isActive as isDatabaseActive } from "./database";
import { isActive as isMailActive } from "./email";

const app = express();
app.use(json({ type: "application/json" }));

app.use((req, res, next) => {
  req.hasKeys = (...keys) => {
    if (typeof req.body !== "object" || req.body === null) {
      res.error("The request body must be an object.");
      return false;
    }

    for (const key of keys) {
      if (typeof req.body[key] !== "string") {
        res.error(`The ${key} must be an string.`);
        return false;
      }
    }

    return true;
  };

  res.error = (error, status) => {
    res.status(status ?? 400).json({ error });
  };

  next();
});

app.post("/api/account/login", async (req, res) => {
  if (!(await isDatabaseActive))
    return res.error(
      "This instance of zSnout can't authenticate accounts.",
      StatusCode.ServiceUnavailable
    );

  if (!req.hasKeys("username", "password")) return;

  const { status, account } = await logInUser(
    req.body.username,
    req.body.password
  );

  switch (status) {
    case AuthStatus.BadPassword:
    case AuthStatus.NoUser:
      res.error("The username or password is incorrect.");
      break;

    case AuthStatus.NoServer:
      res.error(
        "This instance of zSnout can't authenticate accounts.",
        StatusCode.ServiceUnavailable
      );
      break;

    case AuthStatus.Success:
      res.json({ session: account.session, username: account.username });
      break;

    default:
      res.error(
        "The server responded with a nonexistent authentication status.",
        StatusCode.InternalServerError
      );
  }
});

app.post("/api/account/check-login", async (req, res) => {
  if (!(await isDatabaseActive))
    return res.error(
      "This instance of zSnout can't authenticate accounts.",
      StatusCode.ServiceUnavailable
    );

  if (!req.hasKeys("session")) return;

  const { status, account } = await checkSession(req.body.session);

  switch (status) {
    case ReAuthStatus.Failure:
      res.error("That session key is now invalid.", StatusCode.NotFound);
      break;

    case ReAuthStatus.NoServer:
      res.error(
        "This instance of zSnout can't reauthenticate accounts.",
        StatusCode.ServiceUnavailable
      );
      break;

    case ReAuthStatus.Success:
      res.json({ session: account.session, username: account.username });
      break;

    default:
      res.error(
        "The server responded with a nonexistent reauthentication status.",
        StatusCode.InternalServerError
      );
  }
});

app.put("/api/account", async (req, res) => {
  if (!(await isDatabaseActive))
    return res.error(
      "This instance of zSnout can't create accounts.",
      StatusCode.ServiceUnavailable
    );

  if (!isMailActive)
    return res.error(
      "This instance of zSnout can't create accounts.",
      StatusCode.ServiceUnavailable
    );

  if (!req.hasKeys("username", "password", "email")) return;

  const { status, account } = await createAccount(
    req.body.username,
    req.body.password,
    req.body.email
  );

  switch (status) {
    case AccountStatus.BadEmail:
      res.error(
        "Your email is invalid. Make sure it is properly formatted and can recieve messages from zsnout.com."
      );
      break;

    case AccountStatus.BadPassword:
      res.error(
        "Your password isn't secure enough. Include a letter, number, special character, and make it at least 8 characters long."
      );
      break;

    case AccountStatus.BadUsername:
      res.error(
        "Your username isn't allowed. It should be between 5 and 20 characters and only contain alphanumeric characters."
      );
      break;

    case AccountStatus.EmailTaken:
      res.error("Your email is already being used.", StatusCode.Conflict);
      break;

    case AccountStatus.Failure:
      res.error(
        "An unknown server-side issue occurred.",
        StatusCode.InternalServerError
      );
      break;

    case AccountStatus.NoServer:
      res.error(
        "This instance of zSnout can't create accounts.",
        StatusCode.ServiceUnavailable
      );
      break;

    case AccountStatus.Success:
      res.send({ session: account.session, username: account.username });
      break;

    case AccountStatus.UsernameTaken:
      res.error("Your username is already being used.", StatusCode.Conflict);
      break;

    default:
      res.error(
        "The server responded with a nonexistent account creation status.",
        StatusCode.InternalServerError
      );
  }
});

app.patch("/api/account/verifyCode", async (req, res) => {
  if (!(await isDatabaseActive))
    return res.error(
      "This instance of zSnout can't verify accounts.",
      StatusCode.ServiceUnavailable
    );

  if (!req.hasKeys("verifyCode")) return;

  const { status, account } = await verifyAccount(req.body.verifyCode);

  switch (status) {
    case VerifyStatus.NoAccount:
      res.error("No account exists for that verification code.");
      break;

    case VerifyStatus.NoServer:
      res.error(
        "This instance of zSnout can't verify accounts.",
        StatusCode.ServiceUnavailable
      );
      break;

    case VerifyStatus.Success:
      res.send({ session: account.session, username: account.username });
      break;

    default:
      res.error(
        "The server responded with a nonexistent account verification status.",
        StatusCode.InternalServerError
      );
  }
});

app.get("/api/ping", async (_, res) => {
  const active = await isDatabaseActive;

  res.send({
    "POST /api/account": active,
    "PUT /api/account": active && isMailActive,
    "PATCH /api/account/verifyCode": active,
    "GET /api/ping": true,
  });
});

export { app as handler };

declare global {
  namespace Express {
    interface Request {
      hasKeys(...keys: string[]): boolean;
    }

    interface Response {
      error(error: any, status?: StatusCode): void;
    }
  }
}
