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

export default function ContactSection({ dname, demail, dage, did }: any) {
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
            <Input placeholder="example@gmail.com" id="email" disabled />
            <Label htmlFor="age">Phone Number</Label>
            <Input type="number" placeholder="0123456789" id="phone" disabled />
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
