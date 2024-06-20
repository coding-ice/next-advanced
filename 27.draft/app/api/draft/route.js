import { draftMode } from "next/headers";

export async function GET(request) {
  draftMode().enable();

  return new Response("Draft mode is enabled");
}
