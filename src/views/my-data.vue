<script lang="ts" setup>
  import { ref } from "vue";
  import { DataDump } from "../../shared.client";
  import Button from "../components/Button.vue";
  import CardGrid from "../components/CardGrid.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Title from "../components/Title.vue";
  import { session, socket, username } from "../main";

  const dump = ref<DataDump | null>(null);
  const html = ref<string>("");
  const file = ref<File>();

  function escape(text: string) {
    return text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  function dateRaw(x: string | Date) {
    return new Date(x).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function date(x: string | Date) {
    return `<small style='opacity:50%'>(${dateRaw(x)})</small>`;
  }

  function props(
    data: Record<string, string | number | boolean | Date | undefined>
  ) {
    return `<table style='border:1px solid currentcolor'><tbody>${Object.entries(
      data
    )
      .map(
        ([k, v]) =>
          `<tr><th style='text-align:right'>${escape(k)}</th><td>${escape(
            typeof v == "string" &&
              /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d.\d{3}Z/.test(v)
              ? dateRaw(v)
              : (v ?? "NULL").toString()
          )}</td></tr>`
      )
      .join("")}</tbody></table>`;
  }

  socket.emit("account:request:dump", session.value);

  socket.on("account:dump", (data) => {
    dump.value = data;
    const secAccount = `<section>
  <h2>Account</h2>
  ${props(data.account)}
  </section>`;
    const secBookmarks = `<section>
  <h2>Bookmarks</h2>
  <ul>
  ${data.bookmarks
    .map(
      ({ name, url }) =>
        `<li><a href="${escape(
          url.startsWith("/") ? `https://v7.zsnout.com` + url : url
        )}">${escape(name)}</a></li>`
    )
    .join("")}
  </ul>
  </section>`;
    const secNotes = `<section>
  <h2>Notes</h2>
  ${data.notes
    .map(
      ({ creation, title, contents }) => `<details>
<summary><strong>${escape(title)}</strong> ${date(creation)}</summary>
${contents}
</details>`
    )
    .join("")}
  </ul>
  </section>`;
    const secRawJson = `<section>
  <h2>Raw JSON (mainly useful for programmers)</h2>
  <textarea style='width:100%' rows='24'>${escape(
    JSON.stringify(data, undefined, 2)
  )}</textarea>
  </section>`;
    const secChats = `<section>
  <h2>Chats</h2>
  ${data.chats
    .map(
      ({ creation, title, levels, messages }) => `<details>
  <summary><strong>${escape(title)}</strong> ${date(creation)}</summary>
  <table style='border:1px solid black'>
  <caption style='text-align:left'>Members</caption>
  <tbody>
  ${Object.entries(levels.members)
    .filter(([, v]) => v && v != "none")
    .map(
      ([k, v]) =>
        `<tr><th style='text-align:right'>${escape(k)}</th><td>${escape(
          v!
        )}</td></tr>`
    )
    .join("")}
  </tbody>
  </table>
  <ul>
  ${messages
    .map(
      ({ content, creation, from }) =>
        `<li><span style='opacity:50%'>${escape(from)}:</span> ${escape(
          content
        )} ${date(creation)}</li>`
    )
    .join("")}
  </ul>
  </details>`
    )
    .join("")}
  </section>`;
    const secStories = `<section>
<h2>Stories</h2>
${data.stories
  .map(
    ({ title, creation, members, threads: allThreads }) => `<details>
<summary><strong>${escape(title)}</strong> ${date(creation)}</summary>
<table style='border:1px solid black'>
<caption style='text-align:left'>Members</caption>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th colspan='2'>threads</th>
</tr>
<tr>
<th>username</th>
<th>gems</th>
<th>contribs</th>
<th>started</th>
<th>completed</th>
<th>permissions</th>
</tr>
</thead>
<tbody>
${Object.entries(members)
  .map(
    ([k, { gems, level, sentences, threads }]) =>
      `<tr>
<th style='text-align:left'>${escape(k)}</th>
<td>${escape((gems ?? "NULL") + "")}</td>
<td>${escape(sentences + "")}</td>
<td>${escape(threads.started + "")}</td>
<td>${escape(threads.completed + "")}</td>
<td>${escape(level == "none" || !level ? "<removed>" : level)}</td>
</tr>`
  )
  .join("")}
</tbody>
</table>
<p>Completed Threads (click checkbox to show all content):</p>
<ol>
${allThreads
  .filter((x) => x.completed)
  .map(
    ({ creation, sentences }) =>
      `<li><div style='display:flex;align-items:baseline'><input type='checkbox'><span style='hidden' data-complete>${escape(
        sentences.join(" ")
      )} ${date(creation)}</span></div></li>`
  )
  .join("")}
</ol>
<p>Incomplete Threads (click checkbox to reveal content):</p>
<ol>
${allThreads
  .filter((x) => !x.completed)
  .map(
    ({ creation, sentences }) =>
      `<li><input type='checkbox'><span style='hidden'>${escape(
        sentences.join(" ")
      )}</span> ${date(creation)}</li>`
  )
  .join("")}
</ol>
</details>`
  )
  .join("")}
</section>`;
    const rawHtml = `<!DOCTYPE html>
<meta charset="utf-8" />
<style>section{border-left:1px solid currentcolor;padding-left:1.5rem;margin:2rem 0}
td,th{padding:0.069px 0.25rem}
details[open]+details{padding-top:2rem}
input+span{display:none}
input:checked+span{display:inline}
input+span[data-complete]{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;}
input:checked+span[data-complete]{display:inline}
</style>
${secAccount}
${secBookmarks}
${secNotes}
${secChats}
${secStories}
${secRawJson}`;
    html.value = rawHtml;
    file.value = new File([JSON.stringify(data, undefined, 2)], "dump.json", {
      type: "application/json",
    });
  });
</script>

<template>
  <DocumentDisplay>
    <Title>Export Data for {{ username }}</Title>

    <CardGrid v-if="!dump">
      <Button @click="socket.emit('account:request:dump', session)">
        Request Dump
      </Button>
    </CardGrid>

    <div v-if="file">
      <p>Dump is {{ file.size }} bytes long.</p>
    </div>

    <div v-html="html"></div>
  </DocumentDisplay>
</template>

<style lang="css">
  pre {
    width: 100%;
    white-space: pre-wrap;
    word-break: break-all;
  }
</style>
