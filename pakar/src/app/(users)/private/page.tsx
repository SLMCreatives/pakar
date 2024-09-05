import { redirect } from "next/navigation";
import { addName } from "../../login/action";
import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center -mt-20">
      <p className="">Hello {data.user.email}</p>
      <p className=" text-6xl">Welcome to Pakar.me!</p>
      <form className="flex flex-col text-center gap-4  mt-10">
        <input
          id="id"
          name="id"
          type="id"
          value={data.user.id}
          className="sr-only"
        />
        <input
          id="email"
          name="email"
          type="email"
          value={data.user.email}
          className="sr-only"
        />
        <label htmlFor="name">What is your full name?</label>
        <input
          id="name"
          className="bg-stone-200 p-1 px-2 rounded-sm"
          name="name"
          type="name"
        />
        <label htmlFor="age">What is your age?</label>
        <input
          id="age"
          className="bg-stone-200 p-1 px-2 rounded-sm"
          name="age"
          type="number"
        />
        <button
          className="p-1 px-4 mt-5 rounded-full bg-stone-100"
          formAction={addName}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
