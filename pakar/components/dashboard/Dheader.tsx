"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signOutAction } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export default function Dheader({ user, avtrURL, userCat }: any) {
  const uAvatarsrc = avtrURL.avatarURL;
  const userData = user;
  const category = userCat.category;
  if (category === "recruiter") {
    return (
      <div className="flex min-h-[150px] w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium text-nowrap md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Avatar>
                <AvatarImage src="/logo.jpg" alt="Pakar.me" />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <span className="sr-only">Pakar.me</span>
            </Link>
            <Link
              href="/findtrainers"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Trainer Database
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Upgrade +
            </Link>
          </nav>
          <Sheet modal={true}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                  >
                    <Avatar>
                      <AvatarImage src="/logo.jpg" alt="Pakar.me" />
                      <AvatarFallback>PM</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Pakar.me</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/findtrainers"
                    //onClick={handleNavState}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Trainer Database
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/pricing"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Upgrade +
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search trainers..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={uAvatarsrc}
                      width={32}
                      height={32}
                      alt="useravatar"
                    />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/findtrainers">Find Trainers</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    className="text-left mx-0 px-0"
                    onClick={() => signOutAction()}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    );
  } else
    return (
      <div className="flex min-h-[150px] w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium text-nowrap md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Avatar>
                <AvatarImage src="/logo.jpg" alt="Pakar.me" />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <span className="sr-only">Pakar.me</span>
            </Link>
            <Link
              href="/findtrainers"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Trainer Database
            </Link>
            <Link
              href="/dashboard"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href={`/${userData.id}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              My Profile
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                  >
                    <Avatar>
                      <AvatarImage src="/logo.jpg" alt="Pakar.me" />
                      <AvatarFallback>PM</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Pakar.me</span>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/findtrainers"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Trainer Database
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/dashboard"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Dashboard
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={`/${userData.id}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    My Profile
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search trainers..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={uAvatarsrc}
                      width={32}
                      height={32}
                      alt="useravatar"
                    />
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${userData.id}`}>My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Button
                    variant="ghost"
                    className="text-left "
                    onClick={() => signOutAction()}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    );
}
