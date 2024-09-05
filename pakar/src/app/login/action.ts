"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

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
  }

  revalidatePath("/", "layout");
  redirect("/private/dashboard");
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
  alert("Please check your email to verify your account");
  revalidatePath("/", "layout");
  redirect("/private");
}

export async function addName(formData: FormData) {
  const supabase = createClient();
  const data = {
    name: formData.get("name") as string,
    id: formData.get("id") as string,
    email: formData.get("email") as string,
    age: formData.get("age") as any,
  };

  const { error } = await supabase
    .from("users_table")
    .update({ name: data.name, email: data.email, age: data.age })
    .eq("auth_id", data.id);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/private/dashboard");
}

export async function signout() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut({ scope: "global" });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
