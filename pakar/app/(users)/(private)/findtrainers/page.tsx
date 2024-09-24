import { createClient } from "@/utils/supabase/server";
import { TrainersTable } from "@/components/dashboard/trainerstable";

export default async function TrainersPage() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  const { data: trainerList, error: err } = await supabase
    .from("trainer_profile")
    .select("*");

  if (error || err) {
    console.log(error || err);
  } else {
    const userProfiles = trainerList;
    return (
      <div className="flex flex-col gap-8 h-screen items-center justify-start -mt-20">
        <div className="mx-auto w-full max-w-6xl gap-2 pt-10">
          <h1 className="text-3xl text-left font-semibold px-4 md:px-10">
            Find Trainers
          </h1>
          <div className="p-8">
            <TrainersTable data={trainerList} user={user} />
          </div>
        </div>
      </div>
    );
  }
}
