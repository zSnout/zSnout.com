import { compare, hash } from "bcrypt";
import { randomUUID } from "node:crypto";
import { collection, Database } from "./database";
import { send } from "./email";

export namespace IsLegal {
  export function Username(username: string) {
    return (
      username.length >= 5 &&
      username.length <= 20 &&
      /^[A-Za-z_][A-Za-z0-9_]+$/.test(username) &&
      !/zsnout/i.test(username)
    );
  }

  export function Password(password: string) {
    return (
      password.length >= 8 &&
      /(?![\d_])\w/.test(password) &&
      /\d/.test(password) &&
      /[^\s\w]/.test(password)
    );
  }

  export function Email(email: string) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    );
  }
}

export function hashPassword(password: string) {
  return hash(password, 10);
}

export function verifyPassword(password: string, hashed: string) {
  return compare(password, hashed);
}

const _accounts = collection("accounts");

export async function logInUser(username: string, password: string) {
  const accounts = await _accounts;
  if (!accounts) return { status: AuthStatus.NoServer as const };

  const account = await accounts.findOne({ username });
  if (!account) return { status: AuthStatus.NoUser as const };

  if (await verifyPassword(password, account.password)) {
    return { status: AuthStatus.Success as const, account };
  } else {
    return { status: AuthStatus.BadPassword as const };
  }
}

export enum AuthStatus {
  BadPassword,
  NoServer,
  NoUser,
  Success,
}

export async function checkSession(session: string) {
  const accounts = await _accounts;
  if (!accounts) return { status: ReAuthStatus.NoServer as const };

  const account = await accounts.findOne({ session });
  if (!account) return { status: ReAuthStatus.Failure as const };

  return { status: ReAuthStatus.Success as const, account };
}

export enum ReAuthStatus {
  Failure,
  NoServer,
  Success,
}

export async function createAccount(
  username: string,
  password: string,
  email: string
) {
  const accounts = await _accounts;
  if (!accounts) return { status: AccountStatus.NoServer as const };

  if (!IsLegal.Username(username))
    return { status: AccountStatus.BadUsername as const };

  if (!IsLegal.Password(password))
    return { status: AccountStatus.BadPassword as const };

  if (!IsLegal.Email(email)) return { status: AccountStatus.BadEmail as const };

  await clearOldAccounts();

  if (await accounts.findOne({ username }))
    return { status: AccountStatus.UsernameTaken as const };

  if (await accounts.findOne({ email }))
    return { status: AccountStatus.EmailTaken as const };

  const account = {
    username,
    password: await hashPassword(password),
    email,
    creation: Date.now(),
    session: randomUUID(),
    verified: false,
    verifyCode: randomUUID(),
    bookmarks: [],
    notes: [],
    chats: [],
  };

  const result = await accounts.insertOne(account);
  if (!result.acknowledged) return { status: AccountStatus.Failure as const };

  const sentMessage = await send({
    to: email,
    subject: "Verify your zSnout account",
    text: `Hey @${username}! Verify your new zSnout account by opening this link: https://zsnout.com/verify-account?code=${account.verifyCode}.`,
  });

  if (!sentMessage) {
    await accounts.deleteOne({ session: account.session });
    return { status: AccountStatus.BadEmail as const };
  }

  return { status: AccountStatus.Success as const, account };
}

export enum AccountStatus {
  BadUsername,
  BadPassword,
  BadEmail,
  EmailTaken,
  Failure,
  NoServer,
  Success,
  UsernameTaken,
}

export async function verifyAccount(verifyCode: string) {
  const accounts = await _accounts;
  if (!accounts) return { status: VerifyStatus.NoServer as const };

  const account = await accounts.findOneAndUpdate(
    { verifyCode },
    { $set: { verified: true } }
  );

  if (!account.value) return { status: VerifyStatus.NoAccount as const };

  return { status: VerifyStatus.Success as const, account: account.value };
}

export enum VerifyStatus {
  NoAccount,
  NoServer,
  Success,
}

export async function clearOldAccounts() {
  const accounts = await _accounts;

  await accounts?.deleteMany({
    verified: false,
    creation: { $lte: Date.now() - 15 * 60 * 1000 },
  });
}

export async function getAccount(session: string) {
  return (await (await _accounts)?.findOne({ session })) || undefined;
}

export async function updateAccount(
  session: string,
  update: Partial<Database["accounts"]>
) {
  return (await (await _accounts)?.updateOne({ session }, { $set: update }))
    ?.acknowledged;
}

setInterval(clearOldAccounts, 5 * 60 * 1000);
