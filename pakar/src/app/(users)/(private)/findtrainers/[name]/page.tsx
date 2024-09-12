import Footer from "@/app/components/DFooter";
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
import Image from "../../../../../../node_modules/next/image";
import Link from "../../../../../../node_modules/next/link";

const gradient = "bg-gradient-to-r from-violet-500 to-fuchsia-500";

export default async function Page({ params }: any) {
  const supabase = createClient();
  const { data: userProfiles, error } = await supabase
    .from("user_dataview")
    .select("*")
    .eq("auth_user_id", params.name)
    .single();

  if (error) {
    console.log(error);
  }

  if (userProfiles) {
    return (
      <div className="flex flex-col gap-8 h-screen items-center justify-start -mt-20 m-4 bg-white">
        <Image
          src={userProfiles.avatarurl}
          alt={userProfiles.user_name}
          width={200}
          height={200}
          className="w-full aspect-square rounded-xl m-0 p-0 object-cover"
        />
        <Card className="mx-auto flex flex-col w-full max-w-6xl justify-between">
          <CardHeader className="flex flex-col">
            <CardTitle className="flex flex-col md:flex-row items-center text-center justify-between gap-0">
              <p className="text-2xl md:text-5xl font-semibold ">
                Hi! My name is{" "}
              </p>
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                {userProfiles.user_name}
              </span>
              <Image
                src={userProfiles.avatarurl}
                alt={userProfiles.user_name}
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
                {userProfiles.total_years_exp} years
              </span>{" "}
              of training experience.
            </p>
          </CardContent>
          <CardFooter className="flex flex-row gap-4 py-4 bg-muted rounded-sm items-center justify-around">
            <Link href="#" className="btn btn-primary">
              Contact
            </Link>
            <Link href="#" className="btn btn-primary">
              Socials
            </Link>
            <Link href="#" className="btn btn-primary">
              Website
            </Link>
          </CardFooter>
        </Card>

        {/* Training Modules || Accordian */}
        <div className="mx-auto w-full max-w-6xl gap-4 pt-10 px-4 h-fit text-md">
          <p className="font-bold text-2xl ">Overview</p>
          <p className="mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam
            eaque ducimus sed sapiente dolore facere. Obcaecati quos, quasi
            voluptatem molestias, ipsa culpa iure provident consequatur, ut odio
            eum ipsum vitae.
          </p>
        </div>
        {/* Cartification || Gallery */}
        <div className="mx-auto w-full max-w-6xl gap-4 pt-10 px-4 h-fit text-md">
          <p className="font-bold text-2xl">Training Modules</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <Card className="aspect-video md:aspect-square flex rounded-xl items-center justify-center group hover:shadow-lg hover:scale-105">
              <div className="text-lg text-left p-4 items-center justify-center font-bold text-balance  ">
                <p className="text-md font-bold  ">
                  Creative Thinking Techniques
                </p>
                <p className="text-sm pt-2 font-normal">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </Card>
            <Card className="aspect-video md:aspect-square flex rounded-xl items-center justify-center group hover:shadow-lg hover:scale-105">
              <div className="text-lg text-left p-4 items-center justify-center font-bold text-balance  ">
                <p className="text-md font-bold  ">Creativity & Innovation</p>
                <p className="text-sm pt-2 font-normal">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </Card>
            <Card className="aspect-video md:aspect-square flex rounded-xl items-center justify-center group hover:shadow-lg hover:scale-105">
              <div className="text-lg text-left p-4 items-center justify-center font-bold text-balance  ">
                <p className="text-md font-bold  ">Creative Problem Solving</p>
                <p className="text-sm pt-2 font-normal">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </Card>
            <Card className="aspect-video md:aspect-square flex rounded-xl items-center justify-center group hover:shadow-lg hover:scale-105">
              <div className="text-lg text-left p-4 items-center justify-center font-bold text-balance  ">
                <p className="text-md font-bold  ">Thinking Outside The Box</p>
                <p className="text-sm pt-2 font-normal">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </Card>
          </div>
          {/* Other Information || Accordian */}
          <div className="mx-auto w-full max-w-6xl gap-4 pt-10 h-fit text-xl">
            <p className="font-bold text-2xl">Other Information</p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                  Qualifications
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside">
                    {userProfiles.qualification.map((item: any) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                  Experience
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis dolorum ab voluptates optio quibusdam quo eius
                  ipsam quaerat aperiam nemo?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  Training Approach
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  illo impedit temporibus porro quo minima placeat quam
                  exercitationem asperiores? Enim placeat voluptatum
                  exercitationem facere laudantium officiis accusamus quis ipsam
                  libero!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Contact Information || Accordian */}
          <div className="mx-auto w-full max-w-6xl gap-4 pt-10 h-fit text-xl">
            <p className="font-bold text-2xl">Get In Contact</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <Card className="md:aspect-square flex rounded-xl items-center justify-left group hover:shadow-lg hover:scale-105">
                <div className="text-lg text-left p-4 items-center justify-left font-bold ">
                  <p className="text-md font-bold">Email</p>
                  <p className="text-sm pt-2 font-normal">example@email.com</p>
                </div>
              </Card>
              <Card className=" md:aspect-square flex rounded-xl items-center justify-left group hover:shadow-lg hover:scale-105">
                <div className="text-lg text-left p-4 items-center justify-left font-bold text-balance  ">
                  <p className="text-md font-bold  ">Facebook</p>
                  <p className="text-sm pt-2 font-normal">
                    @{userProfiles.user_name.toLowerCase().slice(0, 10)}
                  </p>
                </div>
              </Card>
              <Card className=" md:aspect-square flex rounded-xl items-center justify-left group hover:shadow-lg hover:scale-105">
                <div className="text-lg text-left p-4 items-center justify-left font-bold text-balance  ">
                  <p className="text-md font-bold  ">Whatsapp</p>
                  <p className="text-sm pt-2 font-normal">0123456789</p>
                </div>
              </Card>
              <Card className=" md:aspect-square flex rounded-xl items-center justify-left group hover:shadow-lg hover:scale-105">
                <div className="text-lg text-left p-4 justify-left font-bold text-balance  ">
                  <p className="text-md font-bold  ">Twitter</p>
                  <p className="text-sm pt-2 font-normal">
                    @{userProfiles.user_name.toLowerCase().slice(0, 10)}
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
