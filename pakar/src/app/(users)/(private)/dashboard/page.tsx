import { createClient } from "@/utils/supabase/server";
import Dashboard from "@/components/dashboard-04";
import { redirect } from "../../../../../node_modules/next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: user_dataview, error } = await supabase
    .from("user_dataview")
    .select("*")
    .eq("auth_user_id", user?.id)
    .single();

  if (error) {
    console.log(error);
  } else if (user_dataview) {
    return (
      <div className="flex flex-col gap-8 -mt-32">
        <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
          <Dashboard data={user_dataview} user={user} />
        </div>
      </div>
    );
  }
}
