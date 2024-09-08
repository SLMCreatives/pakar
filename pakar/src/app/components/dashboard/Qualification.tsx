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

export default function QualificationSection() {
  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Your Qualification</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userQualification.map((item) => (
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
