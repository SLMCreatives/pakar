"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });
  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return redirect("/type");
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/findtrainers");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed"
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const newUser = async (formdata: FormData) => {
  const id = formdata.get("id") as string;
  const categs = formdata.get("type") as string;
  const supabase = createClient();
  const { data: usercat, error: usercaterror } = await supabase
    .from("user_categories")
    .insert([
      {
        user_id: id,
        category: categs,
      },
    ]);

  const { data: catprofile, error: profileerror } = await supabase
    .from(`${categs}_profile`)
    .insert([
      {
        user_id: id,
      },
    ]);

  if (usercaterror || profileerror) {
    console.log(usercaterror || profileerror);
    redirect("/findtrainers");
  }

  if (usercat && catprofile) {
    return redirect("/dashboard");
  }
};

export const handleSubmit = async (formdata: FormData) => {
  const id = formdata.get("userId") as string;
  const name = formdata.get("name") as string;
  const bio = formdata.get("bio") as string;
  const supabase = createClient();
  const { error } = await supabase
    .from("trainer_profile")
    .update({
      name: name,
      bio: bio,
    })
    .eq("user_id", id)
    .select();

  if (error) {
    console.log(error);
  } else {
    console.log("success");
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
};

export const updateProfileAction = async (formdata: FormData) => {
  const id = formdata.get("userId") as string;
  const spcl = formdata.get("speciality") as string;
  const experience = formdata.get("experience") as string;
  const expY = formdata.get("expY") as string;
  const modules = formdata.get("modules") as string;
  const qual = formdata.get("qualifications") as string;
  const approach = formdata.get("approach") as string;
  const supabase = createClient();
  const { error } = await supabase
    .from("trainer_profile")
    .update({
      speciality: spcl,
      total_years_exp: expY,
      experience: experience,
      approach: approach,
      training_modules: { modules },
      qualification: { qual },
    })
    .eq("user_id", id)
    .select();

  if (error) {
    console.log(error);
  } else {
    console.log("success");
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
};

export const updateContactAction = async (formdata: FormData) => {
  const id = formdata.get("userId") as string;
  const email = formdata.get("email") as string;
  const phone = formdata.get("phone") as string;
  const fb = formdata.get("facebook") as string;
  const x = formdata.get("x") as string;
  const li = formdata.get("linkedin") as string;
  const website = formdata.get("website") as string;
  const supabase = createClient();
  const { error } = await supabase
    .from("trainer_profile")
    .update({
      contact: { email, phone, fb, x, li, website },
    })
    .eq("user_id", id)
    .select();

  if (error) {
    console.log(error);
  } else {
    console.log("success");
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
};

export const uploadAvatarURL = async (formdata: FormData) => {
  const id = formdata.get("userAid") as string;
  const avatarFile = formdata.get("avatar") as File;
  const filename = id + ".jpg";
  const profFilename = `https://gskuvkqhgpcbgqchxknq.supabase.co/storage/v1/object/public/avatars/${filename}`;
  console.log(filename, avatarFile);
  const supabase = createClient();
  const { data: data1, error: error1 } = await supabase.storage
    .from("avatars")
    .upload(filename, avatarFile, { contentType: "image/**", upsert: true });

  const { data: data2, error: error2 } = await supabase
    .from("trainer_profile")
    .update({ avatarURL: profFilename })
    .eq("user_id", id)
    .select();

  if (error1 || error2) {
    console.log("Just error", error1 || error2);
  } else {
    console.log("avatar uploaded");
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
};

export const publishProfileAction = async (formdata: FormData) => {
  const id = formdata.get("userPid") as string;
  const supabase = createClient();
  const { data, error } = await supabase
    .from("trainer_profile")
    .update({ published: true })
    .eq("user_id", id)
    .select();
  if (error) {
    console.log(error);
  } else {
    console.log("profile published");
    revalidatePath("/", "layout");
    redirect("/dashboard");
  }
};
