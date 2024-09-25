"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editInfo(formData: FormData) {
  const supabase = createClient();
  const datafrm = {
    id: formData.get("id") as string,
    name: formData.get("name") as string,
    bio: formData.get("bio") as string,
    cat: formData.get("cat") as string,
  };
  const { data: user, error } = await supabase
    .from("trainer_profile")
    .update({ name: datafrm.name, bio: datafrm.bio })
    .eq("user_id", datafrm.id)
    .select();

  console.log(user);
  if (error) {
    console.log(error);
  } else {
    console.log("success");
  }
}

export async function editSpeciality(formData: FormData) {
  const supabase = createClient();
  const data = {
    id: formData.get("id") as string,
    speciality: formData.get("speciality") as string,
  };
  console.log(data);

  const { data: user, error } = await supabase
    .from("trainer_profile")
    .update({ speciality: data.speciality })
    .eq("user_id", data.id)
    .select();
  if (error) {
    console.log(error);
  } else if (user) {
    console.log("info updated");
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
