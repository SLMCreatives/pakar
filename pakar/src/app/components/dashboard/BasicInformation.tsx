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

export default function BasicInfoSection({ dname, demail, dage, did }: any) {
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
            <Label htmlFor="name">Full Name</Label>
            <Input
              placeholder={dname}
              defaultValue={dname}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="email">Email Address</Label>
            <Input
              placeholder={demail}
              defaultValue={demail}
              id="email"
              disabled
            />
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              placeholder={dage}
              defaultValue={dage}
              id="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button disabled>Save</Button>
        </CardFooter>
      </Card>
      <Card x-chunk="A form to update the plugins directory with a checkbox to allow administrators to change the directory.">
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>
            Upload a professional-looking image of yourself.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Label htmlFor="image">Upload</Label>
            <Input type="file" id="picture" />
            <div className="flex items-center space-x-2">
              <Checkbox id="include" defaultChecked />
              <Label
                htmlFor="include"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Allow to show image on your profile.
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
