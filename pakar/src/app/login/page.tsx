"use client";

import { login, signup } from "./action";
import Loginpage from "@/components/authentication-04";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "../../../node_modules/next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "../../../node_modules/next/cache";
import { signout } from "../signout/action";

export default async function LoginPage() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  if (user.user !== null) {
    return (
      <div className="flex flex-col gap-2 h-screen items-center justify-center text-white">
        <p>Already logged in as {user.user.email}</p>
        <Link href="/dashboard">Go To Dashboard</Link>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        <Loginpage />
      </div>
    );
  }
}
