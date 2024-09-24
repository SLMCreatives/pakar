"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Checkbox } from "../ui/checkbox";
import { addAvatar, deleteAvatar } from "@/app/api/addAvatar/actions";
import { editInfo, editSpeciality } from "@/app/api/editInfo/actions";
import { UserX } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { SubmitButton } from "../submit-button";

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
  const userX = user;
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

  /* useEffect(() => {
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
  }, []); */

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
                dname={dataX?.name}
                did={dataX?.user_id}
                avatar={dataX?.avatarURL}
                dbio={dataX?.bio}
              />
            </div>
            <hr
              className="my-4 bg-muted"
              id={components[1].component}
              ref={special}
            ></hr>
            <div className="md:h-screen">
              <SpecialSection sData={dataX} sDid={dataX?.user_id} />
            </div>
            <hr
              className="my-4 bg-muted"
              id={components[2].component}
              ref={qual}
            />
            <div className="md:h-screen">
              <QualificationSection qData={dataX.qualification} />
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
  dbio,
}: {
  dname: string;
  did: string;
  avatar: string;
  dbio: string;
}) {
  const [name, setName] = useState(dname);
  const [bio, setBio] = useState(dbio);
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
      <h3 className="text-xl font-bold lg:col-span-3">
        {dname + `'s`} Profile
      </h3>

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
            <Input id="id" name="id" value={Udid} className="sr-only" />

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
          <form className="flex flex-col gap-4">
            <Input id="id" name="id" value={Udid} className="sr-only" />
            <Label htmlFor="name">Full Name</Label>
            <Input
              placeholder={name}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              placeholder={bio || "Bio"}
              id="bio"
              name="bio"
              onChange={(e) => setBio(e.target.value)}
            />
            <SubmitButton
              type="submit"
              formAction={editInfo}
              pendingText="Saving Profile"
            >
              Save
            </SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export function QualificationSection(qData: any) {
  const dbQual = qData;
  console.log(dbQual);
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
        {/* 
        {dbQual.qData === null && <p>No Qualifications</p>}

        {dbQual?.qData !== null &&
          dbQual.qData?.map((item: any) => (
            <Card key={item.name} className="w-full p-0">
              <CardHeader>
                <CardTitle className="text-lg">
                  {item.name} / {item.year}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))} */}
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
      <Button className="w-full"  disabled>
        Add Qualification
      </Button>
    </div>
  );
}

export function SpecialSection(sData: any, sDid: any) {
  const uSpeciality = sData.sData.speciality;
  const userID = sData.sDid;
  console.log(userID);
  const [showOptions, setShowOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [newSpecial, setNewSpecial] = useState(uSpeciality);

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
  if (showOptions === true) {
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
          <form className="flex flex-col gap-4">
            <Input id="id" name="id" value={userID} className="sr-only" />
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
              <SubmitButton
                className="w-full"
                type="submit"
                variant="destructive"
                formAction={editSpeciality}
                pendingText="Saving..."
              >
                Save New Speciality
              </SubmitButton>
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
