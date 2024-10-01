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
    .select("*")
    .is("published", true)
    .range(0, 9);

  if (error || err) {
    console.log(error || err);
  } else {
    return (
      <div className="flex flex-col gap-8 h-screen items-center justify-start -mt-20">
        <div className="mx-auto w-full max-w-4xl lg:max-w-6xl gap-2 pt-10">
          <h1 className="text-3xl text-left font-semibold ">Our Trainers</h1>
          <p className="text-lg text-muted-foreground">
            Discover the best trainer for your for your next training session.
          </p>
          <div className="py-10">
            <TrainersTable data={trainerList} user={user} />
          </div>
        </div>
      </div>
    );
  }
}
