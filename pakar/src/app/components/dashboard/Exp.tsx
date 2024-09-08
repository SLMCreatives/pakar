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

const userExperience = [
  {
    name: "Senior Consultant",
    description: "LHI Consulting",
    period: "2020 - Present",
  },
  {
    name: "Leadership Trainer",
    description: "TnB",
    period: "2017 - 2020",
  },
  {
    name: "Training Coordinator",
    description: "Bank Rakyat",
    period: "2015 - 2017",
  },
  {
    name: "Internship",
    description: "Bank Rakyat",
    period: "2013 - 2015",
  },
];

export default function ExperienceSection() {
  return (
    <div className="grid gap-6">
      <h3 className="text-xl font-bold">Your Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userExperience.map((item) => (
          <Card key={item.name} className="w-full">
            <CardHeader>
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm">{item.period}</p>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Button className="w-full">Add Experience</Button>
    </div>
  );
}
