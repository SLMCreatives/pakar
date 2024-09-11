"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "../../../../node_modules/next/cache";
import { redirect } from "../../../../node_modules/next/navigation";

export async function editInfo(formData: FormData) {
  const supabase = createClient();
  const data = {
    id: formData.get("id") as string,
    name: formData.get("name") as string,
  };

  const { data: user, error } = await supabase
    .from("users_table")
    .update({ name: data.name })
    .eq("auth_id", data.id)
    .select();

  if (error) {
    console.log(error);
  } else if (user) {
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
}
