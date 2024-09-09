"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function editInfo(formData: FormData) {
  const supabase = createClient();
  const data = {
    id: formData.get("id") as string,
    name: formData.get("name") as string,
    age: formData.get("age") as string,
  };

  const newage = parseInt(data.age);
  const { data: user, error } = await supabase
    .from("users_table")
    .update({ name: data.name, age: newage })
    .eq("auth_id", data.id)
    .select();

  if (error) {
    console.log(error);
  }
  console.log(user);
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
