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
import { Input } from "@/components/ui/input";

const categories = [
  {
    name: "Business Management",
    desc: "How to manage your business with productivity tools and best practices",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Customer Experience",
    desc: "Equip your staff with the neccesary skills and knowledge to provide the best customer experience",
    img: "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            Hire the <span className="text-primary">best trainers</span> in
            Malaysia!
          </p>
          <p className="text-md lg:text-xl text-muted-foreground text-balance">
            Search for the best trainers with the right experience for your
            every business need.
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
            src="/svg/heroconnect2.svg"
            alt="hero"
            width={500}
            height={500}
            className="w-76 aspect-square object-contain rounded-lg"
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:max-w-6xl gap-6 lg:gap-10">
          {categories.map((category) => (
            <Link href="/findtrainers" key={category.name}>
              <Card className="flex flex-col group max-w-md">
                <CardContent className="p-4">
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="w-full aspect-video object-cover rounded-lg group-hover:shadow-lg shadow-primary group-hover:scale-105"
                  />
                </CardContent>
                <CardHeader className="p-4 px-8">
                  <CardTitle className="text-2xl font-bold flex flex-row gap-4 justify-between group-hover:text-primary">
                    {category.name}
                    <ExternalLink className="min-w-4 aspect-square group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground flex flex-row gap-4 justify-between">
                    {category.desc}
                  </CardDescription>
                </CardHeader>
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
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-4 w-full items-center justify-center ">
          <Image
            width={500}
            height={500}
            src="/svg/resume.svg"
            alt="Portfolio Review"
            className="w-36 lg:max-w-40 lg:mx-auto rounded-lg"
          />
          <Card className="lg:col-span-2 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex flex-col">
                <span className="text-sm font-bold text-primary py-2">
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
            className="w-36 lg:max-w-40 lg:mx-auto rounded-lg"
          />
          <Card className="lg:col-span-2 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex flex-col">
                <span className="text-sm font-bold text-primary py-2">
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
            className="w-36 lg:max-w-40 lg:mx-auto rounded-lg"
          />
          <Card className="lg:col-span-2 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex flex-col">
                <span className="text-sm font-bold text-primary py-2">
                  1% pass rate
                </span>
                Trial Session
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Every trainer is given a free 1-on-1 trial session to verify
                their teaching expertise.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="w-full bg-muted grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-10 gap-4">
        <div className="flex flex-col  gap-4 lg:px-32 ">
          <p className="text-3xl font-bold">
            Find the trainers you need to keep your business growing
          </p>
          <p className="text-lg font-muted-foreground">
            Contact us to learn more about out trainers database and discover
            how we can help you achieve your goals.
          </p>
          <div className="flex flex-row items-center gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              className="w-full h-12 bg-background text-muted-foreground"
            />
            <Button size="lg" className="w-52" variant="default">
              Hire A Trainer
            </Button>
          </div>
        </div>
        <Image
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1713946598417-437a1fccf2c6?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Trainer"
          className="w-full aspect-video rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-20 py-10 lg:max-w-6xl items-center justify-center">
        <Card className="flex flex-col items-center justify-center aspect-square bg-indigo-900 text-white p-10 rounded-xl">
          <CardHeader className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/svg/done.svg"
              alt="Trainer Application"
              width={200}
              height={200}
              className="bg-indigo-400 rounded-full w-40 h-40"
            />
            <CardTitle className="text-4xl font-bold">
              Apply as a Trainer
            </CardTitle>
            <CardDescription className="text-xl text-muted text-balance text-center">
              Are you an expert in your field? Join us and become part of our
              database of trainers.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Button size="lg" variant="default">
              {" "}
              Become a tainer{" "}
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center bg-indigo-600 text-white p-4 rounded-xl aspect-square">
          <CardHeader className="flex flex-col items-center justify-center gap-4">
            <Image
              src="/svg/select.svg"
              alt="Trainer Application"
              width={200}
              height={200}
              className="bg-indigo-200 rounded-full w-40 h-40"
            />
            <CardTitle className="text-4xl font-bold">Hire a Trainer</CardTitle>
            <CardDescription className="text-xl text-muted text-balance text-center">
              Are you looking for a trainer? Join us and gain access to our
              database of professional trainers.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Button size="lg" variant="default">
              Become a tainer{" "}
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <Footer />
      </div>
      {/* <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl scale-125 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-fuchsia-500 tracking-widest text-center py-4">
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
