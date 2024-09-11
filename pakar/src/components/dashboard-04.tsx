"use client";

import { addAvatar, replaceAvatar } from "@/app/api/addAvatar/actions";
import { editInfo } from "@/app/api/editInfo/actions";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "../../node_modules/next/image";
import { Checkbox } from "./ui/checkbox";

const components = [
  {
    name: "Basic Information",
    component: "basic",
  },
  {
    name: "Qualification",
    component: "qualification",
  },
  {
    name: "Speciality",
    component: "special",
  },
  {
    name: "Contact",
    component: "contact",
  },
];
export default function Dashboard({ user, data }: any) {
  const [section, setSection] = useState("basic");
  const dataX = data;
  const basic = useRef(null);
  const qual = useRef(null);
  const special = useRef(null);
  const contact = useRef(null);

  const scrollIntoView = (ref: any) => {
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (section === "basic") {
      scrollIntoView(basic);
    } else if (section === "qualification") {
      scrollIntoView(qual);
    } else if (section === "special") {
      scrollIntoView(special);
    } else if (section === "contact") {
      scrollIntoView(contact);
    }
  }, [section]);

  return (
    <main className="flex flex-1 flex-col gap-4  p-6 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="md:grid flex flex-wrap gap-2 text-sm py-10 text-muted-foreground sticky top-0 bg-white z-20 ">
          {components.map((item) => (
            <Button
              variant={item.component === section ? "default" : "outline"}
              key={item.component}
              id={item.component}
              onClick={() => setSection(item.component)}
              className={
                item.component === section
                  ? "font-bold py-1 px-4 justify-end text-white bg-primary"
                  : "font-normal py-1 px-4 justify-end"
              }
            >
              {item.name}
            </Button>
          ))}
          <Button
            variant="outline"
            disabled
            className="font-normal py-1 px-4 justify-end"
          >
            Save Profile
          </Button>
        </nav>
        <hr className="md:hidden"></hr>
        <div className="px-4" ref={basic}>
          <div className="grid gap-10">
            <div>
              <BasicInfoSection
                dname={dataX?.user_name}
                did={dataX?.auth_user_id}
                avatar={dataX?.avatarurl}
              />
            </div>
            <hr className="my-4 bg-muted" id="qualification" ref={qual} />
            <div>
              <QualificationSection />
            </div>
            <hr className="my-4 bg-muted" id="special" ref={special}></hr>
            <div>
              <SpecialSection uData={dataX} />
            </div>
            <hr className="my-4 bg-muted" id="contact" ref={contact}></hr>
            <div>
              <ContactSection uData={user} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function BasicInfoSection({
  dname,
  did,
  avatar,
}: {
  dname: string;
  did: string;
  avatar: string;
}) {
  const [name, setName] = useState(dname);
  const Udid = did;
  const Uavatar = avatar;
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <h3 className="text-xl font-bold">Your Profile</h3>
        <Card x-chunk="A form to update the store name.">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Fill in your basic information.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" action={editInfo}>
              <Input id="id" name="id" value={Udid} className="sr-only" />
              <Label htmlFor="name">Full Name</Label>
              <Input
                placeholder={name}
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              {/*  <Label htmlFor="email">Email Address</Label>
              <Input placeholder={demail} id="email" name="email" disabled /> */}
              <Button type="submit">Save</Button>
            </form>
          </CardContent>
        </Card>
        <Card x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory.">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>
              Upload a professional-looking image of yourself.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-4 items-center justify-center">
            <Image
              src={Uavatar}
              alt="Upload image"
              width={100}
              height={100}
              className="w-32 rounded-full aspect-square"
            />
            <form className="flex flex-col gap-4 mt-4 p-2">
              <Input type="hidden" id="id" name="id" value={Udid} />

              <Label htmlFor="avatar">Upload</Label>
              <Input type="file" id="avatar" name="avatar" />

              <Button type="submit" formAction={addAvatar}>
                Save
              </Button>
              <Button type="submit" formAction={replaceAvatar}>
                Replace
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function QualificationSection() {
  const userQualification = [
    {
      name: "Certificate in Leadership",
      description: "Lorem ipsum dolor sit amet",
      year: "2020",
    },
    {
      name: "Certificate in Management",
      description: "Lorem ipsum dolor sit amet",
      year: "2017",
    },
    {
      name: "Bachelors in Computer Science",
      description: "Lorem ipsum dolor sit amet",
      year: "2003",
    },
  ];
  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Your Qualification</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userQualification.length === 0 && <p>No Qualification</p>}
        {userQualification?.map((item) => (
          <Card key={item.name} className="w-full p-0">
            <CardHeader>
              <CardTitle className="text-lg">
                {item.name} / {item.year}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Button className="w-full">Add Qualification</Button>
    </div>
  );
}

export function SpecialSection({ uData }: any) {
  const uSpeciality = uData.speciality;
  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Your Speciality</h3>
      <div className="grid grid-cols-1 gap-4">
        {uSpeciality.length === 0 && <p>No Speciality</p>}
        {uSpeciality.length !== 0 && (
          <Card
            key={uSpeciality}
            className="w-full items-center justify-center px-2 py-1 text-center"
          >
            {uSpeciality}
          </Card>
        )}
      </div>
      <Button className="w-full">Change Speciality</Button>
    </div>
  );
}

export function ContactSection({ uData }: any) {
  const email = uData.email;
  const phone = uData.phone;
  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Your Contact Information</h3>

      <Card x-chunk="A form to update the store name.">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription>
            This will be displayed on your profile page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Label htmlFor="email">Email Address</Label>
            <Input placeholder={email} id="email" disabled />
            <Label htmlFor="age">Phone Number</Label>
            <Input
              type="number"
              placeholder={phone || "0123456789"}
              id="phone"
              disabled
            />

            <div className="flex flex-row gap-2 mt-4">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button disabled>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
