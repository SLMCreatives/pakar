import Dheader from "@/components/dashboard/Dheader";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/sign-in");
  }

  const { data: cat } = await supabase
    .from("user_categories")
    .select("category")
    .eq("user_id", user?.id)
    .single();

  const { data: uAvatar, error } = await supabase
    .from(`${cat?.category}_profile`)
    .select("*")
    .eq("user_id", user?.id)
    .single();

  if (error) {
    console.log(error);
  } else if (uAvatar)
    return (
      <div className="w-full">
        <Dheader user={user} avtrURL={uAvatar} userCat={cat} />
        {children}
      </div>
    );
}
