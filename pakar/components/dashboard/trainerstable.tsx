"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";
import {
  ArrowRightCircleIcon,
  CalendarDays,
  ContactRound,
  ScanSearch,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HoverCardArrow, HoverCardPortal } from "@radix-ui/react-hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function TrainersTable({ data }: any) {
  const dataX = data;
  const x = [1, 2, 3, 4];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 space-x-10 gap-10">
      {dataX?.map((trainer: any) => (
        <Link href={`/${trainer.user_id}`} key={trainer.id}>
          <Card
            key={trainer.id}
            className="items-center w-72 justify-center flex flex-col px-4 hover:shadow-lg"
          >
            <CardHeader>
              <Image
                src={trainer.avatarURL}
                alt={trainer.name}
                width={100}
                height={100}
                className="w-32 h-32 aspect-square rounded-full"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-2 items-center justify-center text-center">
              <p className="text-xl font-semibold">{trainer.name}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {trainer.bio.slice(0, 100)}
              </p>
              <div className="flex flex-row gap-4 py-2">
                <Badge className="text-sm rounded-full px-3">
                  {trainer.speciality}
                </Badge>
                <Badge variant="outline" className="text-sm rounded-full px-3">
                  {trainer.total_years_exp} yrs
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
