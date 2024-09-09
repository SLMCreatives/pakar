"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { editInfo } from "@/app/api/editInfo/actions";
import { addAvatar, removeAvatar } from "@/app/api/addAvatar/actions";
import Image from "../../../../node_modules/next/image";

export default function BasicInfoSection({
  dname,
  demail,
  dage,
  did,
  avatar,
}: any) {
  const [name, setName] = useState(dname);
  const [age, setAge] = useState(dage);
  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Personal Information</h3>
      <Card x-chunk="A form to update the store name.">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Fill in your basic information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input type="hidden" id="id" name="id" defaultValue={did} />
            <Label htmlFor="name">Full Name</Label>
            <Input
              placeholder={dname}
              defaultValue={name}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="email">Email Address</Label>
            <Input
              placeholder={demail}
              defaultValue={demail}
              id="email"
              name="email"
              disabled
            />
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              placeholder={dage}
              defaultValue={age}
              id="age"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <Button type="submit" formAction={editInfo}>
              Save
            </Button>
          </form>
        </CardContent>
      </Card>
      {!avatar && addAvatarCard({ did, avatar })}
      {avatar && addAvatarCard({ did, avatar })}
    </div>
  );
}

export function addAvatarCard({ did, avatar }: any) {
  console.log(avatar);
  return (
    <Card x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory.">
      <CardHeader>
        <CardTitle>Profile Picture</CardTitle>
        <CardDescription>
          Upload a professional-looking image of yourself.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-4 items-center justify-center">
        <Image
          src={avatar?.signedUrl || "/logo.jpg"}
          alt="Upload image"
          width={100}
          height={100}
          className="w-32 rounded-full aspect-square"
        />
        <form className="flex flex-col gap-4 mt-4 p-2">
          <Input type="hidden" id="id" name="id" defaultValue={did} />

          <Label htmlFor="avatar">Upload</Label>
          <Input type="file" id="avatar" name="avatar" defaultValue={avatar} />
          <Button type="submit" formAction={addAvatar}>
            Save
          </Button>
          <Button type="submit" formAction={removeAvatar}>
            Delete
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
