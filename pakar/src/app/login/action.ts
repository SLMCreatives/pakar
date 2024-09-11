"use server";

import { revalidatePath } from "../../../node_modules/next/cache";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "../../../node_modules/next/navigation";
import { headers } from "../../../node_modules/next/headers";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  } else {
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  if (!error) {
    const { error } = await supabase
      .from("users_table")
      .insert([{ email: data.email }]);

    if (error) {
      redirect("/error");
    }
  }

  revalidatePath("/", "layout");
  redirect("/confirm");
}

export async function signInWithOAuth() {
  const supabase = createClient();
  const origin = headers().get("origin");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`, // origin,
    },
  });

  if (error) {
    console.log(error);
  } else {
    return redirect(data.url);
  }
}
