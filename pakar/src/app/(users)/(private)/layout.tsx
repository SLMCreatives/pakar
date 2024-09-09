import Dheader from "@/app/components/Dheader";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "../../../../node_modules/next/navigation";

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
    redirect("/login");
  }
  const { data, error } = await supabase.storage
    .from("avatar")
    .createSignedUrl(user.id + "-" + ".jpg", 3600);

  if (error) {
    console.log(error);
  }

  console.log(user.id, data);

  const userData = user;
  return (
    <div className="absolute top-0 w-full z-40 min-h-screen justify-start bg-white text-black">
      <Dheader user={userData} avatar={data} />
      {children}
    </div>
  );
}
