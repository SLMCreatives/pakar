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

  const { data: uAvatar, error } = await supabase
    .from("trainer_profile")
    .select("avatarURL")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.log(error);
  } else if (uAvatar)
    return (
      <div className="absolute top-0 w-full z-40 justify-start bg-white text-black">
        <Dheader user={user} avtrURL={uAvatar} />
        {children}
      </div>
    );
}
