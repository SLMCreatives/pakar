"use server";

/* import { toast } from "@/hooks/use-toast";
 */ import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    .upload(filename, avatarFile, { contentType: "image/jpeg" });

  if (error) {
    console.log("Just error", error);
  }

  console.log("avatar uploaded");
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function replaceAvatar(formData: FormData) {
  const supabase = createClient();
  const formdata = {
    id: formData.get("id") as string,
  };
  const filename = formdata.id + "-" + ".jpg";
  const newFilename = formdata.id + "-" + ".jpg";
  const { data, error } = await supabase.storage
    .from("avatar")
    .upload(filename, newFilename, { contentType: "image/jpeg", upsert: true });
  if (error) {
    console.log(error);
  }
  console.log("done");
}

export async function deleteAvatar(formData: FormData) {
  const supabase = createClient();
  const formdata = {
    id: formData.get("id") as string,
  };
  const filename = formdata.id + "-" + ".jpg";
  const { data, error } = await supabase.storage
    .from("avatar")
    .remove([filename]);
  if (error) {
    console.log(error);
  }
  console.log("removed");
}
