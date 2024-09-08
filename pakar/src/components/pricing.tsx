"use client";

import Link from "next/link";
import { useState } from "react";
import BasicInfoSection from "@/app/components/dashboard/BasicInformation";
import QualificationSection from "@/app/components/dashboard/Qualification";
import ExpSection from "@/app/components/dashboard/Exp";
import SpecialSection from "@/app/components/dashboard/Special";
import ContactSection from "@/app/components/dashboard/Contact";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const sections = [
  {
    name: "Standard",
    component: "standard",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, a.",
    features: [
      "5 Trainer Profiles",
      "1 Project",
      "Get a few hiring process tips",
      "Normal Support",
    ],
    price: "10",
  },
  {
    name: "Pro",
    component: "pro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, a.",
    features: [
      "5 Trainer Profiles",
      "1 Project",
      "Get a few hiring process tips",
      "Normal Support",
    ],
    price: "50",
  },
  {
    name: "Advanced",
    component: "advanced",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, a.",
    features: [
      "5 Trainer Profiles",
      "1 Project",
      "Get a few hiring process tips",
      "Normal Support",
    ],
    price: "100",
  },
  {
    name: "Enterprise",
    component: "enterprise",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, a.",
    features: [
      "5 Trainer Profiles",
      "1 Project",
      "Get a few hiring process tips",
      "Normal Support",
    ],
    price: "150",
  },
];

export default function Dashboard() {
  const [section, setsection] = useState("standard");
  return (
    <main className="flex flex-1 flex-col gap-4  p-6 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="md:grid flex flex-wrap gap-2 text-sm text-muted-foreground sticky top-10">
          {sections.map((item) => (
            <Link
              href="#"
              key={item.component}
              className={
                item.component === section
                  ? "font-semibold bg-muted px-4 py-1 rounded-full text-primary"
                  : "font-normal py-1 px-4"
              }
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <hr className="md:hidden"></hr>
        <div className="px-4 grid gap-6">
          <PricingSection />
        </div>
      </div>
    </main>
  );
}

export function PricingSection() {
  return (
    <div className="grid gap-6">
      {sections.map((section: any) => (
        <Card key={section.component} id={section.component}>
          <CardHeader>
            <CardTitle>{section.name} Plan</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, a.
            </CardDescription>
          </CardHeader>
          <Separator className="" />
          <CardContent className="flex flex-col gap-2 py-4 text-sm">
            <p className="font-bold">What's included</p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              iste veritatis nam doloremque nesciunt consequuntur. Tempora
              libero aspernatur magnam porro?
            </p>
            <ul className="list-inside list-disc">
              {section.features.map((feature: any) => (
                <li key={feature} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">RM {section.price}/month</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
