import { createClient } from "@/utils/supabase/server";
import FindTrainers from "@/components/dashboard";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: user_profile, error } = await supabase
    .from("user_profile")
    .select("*");

  if (error) {
    redirect("/error");
  }
  console.log(user_profile);
  return (
    <div className="flex flex-col gap-8 h-screen items-center justify-center -mt-20">
      <div className="mx-auto w-full max-w-6xl gap-2 pt-16 items-center justify-center">
        <h1 className="text-3xl text-left font-semibold px-4 md:px-10">
          Find Trainers
        </h1>
        <FindTrainers data={user_profile} />
      </div>
    </div>
  );
}
