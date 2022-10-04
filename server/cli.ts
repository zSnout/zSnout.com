import { existsSync } from "fs";
import pkg from "gray-matter";
import { collection } from "./database";
import { isActive, send } from "./email";

const { read } = pkg;

const help: Record<string, string> = {
  list: `list\t\tLists a type of record.
  accounts\tPrints a table of user accounts. By default, it only shows
\t\tusernames, but you may pass arguments after this specifying which
\t\tfields to print. Example: \`list accounts username verified\`.
  emails\tGets a list of all emails (with usernames) available on record.
    notify:blog\tOnly lists those who receive email notifications about blog posts.`,
  blog: `blog\t\tDoes something related to the zSnout blog.
  notify ...\tSends emails to users who wish to be updated about the zSnout
\t\tblog with the title and publication date of an article.`,
};

function simpleTitle(path: string) {
  // Update src/main.ts when this is changes.

  const title = path
    .replace(/-./g, (match) => " " + match[1].toLocaleUpperCase())
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/\bAi\b/g, "AI")
    .replace(/\bAscii\b/g, "ASCII")
    .replace(/\bGithub\b/g, "GitHub")
    .replace(/\bLets\b/g, "Let's")
    .replace(/\bOs\b/g, "Operating System")
    .replace(/\bWebgl\b/g, "WebGL")
    .replace(/\bYoutube\b/g, "YouTube")
    .replace(/\bZsnout\b/g, "zSnout")
    .replace(/\b3d\b/g, "3D")
    .replace(/(?!^)\bAny\b(?!$)/g, "any")
    .replace(/(?!^)\bFor\b(?!$)/g, "for")
    .replace(/(?!^)\bIs\b(?!$)/g, "is")
    .replace(/(?!^)\bOf\b(?!$)/g, "of")
    .replace(/(?!^)\bOn\b(?!$)/g, "on")
    .replace(/(?!^)\bThe\b(?!$)/g, "the");

  return title;
}

if (process.argv[2] === "list") {
  const accounts = await collection("accounts");
  if (!accounts) {
    console.error("no database available");
    process.exit();
  }

  if (process.argv[3] === "accounts") {
    const keys = process.argv.length > 4 ? process.argv.slice(4) : ["username"];
    const list = await accounts.find().toArray();

    console.table(list, keys);
  } else if (process.argv[3] === "emails") {
    for await (const account of accounts.find()) {
      if (process.argv[4] === "notify:blog" && !account.willNotifyForBlog) {
        continue;
      }

      console.log(`${account.username} <${account.email}>`);
    }
  } else {
    console.log(help.list);
  }
} else if (process.argv[2] === "blog") {
  if (process.argv[3] === "notify") {
    const articlePath = process.argv[4];
    if (!articlePath) {
      console.log(
        "`blog notify` must be followed by the path of a blog article."
      );

      console.log("Example: blog notify mathemagical-tricks");

      process.exit();
    }

    const accounts = await collection("accounts");
    if (!accounts) {
      console.error("no database available");
      process.exit();
    }

    if (!isActive) {
      console.error("no mailer available");
      process.exit();
    }

    console.log(`Attempting to fetch src/views/blog/${articlePath}.md...`);

    if (!existsSync(`src/views/blog/${articlePath}.md`)) {
      console.log(`${articlePath} does not exist. Aborting...`);
      process.exit();
    }

    const { data: frontmatter, excerpt: fallbackExcerpt } = read(
      `src/views/blog/${articlePath}.md`,
      {
        excerpt: true,
        excerpt_separator: "\n\n",
      }
    );

    if (!frontmatter.date) {
      console.log("The specified article is missing a date.");
      process.exit();
    }

    if (!frontmatter.author) {
      console.log("The specified article is missing an author.");
      process.exit();
    }

    if (!frontmatter.excerpt && !fallbackExcerpt) {
      console.log("The specified article is missing an excerpt.");
      process.exit();
    }

    const excerpt = "" + (frontmatter.excerpt || fallbackExcerpt);

    const date = new Date(frontmatter.date).toLocaleDateString("en-US", {
      dateStyle: "medium",
    });

    const author = "" + frontmatter.author;

    const email = `Hi!

${author} has just posted ${simpleTitle(articlePath)}. ${excerpt
      .trim()
      .replace(/\n/g, " ")}

Read more at https://zsnout.com/blog/${articlePath}.

If you don't want to be notified anymore, change your notification preferences at https://zsnout.com/blog.`;

    console.log("\n\nEmail preview:\n");
    console.log(email);

    const willBeNotified = await accounts
      .find({ willNotifyForBlog: { $exists: true, $eq: true } })
      .toArray();

    console.log(`\n\nThis will be sent to ${willBeNotified.length} users.`);

    const emails = willBeNotified.map(({ username, email }) => ({
      name: username,
      address: email,
    }));

    if (
      await send({
        bcc: emails,
        text: email,
        subject: `Blog Post: ${simpleTitle(articlePath)}`,
      })
    ) {
      console.log("An email has been sent!");
    } else {
      console.log("The email failed to send.");
    }
  } else {
    console.log(help.blog);
  }
} else {
  console.log(
    "The zSnout CLI can be used to interact with user data in a convenient and simple manner."
  );

  console.log("\nAll commands:\n");

  console.log(
    Object.values(help)
      .map(
        (value) =>
          "    " +
          value
            .split("\n")
            .map((e) => e.replace(/\t/, "    \t"))
            .join("\n    ")
      )
      .join("\n\n")
  );
}

process.exit();
