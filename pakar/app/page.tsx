import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
    <main className="flex flex-col items-center justify-center px-3 lg:mx-52 h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold tracking-tight">Pakar.me</h1>
        <p className="text-balance text-center text-lg">
          Find the best Malaysian trainers for you!{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center my-4">
          <Link href="/sign-up">
            <Button size="lg" className="w-52" variant="secondary">
              Sign up as Trainer
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="lg" className="w-52" variant="default">
              Sign Up as Recruiter
            </Button>
          </Link>
        </div>
        <div></div>
      </div>
      <Footer />
    </main>
  );
}
