"use client";

import {
  addAvatar,
  replaceAvatar,
  deleteAvatar,
} from "@/app/api/addAvatar/actions";
import { editInfo, editSpeciality } from "@/app/api/editInfo/actions";
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
import { stringify } from "querystring";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

const components = [
  {
    name: "Basic Information",
    component: "basic",
  },
  {
    name: "Speciality",
    component: "special",
  },
  {
    name: "Qualification",
    component: "qualification",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      { threshold: 1.0 }
    );

    basic.current && observer.observe(basic.current);
    qual.current && observer.observe(qual.current);
    special.current && observer.observe(special.current);
    contact.current && observer.observe(contact.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4  p-6 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <div className="flex flex-col sticky top-5 justify-between">
          <nav className="md:grid gap-4 text-sm pb-10 items-start text-muted-foreground bg-white z-20 hidden ">
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
          </nav>
          <Button
            variant="destructive"
            disabled
            className="font-normal py-1 px-4 hidden md:flex"
          >
            Publish Profile
          </Button>
        </div>
        <div className="px-4 ">
          <hr className="opacity-10"></hr>
          <div className="grid gap-10">
            <span className="sr-only" id={components[0].component} ref={basic}>
              User Dashboard
            </span>
            <div className="md:h-screen">
              <BasicInfoSection
                dname={dataX?.user_name}
                did={dataX?.auth_user_id}
                avatar={dataX?.avatarurl}
              />
            </div>
            <hr
              className="my-4 bg-muted"
              id={components[1].component}
              ref={special}
            ></hr>
            <div className="md:h-screen">
              <SpecialSection sData={dataX} sDid={dataX?.auth_user_id} />
            </div>
            <hr
              className="my-4 bg-muted"
              id={components[2].component}
              ref={qual}
            />
            <div className="md:h-screen">
              <QualificationSection qData={dataX} />
            </div>
            <hr
              className="my-4 bg-muted"
              id={components[3].component}
              ref={contact}
            ></hr>
            <div className="md:h-screen">
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
  function showReplaceButton() {
    const input = document.getElementById("avatar");
    const replaceButton = document.getElementById("upload-button");
    const avatarLabel = document.getElementById("avatar-label");
    if (input) {
      replaceButton?.removeAttribute("disabled");
      avatarLabel?.classList.add("hidden");
    } else {
      replaceButton?.setAttribute("disabled", "true");
      avatarLabel?.classList.remove("hidden");
    }
  }
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <h3 className="text-xl font-bold lg:col-span-3">{name}'s Profile</h3>

      <Card
        x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory."
        className="lg:col-span-2"
      >
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>
            Upload a professional-looking image of yourself.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-4 items-center justify-center">
          <Image
            src={Uavatar || "/logo.jpg"}
            alt="Upload image"
            width={100}
            height={100}
            className="w-32 rounded-full aspect-square"
          />
          <form className="flex flex-col gap-4 mt-4 p-2 items-start">
            <Input type="hidden" id="id" name="id" value={Udid} />

            <Input
              type="file"
              id="avatar"
              name="avatar"
              onClickCapture={() => showReplaceButton()}
            />
            <Label
              htmlFor="avatar"
              id="avatar-label"
              className="text-xs text-right w-full text-red-500 pl-2 -mt-2 opacity-50"
            >
              <em>Accepts jpg file only (.jpg, .jpeg)</em>
            </Label>
            <Button
              type="submit"
              className="w-full"
              id="upload-button"
              disabled
              formAction={addAvatar}
            >
              Upload Photo
            </Button>

            {Uavatar ? (
              <Button
                variant="destructive"
                type="submit"
                formAction={deleteAvatar}
                className="w-full"
              >
                Delete
              </Button>
            ) : null}
          </form>
        </CardContent>
      </Card>
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
    </div>
  );
}

export function QualificationSection(qData: any) {
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
        {userQualification?.map((item: any) => (
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
      <Button className="w-full" disabled>
        Add Qualification
      </Button>
    </div>
  );
}

export function SpecialSection(sData: any, sDid: any) {
  const uSpeciality = sData.sData.speciality;
  const Udid = sData.sDid;
  const [showOptions, setShowOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [newSpecial, setNewSpecial] = useState("");

  if (showOptions === true) {
    const specialities = [
      {
        value: "Leadership",
        label: "Leadership",
      },
      {
        value: "Customer Service",
        label: "Customer Service",
      },
      {
        value: "Teambuilding",
        label: "Teambuilding",
      },
      {
        value: "Microsoft Office",
        label: "Microsoft Office",
      },
      {
        value: "Creativity",
        label: "Creativity",
      },
    ];
    return (
      <div className="grid gap-6">
        <h3 className="text-xl font-bold">Choose Your Speciality</h3>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? specialities.find(
                    (specialitie) => specialitie.value === value
                  )?.label
                : "Select Speciality..."}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput
                placeholder="Search for speciality..."
                className="h-9"
              />
              <CommandList>
                <CommandEmpty>No specialitie found.</CommandEmpty>
                <CommandGroup>
                  {specialities.map((specialitie) => (
                    <CommandItem
                      key={specialitie.value}
                      value={specialitie.value}
                      onSelect={(currentValue) => {
                        setNewSpecial(currentValue);
                        setShowOptions(false);
                      }}
                    >
                      {specialitie.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Your Speciality</h3>
      <div className="grid grid-cols-1 gap-4">
        <Card className="w-full items-center justify-center px-2 py-1 text-center">
          <form className="flex flex-col gap-4" action={editSpeciality}>
            <Input type="hidden" id="id" name="id" value={Udid} />
            <Input
              type="hidden"
              id="speciality"
              name="speciality"
              value={newSpecial}
              onChange={(e) => setNewSpecial(e.target.value)}
            />

            <p className="text-xl font-bold py-2">
              {newSpecial ? newSpecial : uSpeciality}
            </p>

            <Button
              className="w-full"
              id="changeButton"
              onClick={() => setShowOptions(true)}
            >
              Change Speciality
            </Button>
            {newSpecial && (
              <Button
                className="w-full"
                type="submit"
                variant="destructive"
                formAction={editSpeciality}
              >
                Save New Speciality
              </Button>
            )}
          </form>
        </Card>
      </div>
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
