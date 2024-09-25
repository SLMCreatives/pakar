import Footer from "@/components/dashboard/DFooter";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { EnvelopeOpenIcon, FaceIcon } from "@radix-ui/react-icons";
import {
  AwardIcon,
  BookCheckIcon,
  Contact2,
  Contact2Icon,
  FacebookIcon,
  Globe,
  Globe2,
  Handshake,
  InboxIcon,
  Linkedin,
  Mail,
  Phone,
  SquareUserRound,
  SquareUserRoundIcon,
  Twitter,
  UserIcon,
  X,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const gradient = "bg-gradient-to-r from-violet-500 to-fuchsia-500";

export default async function Page({ params }: any) {
  console.log(params);
  const supabase = createClient();
  const { data: userProfiles, error } = await supabase
    .from("trainer_profile")
    .select("*")
    .eq("user_id", params.name)
    .single();

  if (error) {
    console.log(error);
  } else if (userProfiles) {
    console.log(userProfiles);
    return (
      <div className="flex flex-col gap-8 h-screen items-center -mt-20 m-4 bg-white md:max-w-3xl lg:max-w-6xl md:mx-auto">
        <Image
          src={userProfiles.avatarURL}
          alt={userProfiles.name}
          width={500}
          height={500}
          className="w-full md:hidden aspect-square rounded-xl m-0 p-0 object-cover"
        />
        <Card className="mx-auto flex flex-col w-full max-w-6xl justify-between">
          <CardHeader className="flex flex-col">
            <CardTitle className="flex flex-col md:flex-col-reverse items-center text-center justify-between gap-6">
              <div className="flex flex-col">
                <p className="text-2xl font-semibold">Hi! My name is </p>
                <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  {userProfiles.name}
                </span>
              </div>
              <Image
                src={userProfiles.avatarURL}
                alt={userProfiles.name}
                width={200}
                height={200}
                className="hidden md:flex aspect-square object-cover rounded-xl mr-4 ring-1 ring-slate-400 shadow-lg"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 items-center justify-evenly pb-6">
            <p className="text-xl text-center font-normal text-balance">
              I am a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold">
                {userProfiles.speciality}
              </span>{" "}
              expert with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold">
                {userProfiles.total_years_exp || 5} years
              </span>{" "}
              of training experience.
            </p>
          </CardContent>
          <CardFooter className="flex flex-row gap-4 py-4 bg-muted rounded-sm items-center justify-around">
            <Link href="#contact" className="btn btn-primary">
              Contact
            </Link>
            <Link href="#profile" className="btn btn-primary">
              Profile
            </Link>
            <Link
              href={userProfiles.contact.website}
              className="btn btn-primary"
            >
              Website
            </Link>
          </CardFooter>
        </Card>

        {/* Training Modules || Accordian */}
        <Card>
          <CardHeader>
            <p className="font-bold text-2xl ">My Bio</p>
          </CardHeader>
          <CardContent>
            <p className="md:text-xl">{userProfiles.bio}</p>
          </CardContent>
        </Card>

        {/* Cartification || Gallery */}
        <div
          className="grid grid-cols-1 w-full lg:grid-cols-2 gap-6"
          id="profile"
        >
          <Card className="mx-auto w-full">
            <CardHeader>
              <p className="font-bold text-2xl">Traininng Modules</p>
              <p className="text-md">
                Here are just some of the topics that I teach:
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {userProfiles.training_modules.modules.map(
                (module: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="text-center justify-start flex py-2 gap-4 md:text-lg font-semibold">
                      <BookCheckIcon className="h-6 w-6 fill-fuchsia-300" />
                      {module}
                    </CardContent>
                  </Card>
                )
              )}
            </CardContent>
          </Card>
          {/* Qualifications*/}
          <Card className="mx-auto w-full">
            <CardHeader>
              <p className="font-bold text-2xl">Qualifications</p>
              <p className="text-md">
                Over the years, I have been awarded with many recognitions.
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {userProfiles.qualification.qual.map(
                (qual: any, index: number) => (
                  <Card key={index} className="w-full">
                    <CardContent className=" justify-start items-center flex py-2 gap-4 md:text-lg font-semibold">
                      <AwardIcon className="h-8 w-8 fill-violet-300" />
                      {qual}
                    </CardContent>
                  </Card>
                )
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <p className="font-bold text-2xl ">My Experience</p>
            </CardHeader>
            <CardContent>
              <p className="md:text-xl">{userProfiles.experience.expInfo}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <p className="font-bold text-2xl ">My Approach</p>
            </CardHeader>
            <CardContent>
              <p className="md:text-xl">{userProfiles.approach.approachInfo}</p>
            </CardContent>
          </Card>
        </div>
        <Card id="contact" className="w-full">
          <CardHeader>
            <p className="font-bold text-2xl ">Contact Details</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <p className="flex gap-4">
                <Mail className="h-6 w-6 fill-fuchsia-300" />{" "}
                {userProfiles.contact.email}
              </p>
              <p className="flex gap-4">
                <Phone className="h-6 w-6 fill-fuchsia-300" />{" "}
                {userProfiles.contact.phone}
              </p>
              <p className="flex gap-4">
                <Globe className="h-6 w-6 fill-fuchsia-300" />{" "}
                {userProfiles.contact.website}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex gap-4">
                <FacebookIcon className="h-6 w-6 fill-fuchsia-300" />{" "}
                {userProfiles.contact.facebook}
              </p>
              <p className="flex gap-4">
                <Twitter className="h-6 w-6 fill-fuchsia-300" />{" "}
                {userProfiles.contact.x}
              </p>
              <p className="flex gap-4">
                <Linkedin className="h-6 w-6 fill-fuchsia-300" />{" "}
                {userProfiles.contact.linkedin}
              </p>
            </div>
          </CardContent>
        </Card>

        <Footer />
      </div>
    );
  }
}
