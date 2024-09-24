//import Dashboard from "@/components/dashboard/dashboard-04";
import Profile from "@/components/dashboard/profile";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: cat } = await supabase
    .from("user_categories")
    .select("category")
    .eq("user_id", user?.id)
    .single();

  const { data: user_dataview, error } = await supabase
    .from(`${cat?.category}_profile`)
    .select("*")
    .eq("user_id", user?.id)
    .single();

  if (error) {
    console.log(error);
  } else if (!user_dataview) {
    return redirect("/type");
  } else {
    return (
      <div className="flex flex-col gap-8 -mt-32">
        <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
          <Profile data={user_dataview} user={user} />
        </div>
        {/* <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
          <Dashboard data={user_dataview} user={user} />
        </div> */}
      </div>
    );
  }
}
