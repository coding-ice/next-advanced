"use server";
import path from "path";
import dayjs from "dayjs";
import mime from "mime";
import { mkdir, stat, writeFile } from "fs/promises";

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

export async function uploadAction(_, formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    return {
      message: "No file uploaded",
    };
  }

  // 写入文件
  const buffer = Buffer.from(await file.arrayBuffer());
  const relativePath = path.join("/uploads", dayjs().format("YYYY-MM-DD"));
  const uploadPath = path.join(process.cwd(), "public", relativePath);

  const errorJson = {
    message: "Failed to create upload directory",
  };

  try {
    await stat(uploadPath);
  } catch (e) {
    if (e.code === "ENOENT") {
      await mkdir(uploadPath, { recursive: true });
    } else {
      return errorJson;
    }
  }

  try {
    const uniqueSuffix = Math.random().toString(36).substring(-6);
    const fileName = file.name.split(".")[0];
    const fullName = `${fileName}-${uniqueSuffix}.${mime.getExtension(
      file.type
    )}`;
    const filePath = path.join(uploadPath, fullName);
    await writeFile(filePath, buffer);

    const uuid = await addNote({
      title: fileName,
      content: buffer.toString("utf-8"),
      updateTime: new Date().toISOString(),
    });

    revalidatePath("/", "layout");
    return {
      uuid,
      fileUrl: `${relativePath}/${fullName}`,
    };
  } catch (e) {
    return errorJson;
  }
}
