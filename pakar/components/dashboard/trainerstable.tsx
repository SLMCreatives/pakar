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

export function TrainersTable({ data }: any) {
  const dataX = data;
  const x = [1, 2, 3, 4];
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Trainers</CardTitle>
        <CardDescription>Find the perfect trainer for you</CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="w-full hidden md:table">
          <TableHeader>
            <TableRow>
              <TableHead className="">Trainer</TableHead>
              <TableHead className="">Speciality</TableHead>
              <TableHead className="hidden md:table-cell text-center">
                Experience
              </TableHead>
              {/* <TableHead className="text-center">Rating</TableHead> */}
              <TableHead className="hidden md:table-cell text-center">
                Profile
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: any) => (
              <TableRow key={item.user_id} className="hover:bg-muted group">
                <TableCell className="text-nowrap">
                  <div className="flex flex-row text-nowrap gap-2  justify-start">
                    <div className="flex flex-col">
                      <HoverCard openDelay={0} closeDelay={300}>
                        <HoverCardTrigger>
                          <p className="text-xl md:text-sm font-semibold text-nowrap cursor-pointer">
                            {item.name}
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent
                          className="w-72"
                          side="right"
                          sideOffset={20}
                        >
                          <Link
                            key={item.user_id}
                            href={`/findtrainers/${item.user_id}`}
                          >
                            <div className="flex justify-between items-center space-x-4 p-0">
                              <Avatar className="h-20 w-20 rounded-sm">
                                <AvatarImage
                                  src={item?.avatarURL || "/logo.jpg"}
                                  alt={item.name}
                                />
                                <AvatarFallback>
                                  {item.name?.slice(0, 1) || "T"}
                                </AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <h4 className="text-md font-semibold">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-wrap line-clamp-3">
                                  {item.bio.split(".")[0]}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-wrap table-cell">
                  <Badge variant="default">{item.speciality}</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell text-center">
                  <p className="text-md">{item.total_years_exp} years</p>
                </TableCell>
                {/* <TableCell className="text-nowrap table-cell text-center">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    {x.map((i: any) => (
                      <StarIcon
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-700"
                      />
                    ))}
                  </div>
                </TableCell> */}
                <TableCell className="hidden md:table-cell text-center">
                  <Link href={`/findtrainers/${item.user_id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <ScanSearch className="h-6 w-6 fill-violet-300" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* mobile view */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {dataX.map((item: any) => (
            <Link key={item.user_id} href={`/findtrainers/${item.user_id}`}>
              <Card className="group cursor-pointer aspect-square">
                <div className="flex flex-col gap-4 ">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-fit rounded-sm group-hover:ring-1 ring-slate-500 aspect-square object-cover"
                    src={item?.avatarURL || "/logo.jpg"}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-2 items-center pb-4">
                    <p className="text-md font-bold text-nowrap">{item.name}</p>
                    <Badge
                      className="flex w-fit bg-gradient-to-br text-white from-violet-500 to-fuchsia-500 text-xs text-nowrap"
                      variant={item.speciality}
                    >
                      #{item.speciality}
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{dataX.length}-10</strong> of{" "}
          <strong>{dataX.length}</strong> trainers
        </div>
      </CardFooter>
    </Card>
  );
}
