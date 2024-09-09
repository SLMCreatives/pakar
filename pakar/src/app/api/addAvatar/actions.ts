"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function addAvatar(formData: FormData) {
  const supabase = createClient();
  const formdata = {
    id: formData.get("id") as string,
    avatar: formData.get("avatar") as string,
  };

  const avatarFile = formdata.avatar;
  const filename = formdata.id + "-" + ".jpg";
  const { data, error } = await supabase.storage
    .from("avatar")
    .upload(filename, avatarFile, { contentType: "image/jpeg", upsert: true });

  if (error) {
    console.log(error);
  }

  console.log(data);
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function removeAvatar(formData: FormData) {
  const supabase = createClient();
  const formdata = {
    id: formData.get("id") as string,
  };
  const { data, error } = await supabase.storage
    .from("avatar")
    .remove([formdata.id + "-" + ".jpg"]);
  if (error) {
    console.log(error);
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
