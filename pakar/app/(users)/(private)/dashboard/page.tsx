import Profile from "@/components/dashboard/profile";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: cat, error: catError } = await supabase
    .from("user_categories")
    .select("category")
    .eq("user_id", user?.id)
    .single();

  const { data: user_dataview, error: profileError } = await supabase
    .from("trainer_profile")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  if (catError || profileError) {
    console.log(catError || profileError);
    return redirect("/type");
  } else {
    return (
      <div className="flex flex-col gap-8 -mt-32">
        <div className="mx-auto w-full max-w-6xl gap-2 pt-10 items-center justify-center">
          <Profile data={user_dataview} user={user} cats={cat} />
        </div>
      </div>
    );
  }
}
