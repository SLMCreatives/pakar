"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Find Trainers",
    href: "/findtrainers",
  },
];

export default function Header() {
  return (
    <div className="flex w-full flex-row items-center justify-end gap-4 px-4 py-4">
      <Link href="/" className="fixed left-4 top-4">
        <Image
          width={200}
          height={200}
          src="/favicon.png"
          alt="Pakar.me"
          className="h-10 w-10 rounded-xl shadow-sm shadow-cyan-900"
        ></Image>
      </Link>
      <nav className="fixed right-4 top-4">
        {navigation.map((item) => (
          <Link href={{ pathname: item.href }} key={item.name}>
            <Button variant="ghost" className="pl-3 text-sm">
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="fixed right-4 top-4"></div>
    </div>
  );
}
