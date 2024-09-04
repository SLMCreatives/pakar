import Link from "next/link";

const categories = [
  "Business Management",
  "Creative Thinkings",
  "Teambuilding",
  "Leadership",
  "HR",
  "Human Rights",
  "Finance",
];

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

const logos = [
  {
    alt: "LHI Consulting",
    logo: "/logos/lhi.png",
  },
  {
    alt: "Air Selangor",
    logo: "/logos/AS.png",
  },
  {
    alt: "Bank Rakyat",
    logo: "/logos/BR.png",
  },
  {
    alt: "ILSAS",
    logo: "/logos/ilsas.png",
  },
  {
    alt: "TM",
    logo: "/logos/TM.png",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-black px-3 text-white lg:mx-52">
      <div className="absolute top-0 h-[80vh] w-full">
        <img
          src="/bg-hero.jpg"
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-transparent to-black object-cover"></div>
      </div>
      <div className="container z-10 flex h-[60vh] flex-col items-center justify-center gap-10 px-4">
        <h1 className="-mb-10 text-[5rem] font-extrabold tracking-tight">
          <span className="font-extrabold">Pakar</span>
          .me
        </h1>
        <p className="text-balance text-center text-lg">
          Database jurulatih profesional yang berpengalaman di Malaysia.
        </p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 md:w-2/3">
          {categories.map((category) => (
            <Link href="/trainers" key={category}>
              <div
                className="rounded-full bg-transparent px-3 py-1 text-sm tracking-wide ring-1 ring-white hover:bg-white hover:text-black hover:shadow-lg"
                key={category}
              >
                <p>{category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 items-start justify-center gap-x-4 gap-y-8 px-8 pt-36 md:grid-cols-3 md:px-10 lg:grid-cols-3">
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
      <Link href="/trainers">
        <div className="flex flex-col items-center gap-0 rounded-full bg-transparent px-4 py-1 text-center text-white ring-1 ring-white">
          <p className="text-sm">View All</p>
        </div>
      </Link>
      <div className="mt-20 flex w-[104%] flex-col items-center justify-center gap-4 overflow-x-clip px-0 py-6">
        <p className="text-2xl font-extrabold">Trusted By:</p>
        <div className="flex flex-grow flex-row flex-wrap items-center justify-center gap-10">
          {logos.map((logo) => (
            <img
              src={logo.logo}
              alt={logo.alt}
              className="h-20 w-24 object-contain brightness-200"
              key={logo.alt}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
