"use server";

import * as z from "zod";

export async function createUser(_, formData: FormData) {
  try {
    const User = z.object({
      username: z.string(),
      password: z.number(),
    });
    const users = {
      username: formData.get("username"),
      password: Number(formData.get("password")),
    };

    const data = User.parse(users);

    return { message: "success" };
  } catch (e) {
    const message = e.message;

    return { message, msg_type: typeof message };
  }
}
