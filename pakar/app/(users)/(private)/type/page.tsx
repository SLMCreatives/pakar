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

export default async function TypePage() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  console.log(user);
  return (
    <div className="flex flex-col gap-4 items-center pt-32 ">
      <p className="py-4 w-[400px] text-xl">
        There are two ways to use Pakar.me
      </p>
      <Tabs defaultValue="trainer" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="trainer">Trainer</TabsTrigger>
          <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
        </TabsList>
        <TabsContent value="trainer" className=" p-2 gap-4">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-bold">
                As a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                  trainer
                </span>
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Register yourself as a trainer and add yourself to our database.
                Gain access to your profile, update your information and
                generate your own profile page.
              </p>
            </CardContent>
            <CardFooter>
              <form>
                <input name="type" id="type" value="trainer" />
                <input name="id" id="id" value={user?.user?.id} />
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
              <h3 className="text-xl font-bold">
                As a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                  recruiter
                </span>
              </h3>
            </CardHeader>
            <CardContent>
              <p>
                Register as a recruiter and start finding the right trainer.
                Gain access to our database of trainers, view their profile and
                get in contact with the right one for your needs.
              </p>
            </CardContent>
            <CardFooter>
              <form>
                <input name="type" id="type" value="recruiter" />
                <input name="id" id="id" value={user?.user?.id} />
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
