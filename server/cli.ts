import { collection } from "./database";

const help: Record<string, string> = {
  list: `list\t\tLists a type of record.
  accounts\tPrints a table of user accounts. By default, it only shows
\t\tusernames, but you may pass arguments after this specifying which
\t\tfields to print. Example: \`list accounts username verified\`.
  emails\tGets a list of all emails (with usernames) available on record.
    notify:blog\tOnly lists those who receive email notifications about blog posts.`,
};

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
