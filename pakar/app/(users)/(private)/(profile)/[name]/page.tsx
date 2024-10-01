import Footer from "@/components/dashboard/DFooter";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";
import { EnvelopeOpenIcon, FaceIcon } from "@radix-ui/react-icons";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Award,
  AwardIcon,
  BookCheckIcon,
  Calendar,
  CheckCheckIcon,
  Clock1,
  Contact2,
  Contact2Icon,
  ContactRound,
  FacebookIcon,
  File,
  Globe,
  Globe2,
  Handshake,
  Inbox,
  InboxIcon,
  Linkedin,
  LucideUserCircle2,
  Mail,
  MapPin,
  Phone,
  SquareUserRound,
  SquareUserRoundIcon,
  Twitter,
  User,
  UserCircle,
  UserCircle2,
  UserIcon,
  X,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
const gradient = "bg-gradient-to-r from-indigo-500 to-fuchsia-500";

export default async function Page({ params }: any) {
  const supabase = createClient();
  const { data: userProfiles, error } = await supabase
    .from("trainer_profile")
    .select("*")
    .eq("user_id", params.name)
    .single();

  if (error) {
    console.log(error);
  } else if (userProfiles) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-4 lg:max-w-6xl mx-auto items-start justify-center">
        <div className="flex flex-col gap-8 items-start -mt-10 justify-center">
          <Link
            href="/findtrainers"
            className="flex flex-row items-center justify-start gap-2"
          >
            <ArrowLeftCircle className="w-5 h-5 text-primary" />{" "}
            <p className="text-sm text-primary">Back to Trainers</p>
          </Link>
          <Card className="w-full flex flex-row gap-4">
            <Image
              src={userProfiles.avatarURL}
              alt={userProfiles.name}
              width={200}
              height={200}
              className="flex min-w-[20rem] aspect-square object-cover rounded-xl mr-4 ring-1 ring-slate-400 shadow-lg"
            />

            <CardContent className="flex flex-col gap-2 p-4 justify-center items-start py-10 px-4">
              <p className="text-sm text-primary">{userProfiles.speciality}</p>
              <p className="text-4xl font-bold">{userProfiles.name}</p>
              <p className="text-md text-muted-foreground">
                {userProfiles.bio}
              </p>
              <div className="flex flex-row flex-wrap gap-x-2 gap-y-4 max-w-md pt-2">
                <Badge
                  variant="default"
                  className="text-xs rounded-full px-4 py-2"
                >
                  <Inbox className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.contact.email
                    ? userProfiles.contact.email
                    : "name@example.com"}
                </Badge>
                <Badge
                  variant="default"
                  className="text-xs rounded-full px-4 py-2"
                >
                  <MapPin className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.location ? userProfiles.location : "Selangor"}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs rounded-full px-4 py-2 "
                >
                  <Calendar className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.total_years_exp} years of experience
                </Badge>
                <br></br>
                <Badge
                  variant="outline"
                  className="text-xs rounded-full px-4 py-2"
                >
                  <Clock1 className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.rate ? userProfiles.rate : "RM 550/hr"}
                </Badge>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-10">
            {/* Training Modules || Accordian */}
            <Card className="border-none shadow-none pt-16">
              <CardHeader className="flex flex-row gap-2 items-center justify-start">
                <User className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl ">About {userProfiles.name}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-md line-spacing-6 text-muted-foreground  px-10">
                  {userProfiles.experience}
                </p>
                <p className="text-md line-spacing-6 text-muted-foreground  px-10">
                  {userProfiles.approach}
                </p>
              </CardContent>
            </Card>
            <hr></hr>
            <Card className="border-none shadow-none">
              <CardHeader className="flex flex-row gap-2 items-center justify-start">
                <AwardIcon className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl ">Qualifications</p>
              </CardHeader>
              <CardContent className="flex flex-row flex-wrap gap-2 pl-20">
                {userProfiles.qualification.qual
                  .split(",")
                  .map((qual: any, index: number) => (
                    <Badge
                      key={index}
                      variant="default"
                      className="text-md px-4 py-2 rounded-full"
                    >
                      <File className="w-4 h-4 mr-2" /> {qual}
                    </Badge>
                  ))}
              </CardContent>
            </Card>
            <hr></hr>
            <Card className="border-none shadow-none">
              <CardHeader className="flex flex-row gap-2 items-center justify-start">
                <BookCheckIcon className="w-8 h-8 text-primary" />
                <p className="font-bold text-2xl ">Training Modules</p>
              </CardHeader>
              <CardContent className="grid grid-cols-2 lg:grid-cols-3 gap-4 pl-20">
                {userProfiles.training_modules.modules
                  .split(",")
                  .map((modules: any, index: number) => (
                    <Card key={index} className="flex gap-2 max-w-50">
                      <CardHeader>
                        <CardTitle className="flex flex-col gap-4 text-lg">
                          <CheckCheckIcon className="min-w-10 min-h-10 p-1 rounded-full bg-indigo-100" />{" "}
                          {modules}
                        </CardTitle>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vitae veritatis non laboriosam voluptas ullam
                          repellat.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
              </CardContent>
            </Card>
            <hr></hr>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center sticky top-10">
          <Card className="w-full p-4">
            <CardHeader>
              <CardTitle className="font-bold text-2xl">
                Inform {userProfiles.name} you found them on Pakar.me!
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-md text-muted-foreground">
                Get in touch with {userProfiles.name} to set up a meeting with
                them.
              </p>
              <Button variant="default"> Get in touch</Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="border-none shadow-none">
            <CardHeader className="flex flex-row gap-2 items-center justify-start">
              <ContactRound className="w-8 h-8 text-primary" />
              <p className="font-bold text-2xl ">Contact Details</p>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 grid-cols-1 px-10">
              <div className="flex flex-col gap-4">
                <p className="text-md line-spacing-6 text-muted-foreground  px-10 flex flex-row gap-2">
                  <Inbox className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.contact.email}
                </p>
                <p className="text-md line-spacing-6 text-muted-foreground  px-10 flex flex-row gap-2">
                  <Phone className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.contact.phone}
                </p>
                <p className="text-md line-spacing-6 text-muted-foreground  px-10 flex flex-row gap-2">
                  <Globe2 className="w-4 h-4 mr-2" />{" "}
                  {userProfiles.contact.website}
                </p>
              </div>
              <div className="flex flex-col text-nowrap gap-4">
                <p className="text-md line-spacing-6 text-muted-foreground  px-10 flex flex-row gap-2">
                  <FacebookIcon className="min-w-4 min-h-4 mr-2" />{" "}
                  {userProfiles.contact.fb}
                </p>
                <p className="text-md line-spacing-6 text-muted-foreground  px-10 flex flex-row gap-2">
                  <Linkedin className="min-w-4 min-h-4 mr-2" />{" "}
                  {userProfiles.contact.li}
                </p>
                <p className="text-md line-spacing-6 text-muted-foreground  px-10 flex flex-row gap-2">
                  <Twitter className="min-w-4 min-h-4 mr-2" />{" "}
                  {userProfiles.contact.x}
                </p>
              </div>
            </CardContent>
          </Card>
          <hr></hr>
          <Footer />
        </div>
      </div>
    );
  }
}
