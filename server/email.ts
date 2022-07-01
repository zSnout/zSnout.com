import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = process.env.ZSNOUT_MAIL
  ? createTransport(process.env.ZSNOUT_MAIL)
  : (console.log("no mail available"), undefined);

export function send(options: Omit<Mail.Options, "from">) {
  return new Promise<SMTPTransport.SentMessageInfo | undefined>((resolve) => {
    transport?.sendMail(
      { ...options, from: process.env.ZSNOUT_MAIL_FROM },
      (err, info) => {
        if (err) resolve(undefined);
        resolve(info);
      }
    );
  });
}

process.on("beforeExit", () => transport?.close());
