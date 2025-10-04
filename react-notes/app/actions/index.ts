"use server";

import {
  addNote,
  deleteNote as deleteNoteRedis,
  updateNote,
} from "@/lib/redis";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveNote(
  title: string,
  content: string,
  noteId?: string
) {
  if (noteId) {
    await updateNote(noteId, {
      title,
      content,
      updateTime: new Date().toISOString(),
    });
    revalidatePath(`/note/${noteId}`);
    redirect(`/note/${noteId}`);
  } else {
    const uuid = await addNote({
      title,
      content,
      updateTime: new Date().toISOString(),
    });
    revalidatePath(`/note/${uuid}`);
    redirect(`/note/${uuid}`);
  }
}

export async function deleteNote(noteId: string) {
  await deleteNoteRedis(noteId);
  revalidatePath("/");
  redirect("/");
}
