"use client";

import Footer from "@/components/dashboard/Footer";
import Header from "@/components/dashboard/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const categories = [
  {
    name: "Business Management",
    desc: "Learn how to manage your business the right way",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Creativity",
    desc: "Discover the power of creativity in problem solving and multitasking",
    img: "https://images.unsplash.com/photo-1545875589-7bacdcc464ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JlYXRpdmUlMjB0aGlua2luZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Teambuilding",
    desc: "Create the perfect environment for teamwork and excellence",
    img: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Finance",
    desc: "Manage your business finance according the industry best practice",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  return (
    <main className="flex flex-col items-center justify-start w-full pt-10">
      <Header />
      <div className="flex flex-col lg:flex-row gap-10 w-full items-center justify-center bg-muted p-10 h-[80vh]">
        <div className="flex flex-col gap-4 items-start justify-start lg:max-w-xl ">
          <p className="text-4xl lg:text-6xl font-bold">
            Hire the best trainers in Malaysia!
          </p>
          <p className="text-md lg:text-xl text-muted-foreground text-balance">
            Search for the best trainers in town with the right experience for
            your business needs.
          </p>
          <div className="flex flex-row flex-wrap gap-4">
            <Link href="/findtrainers">
              <Button size="lg" className="w-52" variant="default">
                Hire Trainer
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size="lg" className="w-52" variant="outline">
                Apply as Trainer
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 ">
          <Image
            src="/bg-hero.jpg"
            alt="hero"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-20 w-full lg:max-w-5xl px-10">
        <p className="text-4xl font-bold text-center">
          We are trusted by leading brands
        </p>
        <Carousel
          plugins={[plugin.current]}
          opts={{ loop: true, align: "center" }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="flex ml-2">
            {logos.map((logo) => (
              <CarouselItem key={logo.alt} className="basis-1/3 lg:basis-1/5">
                <Image
                  src={logo.logo}
                  alt={logo.alt}
                  width={500}
                  height={500}
                  className="max-w-24 lg:min-w-36 aspect-square object-contain rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-20 px-10">
        <div className="flex flex-col gap-4 w-full">
          <p className="text-4xl font-bold">Popular Categories</p>
          <p className="text-md">
            Find trainers by category. You can also search by name.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link href="/findtrainers" key={category.name}>
              <Card className="flex flex-col-reverse p-0 group">
                <CardHeader className="">
                  <CardTitle className="text-2xl font-bold flex flex-row gap-4 justify-between">
                    {category.name}
                    <ExternalLink className="min-w-4 aspect-square group-hover:scale-110 group-hover:fill-fuchsia-300 " />
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground flex flex-row gap-4 justify-between">
                    {category.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 m-0">
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-start justify-start gap-4 py-20 px-10 lg:px-0 w-full lg:max-w-6xl">
        <div className="flex flex-col lg:col-span-1 gap-4 w-full">
          <p className="text-4xl font-bold">Our Vetting Process</p>
          <p className="text-md text-muted-foreground">
            Our trainers are verified and have been vetted by our internal team
            to make ensure a reliable and professional training experience.
          </p>
          <div className="lg:flex flex-row flex-wrap gap-4 hidden ">
            <Link href="/sign-up">
              <Button size="lg" className="w-52" variant="default">
                Hire Trainers
              </Button>
            </Link>
            <Link href="#">
              <Button size="lg" className="w-52" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-4 w-full items-center justify-center">
          <Image
            width={500}
            height={500}
            src="/svg/resume.svg"
            alt="Portfolio Review"
            className="w-36 lg:max-w-40 mx-auto rounded-lg"
          />
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex flex-col">
                <span className="text-sm font-bold text-fuchsia-500 py-2">
                  25% pass rate
                </span>
                In-Depth Review
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                We vet your trainer by checking their profile and experience.
              </CardDescription>
            </CardHeader>
          </Card>
          <Image
            width={500}
            height={500}
            src="/svg/interview.svg"
            alt="Interview Session"
            className="w-36 lg:max-w-40 mx-auto rounded-lg"
          />
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex flex-col">
                <span className="text-sm font-bold text-fuchsia-500 py-2">
                  10% pass rate
                </span>
                Live Interview{" "}
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                All trainers are put throught a live interview session and given
                tasks to complete.
              </CardDescription>
            </CardHeader>
          </Card>
          <Image
            width={500}
            height={500}
            src="/svg/session.svg"
            alt="Live Session"
            className="w-36 lg:max-w-40 mx-auto rounded-lg"
          />
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex flex-col">
                <span className="text-sm font-bold text-fuchsia-500 py-2">
                  1% pass rate
                </span>
                Trail Session
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Every trainer is given a free 1-on-1 trial session to verify
                their teaching modules.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl scale-125 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 tracking-widest text-center py-4">
          PAKAR
        </h1>
        <p className="text-balance text-center text-lg">
          Database of{" "}
          <span className="font-semibold bg-muted-foreground/20  px-2 rounded-lg">
            corporate trainers
          </span>{" "}
          in Malaysia complete with their profile and training information.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center my-4">
          <Link href="/findtrainers">
            <Button size="lg" className="w-52" variant="default">
              Hire A Trainer
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="lg" className="w-52" variant="secondary">
              Become A Trainer
            </Button>
          </Link>
        </div>
        <div className="lg:flex gap-4 w-full py-8 hidden ">
          <Carousel
            plugins={[plugin.current]}
            orientation="horizontal"
            opts={{ loop: true }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="basis-1/2 md:basis-1/3">
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
                      className="absolute bottom-4 text-md  "
                    >
                      Creativity Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1529421308418-eab98863cee4?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 text-md bg-blend-darken">
                      Teambuilding Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1529232356377-57971f020a94?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 text-md">
                      Leadership Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 text-md">
                      Financial Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex gap-4 max-w-2xl py-8 lg:hidden ">
          <Carousel
            plugins={[plugin.current]}
            orientation="horizontal"
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="basis-1/2 md:basis-1/3">
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
                      className="absolute bottom-4 text-md  "
                    >
                      Creativity Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1529421308418-eab98863cee4?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 text-md bg-blend-darken">
                      Teambuilding Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1529232356377-57971f020a94?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 text-md">
                      Leadership Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3">
                <Card>
                  <CardContent className="flex flex-col items-center relative p-0">
                    <Image
                      width={200}
                      height={200}
                      src="https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="pk"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                    <Badge className="absolute bottom-4 text-md">
                      Financial Expert
                    </Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
       
      </div> */}
      {/*       <Footer />
       */}
    </main>
  );
}
