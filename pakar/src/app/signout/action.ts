"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "../../../node_modules/next/cache";
import { redirect } from "../../../node_modules/next/navigation";

export async function signout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  } else {
    redirect("/login");
  }
}
