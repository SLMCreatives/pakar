"use client";

import Link from "next/link";
import {
  ArrowRightCircleIcon,
  AwardIcon,
  BookCheckIcon,
  CheckCircle2Icon,
  CheckIcon,
  CircleUser,
  Delete,
  DeleteIcon,
  EditIcon,
  ListCheck,
  Menu,
  Package2,
  Search,
  SearchIcon,
  SendIcon,
  Trash2Icon,
  XCircleIcon,
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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { addAvatar } from "@/app/api/addAvatar/actions";
import { SubmitButton } from "../submit-button";
import {
  handleSubmit,
  publishProfileAction,
  updateContactAction,
  updateProfileAction,
  uploadAvatarURL,
} from "@/app/actions";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Loading from "@/app/(users)/(private)/loading";

export default function Profile({ data, user, cats }: any) {
  const [id, setUserID] = useState(`${user.id}`);
  const [name, setName] = useState(`${data?.name}`);
  const [avtrURL, setAvatarURL] = useState<File | null>(null);
  const [bio, setBio] = useState(`${data?.bio}`);
  const [expY, setExpY] = useState(`${data?.total_years_exp}`);
  //const [qual, setQual] = useState([`${data.qualification}`]);
  const [newspcl, setSpeciality] = useState(`${data?.speciality}`);
  //const [contactInfo, setContactInfo] = useState([`${data.contact}`]);
  const [expInfo, setExpInfo] = useState(`${data?.experience}`);
  //const [modules, setModules] = useState([`${data.training_modules.modules}`]);
  const [approachInfo, setApproachInfo] = useState(`${data?.approach}`);
  const [email, setEmail] = useState(`${data.contact?.email}`);
  const [phone, setPhone] = useState(`${data.contact?.phone}`);
  const [fb, setFb] = useState(`${data.contact?.fb}`);
  const [x, setX] = useState(`${data.contact?.x}`);
  const [li, setLi] = useState(`${data.contact?.li}`);
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
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto flex flex-row w-full max-w-6xl items-end justify-between">
        <div className="flex flex-col gap-2 py-2 px-4">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-xs">
            Logged in as:{" "}
            <span className="bg-muted text-muted-foreground rounded-sm px-4 py-1">
              {user.email}
            </span>
          </p>
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="w-36 gap-2">
                <EditIcon className="h-4 w-4" /> Upload Avatar
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-grow w-full p-2 bg-transparent border-none shadow-none">
              <Card className="w-90">
                <CardHeader>
                  <CardTitle>Upload Avatar</CardTitle>
                </CardHeader>
                <CardContent>
                  <form id="upload-button">
                    <div className="flex flex-row gap-2">
                      <Label htmlFor="userID" className="sr-only" />
                      <Input
                        id="userAid"
                        name="userAid"
                        value={id}
                        readOnly
                        className="sr-only"
                      />
                      <Input
                        id="avatar"
                        name="avatar"
                        type="file"
                        onChange={(e) => setAvatarURL(e.target.files![0])}
                      />
                      <Button
                        type="submit"
                        variant="default"
                        formAction={uploadAvatarURL}
                      >
                        Upload
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </PopoverContent>
          </Popover>
          <form>
            <Input
              id="userPid"
              name="userPid"
              value={id}
              readOnly
              className="sr-only"
            />
            <Button
              variant="default"
              size="sm"
              className="gap-2 w-36"
              disabled={data.published === true}
              formAction={publishProfileAction}
            >
              <SendIcon className="h-4 w-4" />{" "}
              {data.published === true ? "Published" : "Publish Profile"}
            </Button>
          </form>
        </div>
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
                  <Label htmlFor="userId" className="sr-only">
                    User ID
                  </Label>
                  <Input
                    id="userId"
                    name="userId"
                    value={id}
                    readOnly
                    className="sr-only"
                  />
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={data.name || "Enter your name"}
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder={data.bio || "Enter your bio"}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    maxLength={250}
                  />
                </div>
                <SubmitButton
                  type="submit"
                  variant="default"
                  pendingText="Saving..."
                  formAction={handleSubmit}
                  className="w-full"
                >
                  Save
                </SubmitButton>
              </form>
            </CardContent>
          </Card>

          {/* Training Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex flex-row items-center justify-between w-full">
                <p>Training Details</p>
                <Popover>
                  <PopoverTrigger>
                    <ListCheck className="h-4 w-4 fill-fuchsia-300" />
                  </PopoverTrigger>
                  <PopoverContent className="w-fit p-2 bg-transparent border-none shadow-none">
                    <Card>
                      <CardHeader>
                        <CardTitle>Checklist</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col text-nowrap gap-2 text-sm">
                          <p className="flex flex-row gap-4">
                            {newspcl ? (
                              <CheckCircle2Icon className="h-4 w-4 fill-green-300" />
                            ) : (
                              <XCircleIcon className="h-4 w-4 fill-red-300" />
                            )}
                            Speciality
                          </p>
                          <p className="flex flex-row gap-4">
                            {expY ? (
                              <CheckCircle2Icon className="h-4 w-4 fill-green-300" />
                            ) : (
                              <XCircleIcon className="h-4 w-4 fill-red-300" />
                            )}
                            Years of Experience
                          </p>
                          <p className="flex flex-row gap-4">
                            {modules.length > 0 ? (
                              <CheckCircle2Icon className="h-4 w-4 fill-green-300" />
                            ) : (
                              <XCircleIcon className="h-4 w-4 fill-red-300" />
                            )}
                            Training Modules
                          </p>
                          <p className="flex flex-row gap-4">
                            {quals.length > 0 ? (
                              <CheckCircle2Icon className="h-4 w-4 fill-green-300" />
                            ) : (
                              <XCircleIcon className="h-4 w-4 fill-red-300" />
                            )}
                            Qualificationss
                          </p>

                          <p className="flex flex-row gap-4">
                            {expInfo.length > 3 ? (
                              <CheckCircle2Icon className="h-4 w-4 fill-green-300" />
                            ) : (
                              <XCircleIcon className="h-4 w-4 fill-red-300" />
                            )}
                            Experience
                          </p>
                          <p className="flex flex-row gap-4">
                            {approachInfo.length > 3 ? (
                              <CheckCircle2Icon className="h-4 w-4 fill-green-300" />
                            ) : (
                              <XCircleIcon className="h-4 w-4 fill-red-300" />
                            )}
                            Training Approach:{" "}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </PopoverContent>
                </Popover>
              </CardTitle>
              <CardDescription>
                Update your expert training details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="py-2 space-y-2 flex flex-col gap-4">
                  <div className="flex flex-col gap-8 w-full">
                    <Label htmlFor="userId" className="sr-only">
                      User ID
                    </Label>
                    <Input
                      id="userId"
                      name="userId"
                      value={id}
                      readOnly
                      className="sr-only"
                    />
                    <div className="space-y-10">
                      <div className="space-y-2">
                        <Label htmlFor="speciality">Specialty</Label>
                        <Input
                          id="speciality"
                          name="speciality"
                          placeholder={
                            data.speciality || "Enter your specialty"
                          }
                          value={newspcl}
                          onChange={(e) => setSpeciality(e.target.value)}
                        />
                      </div>
                      <div className="space-y-6">
                        <Label
                          htmlFor="expY"
                          className="flex flex-row gap-2 items-center"
                        >
                          Total Years of Experience
                        </Label>
                        <div className="flex flex-row gap-4">
                          <Slider
                            id="expY"
                            name="expY"
                            min={0}
                            max={50}
                            step={1}
                            value={[parseInt(expY)]}
                            onValueChange={(e) => setExpY(e[0].toString())}
                          />
                          <p className="text-sm">{expY}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator className="w-full" />
                  <div className="flex flex-col gap-4">
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
                            id="modules"
                            name="modules"
                            type="hidden"
                            value={modules.toString()}
                            readOnly
                          />
                        </div>
                        <Button onClick={handleAddModule}>Add</Button>
                      </div>
                    </div>
                    <div className="space-y-2 p-4 bg-muted rounded-sm">
                      <p className="font-semibold text-md">Modules</p>
                      <ul className="space-y-2 flex flex-col">
                        {modules && modules.length === 0 && (
                          <p className="text-sm text-muted-foreground">
                            No modules yet
                          </p>
                        )}
                        {modules &&
                          modules.map((module, index) => (
                            <li
                              key={index}
                              className="flex flex-row gap-2 items-center justify-between  text-sm pl-2"
                            >
                              <div className="flex gap-2 items-center">
                                <BookCheckIcon className="h-4 w-4" /> {module}
                              </div>
                              <Button
                                className=""
                                variant="ghost"
                                size="icon"
                                onClick={(e) => handleRemoveModule(e, index)}
                              >
                                <Trash2Icon className="h-4 w-4 text-red-300" />
                              </Button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
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
                          <Input
                            id="qualifications"
                            name="qualifications"
                            type="hidden"
                            value={quals}
                            readOnly
                          />
                        </div>
                        <Button onClick={handleAddQual}>Add</Button>
                      </div>
                    </div>
                    <div className="space-y-2 p-4 bg-muted rounded-sm">
                      <p className="font-semibold text-md">Qualifications</p>
                      <ul className="space-y-2 flex flex-col">
                        {quals?.length === 0 && (
                          <p className="text-sm text-muted-foreground">
                            No qualifications yet
                          </p>
                        )}
                        {quals?.map((qual, index) => (
                          <li
                            key={index}
                            className="flex flex-row gap-2 items-center justify-between text-sm pl-2"
                          >
                            <div className="flex gap-2 items-center">
                              <AwardIcon className="h-4 w-4" /> {qual}
                            </div>{" "}
                            <Button
                              className=""
                              variant="ghost"
                              size="icon"
                              onClick={(e) => handleRemoveQual(e, index)}
                            >
                              <Trash2Icon className="h-4 w-4 text-red-300" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      placeholder={
                        data.experience.expInfo
                          ? data.experience
                          : "Enter your experience"
                      }
                      value={expInfo}
                      onChange={(e) => setExpInfo(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="approach">Training Approach</Label>
                    <Textarea
                      id="approach"
                      name="approach"
                      placeholder={
                        data.approach ? data.approach : "Enter your approach"
                      }
                      value={approachInfo}
                      onChange={(e) => setApproachInfo(e.target.value)}
                    />
                  </div>
                </div>
                <SubmitButton
                  type="submit"
                  variant="default"
                  className="w-full"
                  pendingText="Saving..."
                  formAction={updateProfileAction}
                >
                  Save
                </SubmitButton>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Label htmlFor="userId" className="sr-only">
                    User ID
                  </Label>
                  <Input
                    id="userId"
                    name="userId"
                    value={id}
                    readOnly
                    className="sr-only"
                  />
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={user.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={phone ? phone : "+60123456789"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      name="facebook"
                      placeholder={fb ? fb : "https://facebook.com/yourprofile"}
                      value={fb}
                      onChange={(e) => setFb(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="x">X (Twitter)</Label>
                    <Input
                      id="x"
                      name="x"
                      placeholder={x ? x : "https://x.com/yourprofile"}
                      value={x}
                      onChange={(e) => setX(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      placeholder={li ? li : "https://linkedin.com/yourprofile"}
                      value={li}
                      onChange={(e) => setLi(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder={
                        website ? website : "https://yourwebsite.com"
                      }
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
                <SubmitButton
                  type="submit"
                  variant="default"
                  className="w-full"
                  pendingText="Saving..."
                  formAction={updateContactAction}
                >
                  Save
                </SubmitButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
