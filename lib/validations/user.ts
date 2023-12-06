import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1, "Profile photo is required"),
  name: z.string().min(3, { message: "Name is required" }).max(30),
  username: z.string().min(3, { message: "Username is required" }).max(30),
  bio: z.string().min(3).max(500),
});
