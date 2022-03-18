import type { RequestHandlerOutput, RequestHandler } from "@sveltejs/kit";
import fs from "fs";
import { marked } from "marked";

// GET /notes/:uid.json
export const get: RequestHandler<{}> = async (event) => {
  const { uid } = event.params as { uid: string };
  const md = fs.readFileSync(`src/notes/${uid}.md`, "utf8");
  const html = marked.parse(md);
  return {
    status: 200,
    body: { content: html },
  };
};
