import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <main className="flex flex-col items-center justify-center px-3 lg:mx-52 min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 max-w-2xl">
        <h1 className="text-6xl font-bold tracking-tight">Pakar.me</h1>
        <p className="text-balance text-center text-lg">
          Database of{" "}
          <span className="font-semibold bg-muted-foreground/20  px-2 rounded-lg">
            corporate trainers
          </span>{" "}
          in Malaysia complete with their profile and training information.
        </p>
        <div className="flex flex-row gap-4 items-center my-4">
          <Link href="/findtrainers">
            <Button size="lg" className="w-52" variant="default">
              Hire A Trainer
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="lg" className="w-52" variant="secondary">
              Become a Trainer
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 max-w-2xl py-8">
          <Carousel orientation="horizontal" opts={{ loop: true }}>
            <CarouselContent>
              <CarouselItem className="basis-1/2 md:basis-1/4">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge
                      variant="default"
                      className="absolute bottom-4 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    >
                      #Creativity
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/4">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1529421308418-eab98863cee4?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      #Teambuilding
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/4">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1529232356377-57971f020a94?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      #Leadership
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/4">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      #Finance
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        </div>
        {/* <div className="flex flex-row items-center justify-center">
          <Card>
            <CardHeader>
              <CardTitle>How to use Pakar.me?</CardTitle>
            </CardHeader>
            <CardContent>
              1. Register as a trainer. 2. Submit your profile. 3. Publish your
              profile on Pakar.me.
            </CardContent>
            <CardFooter>Register now!</CardFooter>
          </Card>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}
