"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "../../../node_modules/next/navigation";

export async function signInWithOAuth() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (error) {
    redirect("/error");
  }
  if (!error && data) {
    return redirect(data.url);
  }
}
