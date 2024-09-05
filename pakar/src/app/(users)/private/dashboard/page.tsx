import { createClient } from "@/utils/supabase/server";
import Dashboard from "@/components/dashboard";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("users_table")
    .select("*")
    .eq("auth_id", user?.id)
    .single();

  if (error) {
    redirect("/error");
  }

  return (
    <div className="flex flex-col gap-8 h-screen items-center justify-center -mt-20">
      <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
        <h1 className="text-3xl text-left font-semibold px-4 md:px-10">
          Dashboard
        </h1>
        <Dashboard />
      </div>
    </div>
  );
}
