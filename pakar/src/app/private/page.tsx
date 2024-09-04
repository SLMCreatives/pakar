import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center -mt-20">
      <p className="text-white">Hello {data.user.email}</p>
      <p className="text-white text-6xl">Welcome to Pakar.me!</p>
    </div>
  );
}
