import dayjs from "dayjs";
import { mkdir, stat, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import mime from "mime";
import { addNote } from "@/lib/redis";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      {
        message: "No file uploaded",
      },
      {
        status: 400,
      }
    );
  }

  // 写入文件
  const buffer = Buffer.from(await file.arrayBuffer());
  const relativePath = path.join("/uploads", dayjs().format("YYYY-MM-DD"));
  const uploadPath = path.join(process.cwd(), "public", relativePath);

  const errorJson = NextResponse.json(
    {
      message: "Failed to create upload directory",
    },
    {
      status: 500,
    }
  );

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

    return NextResponse.json({
      uuid,
      fileUrl: `${relativePath}/${fullName}`,
    });
  } catch (e) {
    return errorJson;
  }
}
