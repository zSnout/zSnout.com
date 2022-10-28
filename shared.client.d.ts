/** Stories two-way messaging
 *
 * CLIENT --> SERVER
 * CLIENT <-- SERVER
 *
 * --> story:request:index(session)
 * <-- story:index(session)
 *
 * --> story:create:story(session, title)
 * <-- story:index(session)
 *
 * --> story:leave(session, storyId)
 * <-- story:index(session)
 *
 * --> story:request:permission(session, storyId)
 * <-- story:permission(session, storyId)
 *
 * --> story:update:members(session, storyId, members)
 * <-- story:update:members(session, storyId, members)
 *
 * --> story:request:members(session, storyId)
 * <-- story:update:members(session, storyId, members)
 *
 * --> story:request:paragraph(session, storyId)
 * <-- story:paragraph(session, storyId)
 *
 * --> story:contribute(session, storyId, paragraphId, content)
 * <-- story:done:contribute(session, storyId, paragraphId)
 * <-- story:timeout:contribute(session, storyId, paragraphId)
 */

export interface ClientToServer {
  "account:check-session"(session: string): void;
  "account:create"(username: string, password: string, email: string): void;
  "account:login"(username: string, password: string): void;
  "account:reset-session"(session: string, shouldSendNewSession: boolean): void;
  "account:update:password"(
    session: string,
    oldPassword: string,
    password: string
  ): void;
  "account:update:username"(session: string, username: string): void;
  "account:verify"(verifyCode: string): void;

  "blog:request:will-notify"(session: string): void;
  "blog:update:will-notify"(session: string, willNotify: boolean): void;

  "bookmarks:request"(session: string): void;
  "bookmarks:update"(session: string, bookmarks: Bookmark[]): void;

  "chat:create"(session: string, title: string): void;
  "chat:leave"(session: string, chatId: string): void;
  "chat:message:delete"(
    session: string,
    chatId: string,
    messageId: string
  ): void;
  "chat:message:send"(session: string, chatId: string, content: string): void;
  "chat:message:update"(
    session: string,
    chatId: string,
    messageId: string,
    content: string
  ): void;
  "chat:request:index"(session: string): void;
  "chat:request:members"(session: string, chatId: string): void;
  "chat:update:defaultLevel"(
    session: string,
    chatId: string,
    defaultLevel: string
  ): void;
  "chat:update:members"(
    session: string,
    chatId: string,
    members: Record</** username */ string, ChatPermissionLevel>
  ): void;
  "chat:update:title"(session: string, chatId: string, title: string): void;
  "chat:watch:start"(session: string, chatId: string): void;
  "chat:watch:stop"(chatId: string): void;

  "notes:create"(session: string, title: string): void;
  "notes:request:details"(session: string, noteId: string): void;
  "notes:request:index"(session: string): void;
  "notes:request:note"(session: string, noteId: string): void;
  "notes:update:note"(session: string, noteId: string, contents: string): void;
  "notes:update:title"(session: string, noteId: string, title: string): void;

  "story:create"(session: string, title: string): void;
  "story:request:index"(session: string): void;

  "youtube:request"(id: string): void;
}

export interface ServerToClient {
  "account:update:session"(session: string): void;
  "account:update:username"(username: string): void;
  "account:done:reset-session"(): void;
  "account:done:update:password"(): void;
  "account:done:update:username"(): void;
  "account:done:verify"(): void;
  "account:needs-verification"(timeLeft: false | number): void;

  "blog:done:update:will-notify"(): void;
  "blog:update:will-notify"(willNotify: boolean): void;

  "bookmarks:list"(bookmarks: Bookmark[]): void;

  "chat:index"(chats: ChatPreview[]): void;
  "chat:message:delete"(chatId: string, messageId: UUID): void;
  "chat:message:list"(chatId: string, messages: ChatMessage[]): void;
  "chat:message:update"(chatId: string, message: ChatMessage): void;
  "chat:permission"(chatId: string, level: ChatPermissionLevel): void;
  "chat:update:members"(
    chatId: string,
    members: Record</** username */ string, ChatPermissionLevel>
  ): void;
  "chat:update:title"(chatId: string, title: string): void;

  "error"(error: string): void;

  "notes:index"(notes: NotePreview[]): void;
  "notes:note"(noteId: string, contents: string | false): void;
  "notes:details"(details: NoteDetails): void;

  "story:index"(stories: StoryPreview[]): void;

  "youtube:results"(id: string, info: YouTubeResults): void;
}

export interface YouTubeResults {
  title: string;
  description: string | null;
  isLive: boolean;
  channel: string;
  thumbnail: string;
  formats: VideoFormat[];
}

export interface VideoFormat {
  url: string;
  hasAudio: boolean;
  hasVideo: boolean;
  quality: string;
  audio: "AUDIO_QUALITY_LOW" | "AUDIO_QUALITY_MEDIUM" | undefined;
}

export interface Bookmark {
  name: string;
  url: string;
}

export interface NoteDetails {
  id: UUID;
  title: string;
}

export interface NotePreview {
  id: UUID;
  title: string;
  desc: string;
}

export interface ChatMessage {
  /** from: Username */
  from: string;
  content: string;
  id: UUID;
  timestamp: number;
}

export interface ChatPreview {
  id: UUID;
  title: string;
  level: ChatPermissionLevel;
}

export type ChatPermissionLevel = "none" | "view" | "comment" | "manage";

export interface StoryPreview {
  id: UUID;
  title: string;
  activeThreadCount: number;
}

export interface StoryParagraphSentence {
  id: UUID;
  from: UUID;
  content: string;
}

export interface StoryParagraph {
  id: UUID;
  sentences: StoryParagraphSentence[];
}

export type StoryPermissionLevel = "none" | "view" | "write" | "manage";

export type UUID = string & {};
