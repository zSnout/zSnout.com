import { compare, hash } from "bcrypt";

export function isLegalPassword(password: string) {
  return (
    password.length > 8 &&
    /\w/.test(password) &&
    /\d/.test(password) &&
    /[^\s\w\d]/.test(password)
  );
}

export function hashPassword(password: string) {
  return hash(password, 10);
}

export function verifyPassword(password: string, hashed: string) {
  return compare(password, hashed);
}
