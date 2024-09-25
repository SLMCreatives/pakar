"use client";

import Link from "next/link";
import {
  CircleUser,
  Delete,
  DeleteIcon,
  Menu,
  Package2,
  Search,
  SearchIcon,
  Trash2Icon,
} from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function Profile({ data, user, cats }: any) {
  const [id, setUserID] = useState(`${user.id}`);
  const [name, setName] = useState(`${data?.name}`);
  const [avtrURL, setAvatarURL] = useState(`${data?.avatar_url}`);
  const [bio, setBio] = useState(`${data?.bio}`);
  const [expY, setExpY] = useState(`${data?.total_years_exp}`);
  //const [qual, setQual] = useState([`${data.qualification}`]);
  const [speciality, setSpeciality] = useState(`${data?.speciality}`);
  //const [contactInfo, setContactInfo] = useState([`${data.contact}`]);
  const [expInfo, setExpInfo] = useState([`${data.experience?.expInfo}`]);
  //const [modules, setModules] = useState([`${data.training_modules.modules}`]);
  const [approachInfo, setApproachInfo] = useState([
    `${data.approach?.approachInfo}`,
  ]);
  const [email, setEmail] = useState(`${data.contact?.email}`);
  const [phone, setPhone] = useState(`${data.contact?.phone}`);
  const [fb, setFb] = useState(`${data.contact?.facebook}`);
  const [x, setX] = useState(`${data.contact?.x}`);
  const [li, setLi] = useState(`${data.contact?.linkedin}`);
  const [website, setWebsite] = useState(`${data.contact?.website}`);
  const [moduleValue, setModuleVale] = useState("");
  const [modules, setModules] = useState<string[]>(
    `${data.training_modules?.modules}`.split(",")
  );
  const handleModuleChange = (e: any) => {
    setModuleVale(e.target.value);
  };

  const handleAddModule = (e: any) => {
    if (moduleValue.trim() !== "") {
      e.preventDefault();
      setModules([...modules, moduleValue.trim()]);
      setModuleVale("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddModule(event);
    }
  };

  const handleRemoveModule = (e: any, index: number) => {
    e.preventDefault();
    const newModules = [...modules];
    newModules.splice(index, 1);
    setModules(newModules);
  };

  const [qualValue, setQualValue] = useState("");
  const [quals, setQuals] = useState<string[]>(
    `${data.qualification?.qual}`.split(",")
  );
  const handleQualChange = (e: any) => {
    setQualValue(e.target.value);
  };

  const handleAddQual = (e: any) => {
    if (qualValue.trim() !== "") {
      e.preventDefault();
      setQuals([...quals, qualValue.trim()]);
      setQualValue("");
    }
  };

  const handleKeyDownQual = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddQual(event);
    }
  };

  const handleRemoveQual = (e: any, index: number) => {
    e.preventDefault();
    const newQuals = [...quals];
    newQuals.splice(index, 1);
    setQuals(newQuals);
  };

  const handleSubmit = async () => {
    const formData = {
      cats: cats,
      id: id,
      name: name,
      bio: bio,
      /*       avatar_url: avtrURL,
       */ tyl: expY,
      qualification: {
        qual: quals,
      },
      speciality: speciality,
      approach: {
        approachInfo: approachInfo,
      },
      experience: {
        expInfo: expInfo,
      },
      training_modules: {
        modules: modules,
      },
      contact: {
        email: email,
        phone: phone,
        facebook: fb,
        linkedin: li,
        website: website,
        x: x,
      },
    };
    console.log(formData);
    const supabase = createClient();
    const { error } = await supabase
      .from(`${cats}_profile`)
      .update({
        name: formData.name,
        bio: formData.bio,
        /*         avatarUrl: formData.avatar_url,
         */ total_years_exp: formData.tyl,
        speciality: formData.speciality,
        qualification: formData.qualification,
        approach: formData.approach,
        contact: formData.contact,
        experience: formData.experience,
        training_modules: formData.training_modules,
      })
      .eq("user_id", formData.id)
      .select();
    if (error) {
      console.log(error);
    }
    return redirect("/dashboard");
  };
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto flex flex-row w-full max-w-6xl items-end justify-between">
        <div className="flex flex-col gap-2 py-2">
          <h1 className="text-3xl font-semibold">Profile Details</h1>
          <p className="text-xs">
            Logged in as:{" "}
            <span className="bg-muted text-muted-foreground rounded-sm px-4 py-1">
              {user.email}
            </span>
          </p>
        </div>
        <Link href={`/findtrainers/${data.user_id}`} target="_blank">
          <Button variant="ghost" className="gap-2">
            <SearchIcon className="h-4 w-4" /> View Profile
          </Button>
        </Link>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Update your expert profile information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input id="id" value={id} className="sr-only" />
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder={data.name}
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2 hidden">
                  <Label htmlFor="avatar">Display Picture/Avatar URL</Label>
                  <Input
                    type="file"
                    id="avatar"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder={data.bio}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    maxLength={250}
                  />
                </div>
                <div className="py-2 space-y-2 flex flex-col gap-4">
                  <h3 className="text-lg font-semibold">Training Details</h3>
                  <div className="space-y-4 gap-4">
                    <Label
                      htmlFor="experience"
                      className="flex flex-row gap-2 items-center"
                    >
                      Total Years of Experience:{" "}
                      <p className="font-sm px-4 py-1 bg-muted">{expY}</p>
                    </Label>
                    <Slider
                      id="experience"
                      min={0}
                      max={50}
                      step={1}
                      value={data.total_years_exp?.value}
                      onValueChange={(e) => setExpY(e.toString())}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">
                      Specialty : {data.speciality}
                    </Label>
                    <Input
                      id="specialty"
                      placeholder={data.speciality}
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="training-modules">Training Modules</Label>
                    <div className="flex gap-2 items-end">
                      <div className="flex flex-col gap-2 w-full">
                        <Input
                          type="text"
                          value={moduleValue}
                          onChange={handleModuleChange}
                          onKeyDown={handleKeyDown}
                          placeholder="Enter module name"
                        />
                        <Input
                          type="text"
                          disabled
                          /* value={moduleDescValue}
                          onChange={handleModuleDescChange}
                          onKeyDown={handleKeyDownDesc} */
                          placeholder="Enter module description"
                        />
                      </div>
                      <Button onClick={handleAddModule}>Add</Button>
                    </div>
                  </div>
                  <div className="space-y-2 p-4 bg-muted/40 rounded-sm">
                    <p className="font-semibold text-md">Modules</p>
                    <ul className="space-y-2 flex flex-col">
                      {modules.map((module, index) => (
                        <li
                          key={index}
                          className="flex flex-row gap-2 items-center justify-between text-sm p-2 font-bold text-muted-foreground"
                        >
                          {module}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => handleRemoveModule(e, index)}
                          >
                            Remove
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualifications">Qualifications</Label>
                    <div className="flex gap-2 items-end">
                      <div className="flex flex-col gap-2 w-full">
                        <Input
                          type="text"
                          value={qualValue}
                          onChange={handleQualChange}
                          onKeyDown={handleKeyDownQual}
                          placeholder="Name of Cert (YYYY)"
                        />
                      </div>
                      <Button onClick={handleAddQual}>Add</Button>
                    </div>
                  </div>
                  <div className="space-y-2 p-4 bg-muted/40 rounded-sm">
                    <p className="font-semibold text-md">Qualifications</p>
                    <ul className="space-y-2 flex flex-col">
                      {quals.map((qual, index) => (
                        <li
                          key={index}
                          className="flex flex-row gap-2 items-center justify-between text-sm p-2 font-bold text-muted-foreground"
                        >
                          {qual}{" "}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => handleRemoveQual(e, index)}
                          >
                            Remove
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience-list">Experience</Label>
                    <Textarea
                      id="experience-list"
                      placeholder={data.experience}
                      value={expInfo}
                      onChange={(e) => setExpInfo(e.target.value.split(","))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="training-approach">Training Approach</Label>
                    <Textarea
                      id="training-approach"
                      placeholder={data.approach}
                      value={approachInfo}
                      onChange={(e) =>
                        setApproachInfo(e.target.value.split(","))
                      }
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Details</h3>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={data.contact || ""}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      placeholder="Facebook profile URL"
                      value={fb}
                      onChange={(e) => setFb(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      placeholder="Twitter profile URL"
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="LinkedIn profile URL"
                      value={li}
                      onChange={(e) => setLi(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
                <hr></hr>
                <div className="flex flex-row mt-4 justify-between">
                  <Button variant="outline" formAction={handleSubmit}>
                    Publish
                  </Button>
                  <Button variant="destructive" disabled size="icon">
                    <Trash2Icon className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
