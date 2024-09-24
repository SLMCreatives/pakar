import Link from "next/link";

const profiles = [
  {
    name: "Azamil Izzat",
    image: "https://i.pravatar.cc/300?u=johndoe",
    category: "Management",
  },
  {
    name: "Umar Abdul Aziz",
    image: "https://i.pravatar.cc/300?u=41",
    category: "Leadership",
  },
  {
    name: "Karina Sofiah",
    image: "https://i.pravatar.cc/300?u=73",
    category: "Sustainable Development",
  },
  {
    name: "Sulaiman Shafiq",
    image: "https://i.pravatar.cc/300?u=19",
    category: "Creative Thinking",
  },
  {
    name: "Nurul Salihah",
    image: "https://i.pravatar.cc/300?u=28",
    category: "HR",
  },
  {
    name: "Siti Hanifah",
    image: "https://i.pravatar.cc/300?u=47",
    category: "Business & Human Rights",
  },
];

export default function TrainersPage() {
  return (
    <div className="mx-auto flex h-fit w-full flex-col items-center justify-start gap-10 bg-black px-3 text-white lg:w-[50%]">
      <div className="flex flex-col gap-4 py-10 text-center">
        <h1 className="text-5xl font-bold">Trainers</h1>
        <p>Search for the best trainers in town</p>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-x-3 gap-y-6 px-4 md:grid-cols-3 md:px-10 lg:grid-cols-3">
        {profiles.map((profile) => (
          <Link href="/trainers/profile" key={profile.name}>
            <div
              className="group flex flex-col items-center gap-0 px-2 py-2 text-center md:px-6 md:py-4"
              key={profile.name}
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="rounded-full ring-1 ring-slate-300 duration-300 group-hover:ring-cyan-400"
              />
              <p className="mt-4 text-lg font-bold group-hover:text-cyan-400 md:text-xl">
                {profile.name}
              </p>
              <em className="text-sm text-slate-300">{profile.category}</em>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
