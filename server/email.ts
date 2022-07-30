import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const config = {
  host: process.env.ZSNOUT_MAIL_HOST,
  port: +(process.env.ZSNOUT_MAIL_PORT || 587),
  secure: process.env.ZSNOUT_MAIL_PORT === "465",
  auth: {
    user: process.env.ZSNOUT_MAIL_USER,
    pass: process.env.ZSNOUT_MAIL_PASSWORD,
  },
};

export const isActive = !!(
  process.env.ZSNOUT_MAIL_HOST &&
  process.env.ZSNOUT_MAIL_USER &&
  process.env.ZSNOUT_MAIL_PASSWORD
);

const transport = createTransport(config);

transport.sendMail({
  to: "zsakowitz@gmail.com",
});

export function send(options: Omit<Mail.Options, "from">) {
  return new Promise<SMTPTransport.SentMessageInfo | undefined>((resolve) => {
    transport?.sendMail(
      { ...options, from: process.env.ZSNOUT_MAIL_FROM },
      (err, info) => {
        if (err) {
          console.log(err);
          resolve(undefined);
        } else {
          resolve(info);
        }
      }
    );
  });
}

process.on("beforeExit", () => transport?.close());
