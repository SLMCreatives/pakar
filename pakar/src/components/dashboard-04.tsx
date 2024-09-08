"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "./ui/label";
import { toast } from "@/hooks/use-toast";
import BasicInfoSection from "@/app/components/dashboard/BasicInformation";
import QualificationSection from "@/app/components/dashboard/Qualification";
import ExpSection from "@/app/components/dashboard/Exp";
import SpecialSection from "@/app/components/dashboard/Special";
import ContactSection from "@/app/components/dashboard/Contact";

const sections = [
  {
    name: "Basic Information",
    component: "basic",
  },
  {
    name: "Qualification",
    component: "qualification",
  },
  {
    name: "Experience",
    component: "exp",
  },
  {
    name: "Speciality",
    component: "special",
  },
  {
    name: "Contact",
    component: "contact",
  },
];

export default function Dashboard({ dname, demail, dage, did }: any) {
  const [name, setName] = useState(dname);
  const [age, setAge] = useState("");
  const [section, setsection] = useState("basic");
  return (
    <main className="flex flex-1 flex-col gap-4  p-6 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="md:grid flex flex-wrap gap-2 text-sm text-muted-foreground">
          {sections.map((item) => (
            <Link
              href="#"
              key={item.component}
              className={
                item.component === section
                  ? "font-semibold bg-muted px-4 py-1 rounded-full text-primary"
                  : "font-normal py-1 px-4"
              }
              onClick={() => setsection(item.component)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <hr className="md:hidden"></hr>
        <div className="px-4">
          {section === "basic" && (
            <div className="grid gap-6">
              <BasicInfoSection
                dname={dname}
                demail={demail}
                dage={dage}
                did={did}
              />
            </div>
          )}
          {section === "qualification" && (
            <div className="grid gap-6">
              <QualificationSection />
            </div>
          )}
          {section === "exp" && (
            <div className="grid gap-6">
              <ExpSection />
            </div>
          )}
          {section === "special" && (
            <div className="grid gap-6">
              <SpecialSection />
            </div>
          )}
          {section === "contact" && (
            <div className="grid gap-6">
              <ContactSection
                dname={dname}
                demail={demail}
                dage={dage}
                did={did}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
