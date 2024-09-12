import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
      <div className="flex flex-col gap-8 h-screen items-center justify-start -mt-20 m-4">
        <Card className="mx-auto flex flex-col w-full max-w-6xl justify-between">
          <CardHeader className="flex flex-col">
            <CardTitle className="flex flex-col-reverse md:flex-row items-center text-center justify-between gap-4">
              <p className="text-5xl md:text-5xl font-semibold ">
                {userProfiles.user_name}
              </p>

              <Image
                src={userProfiles.avatarurl}
                alt={userProfiles.user_name}
                width={200}
                height={200}
                className=" aspect-square object-cover rounded-sm mr-4 ring-1 ring-slate-400 shadow-lg"
              />
            </CardTitle>

            <CardDescription className="flex flex-col gap-2 justify-center"></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 items-center justify-evenly pb-6">
            <span className="text-muted-foreground flex gap-2 items-center ">
              Speciality:
              <p className="font-semibold px-3 py-1 bg-muted rounded-full w-fit">
                {userProfiles.speciality}
              </p>
            </span>
            <span className="text-muted-foreground flex gap-2 items-center ">
              Years of Experience:
              <p className="font-semibold px-3 py-1 bg-muted rounded-full w-fit">
                {userProfiles.total_years_exp} years
              </p>
            </span>
            <span className="text-muted-foreground flex gap-2 items-center ">
              Rate per hour:
              <p className="font-semibold px-3 py-1 bg-muted rounded-full w-fit">
                RM {userProfiles.rate_per_hour}
              </p>
            </span>
          </CardContent>
          <CardFooter className="flex flex-row gap-4 py-4 bg-muted rounded-sm items-center justify-around">
            <Link href="#" className="btn btn-primary">
              Contact
            </Link>
            <Link href="#" className="btn btn-primary">
              Social
            </Link>
            <Link href="#" className="btn btn-primary">
              Website
            </Link>
          </CardFooter>
        </Card>
        <div className="mx-auto w-full max-w-6xl gap-2 pt-10 px-4 h-screen text-md">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Qualifications</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside">
                  {userProfiles.qualification.map((item: any) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Experience</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis dolorum ab voluptates optio quibusdam quo eius ipsam
                quaerat aperiam nemo?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Training Approach</AccordionTrigger>
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
        <hr className="w-full my-10"></hr>
      </div>
    );
  }
}
