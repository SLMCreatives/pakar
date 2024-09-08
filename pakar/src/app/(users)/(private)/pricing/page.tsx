import { createClient } from "@/utils/supabase/server";
import Dashboard from "@/components/pricing";
import { redirect } from "next/navigation";

export default async function PricingPage() {
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
    <div className="flex flex-col gap-8 -mt-32">
      <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
        <Dashboard />
      </div>
    </div>
  );
}
