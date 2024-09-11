import Dheader from "@/app/components/Dheader";
import Footer from "@/app/components/DFooter";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "../../../../node_modules/next/cache";
import { redirect } from "../../../../node_modules/next/navigation";
import { Toaster } from "@/components/ui/toaster";

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
    revalidatePath("/", "layout");
    redirect("/login");
  }

  const { data: uAvatar, error } = await supabase
    .from("user_dataview")
    .select("avatarurl")
    .eq("auth_user_id", user.id)
    .single();

  if (error) {
    console.log(error);
  } else if (uAvatar) {
    return (
      <div className="absolute top-0 w-full z-40 min-h-screen justify-start bg-white text-black">
        <Dheader user={user} avtrURL={uAvatar} />
        {children}
        <Toaster />
        <Footer />
      </div>
    );
  }
}
