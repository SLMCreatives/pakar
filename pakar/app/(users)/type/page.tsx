import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { newUser } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";
import { Input } from "@/components/ui/input";

export default async function TypePage() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  console.log(user);
  return (
    <div className="flex flex-col gap-4 items-center pt-32 ">
      <div className="pt-8">
        <p className="px-4 w-[400px] text-lg text-balance">Signup as a ...</p>
      </div>
      <Tabs defaultValue="" className="w-[400px]">
        <TabsList align="center" className="grid w-full grid-cols-2">
          <TabsTrigger value="trainer">Trainer</TabsTrigger>
          <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
        </TabsList>
        <TabsContent value="trainer" className="p-0">
          <Card className="p-0 rounded-none m-0">
            <CardHeader>
              <div className="flex flex-col justify-end">
                <p className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-3xl">
                  Trainer
                </p>{" "}
                <p className="text-md text-muted-foreground">or Consultant</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Register yourself as a trainer and add yourself to our database
                by filling in your details and publishing your profile.
              </p>
            </CardContent>
            <CardFooter>
              <form>
                <input
                  name="type"
                  id="type"
                  value="trainer"
                  className="hidden"
                />
                <input
                  name="id"
                  id="id"
                  value={user?.user?.id}
                  className="hidden"
                />
                <Button
                  formAction={newUser}
                  variant="default"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"
                >
                  Register as a trainer
                </Button>
              </form>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="recruiter" className="p-2 flex flex-col gap-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-end">
                <p className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-3xl">
                  Recruiter
                </p>{" "}
                <p className="text-md text-muted-foreground">or Company</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Register as a recruiter and gain access to our database of
                trainers, view their profile and get in contact with the right
                one for your needs.
              </p>
              <p className=" text-xs border-l-2 border-decoration-slice pl-4 mt-4">
                <span className="font-bold">Coming Soon!</span> <br></br>Leave a
                review and rate your experience.
              </p>
            </CardContent>
            <CardFooter>
              <form>
                <Input
                  name="type"
                  id="type"
                  value="recruiter"
                  className="hidden"
                />
                <Input
                  name="id"
                  id="id"
                  value={user?.user?.id}
                  className="hidden"
                />
                <Button
                  variant="default"
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500"
                  formAction={newUser}
                >
                  Register as a recruiter
                </Button>
              </form>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
