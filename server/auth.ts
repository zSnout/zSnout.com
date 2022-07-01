import { compare, hash } from "bcrypt";
import { ObjectId } from "bson";
import { collection } from "./database";

export function isLegalUsername(username: string) {
  return (
    username.length >= 5 &&
    /^[A-Za-z_][A-Za-z0-9_]+$/.test(username) &&
    !/zsnout/i.test(username)
  );
}

export function isLegalPassword(password: string) {
  return (
    password.length >= 8 &&
    /(?![\d_])\w/.test(password) &&
    /\d/.test(password) &&
    /[^\s\w]/.test(password)
  );
}

export function hashPassword(password: string) {
  return hash(password, 10);
}

export function verifyPassword(password: string, hashed: string) {
  return compare(password, hashed);
}

const _accounts = collection("accounts");

export async function authenticateUser(username: string, password: string) {
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

export async function reauthenticateUser(session: string) {
  const accounts = await _accounts;
  if (!accounts) return { status: ReAuthStatus.NoServer as const };

  const account = await accounts.findOne({ session });
  if (!account) return { status: ReAuthStatus.Failure as const };

  return { status: ReAuthStatus.Success as const, account };
}

export enum AuthStatus {
  BadPassword,
  NoServer,
  NoUser,
  Success,
}

export enum ReAuthStatus {
  NoServer,
  Failure,
  Success,
}
