import { createClient } from "@/utils/supabase/server";
import { TrainersTable } from "@/components/trainerstable";

export default async function TrainersPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: userProfiles, error } = await supabase
    .from("user_dataview")
    .select("*");

  if (error) {
    console.log(error);
  } else if (userProfiles) {
    return (
      <div className="flex flex-col gap-8 h-screen items-center justify-start -mt-20">
        <div className="mx-auto w-full max-w-6xl gap-2 pt-10">
          <h1 className="text-3xl text-left font-semibold px-4 md:px-10">
            Find Trainers
          </h1>
          <div className="p-8">
            <TrainersTable data={userProfiles} user={user} />
          </div>
        </div>
      </div>
    );
  }
}
