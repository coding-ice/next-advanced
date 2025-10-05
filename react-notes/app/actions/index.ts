"use server";

import {
  addNote,
  deleteNote as deleteNoteRedis,
  updateNote,
} from "@/lib/redis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sleep } from "@/utils";

export async function saveNote(_, formData: FormData) {
  const noteId = formData.get("noteId") as string | undefined;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await sleep(1000);

  if (noteId) {
    await updateNote(noteId, {
      title,
      content,
      updateTime: new Date().toISOString(),
    });
    revalidatePath("/", "layout");
    return {
      message: "success",
    };
  } else {
    const uuid = await addNote({
      title,
      content,
      updateTime: new Date().toISOString(),
    });
    revalidatePath("/", "layout");
    redirect(`/note/${uuid}`);
  }
}

export async function deleteNote(_, formData: FormData) {
  const noteId = formData.get("noteId") as string;
  await sleep(1000);

  await deleteNoteRedis(noteId);
  revalidatePath("/", "layout");
  redirect("/");
}
