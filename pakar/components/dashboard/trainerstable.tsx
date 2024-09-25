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
import { ContactRound, ScanSearch } from "lucide-react";

export function TrainersTable({ data }: any) {
  const dataX = data;
  console.log(dataX);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trainers</CardTitle>
        <CardDescription>Find the perfect trainer for you</CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="w-full hidden md:table">
          <TableHeader>
            <TableRow>
              <TableHead className="text-nowrap">Trainer</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead className="hidden md:table-cell">Speciality</TableHead>
              <TableHead className="hidden md:table-cell text-center">
                Profile
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataX.map((item: any) => (
              <TableRow key={item.user_id} className="hover:bg-muted group">
                <TableCell className="text-nowrap">
                  <div className="flex flex-row text-nowrap gap-2 items-center ">
                    <Link
                      key={item.user_id}
                      href={`/findtrainers/${item.user_id}`}
                    >
                      <Image
                        width={40}
                        height={40}
                        className="w-12 h-12 md:w-8 md:h-8 rounded-full group-hover:ring-1 ring-slate-500 aspect-square object-cover"
                        src={item?.avatarURL || "/logo.jpg"}
                        alt={item.name}
                      />
                    </Link>
                    <div className="flex flex-col">
                      <p className="text-xl md:text-sm font-medium text-nowrap leading-none">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <em className="text-xs">{item.contact.email}</em>
                </TableCell>
                <TableCell className="text-wrap hidden md:table-cell">
                  <Badge variant={item.speciality}>{item.speciality}</Badge>
                </TableCell>
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
        <div className="md:hidden grid grid-cols-1 gap-4">
          {dataX.map((item: any) => (
            <Link key={item.user_id} href={`/findtrainers/${item.user_id}`}>
              <Card className="group cursor-pointer aspect-square">
                <div className="flex flex-col gap-4 p-2">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-fit rounded-sm group-hover:ring-1 ring-slate-500 aspect-square object-cover"
                    src={item?.avatarURL || "/logo.jpg"}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl md:text-sm font-bold overflow-clip group-hover:overflow-visible text-nowrap leading-none">
                      {item.name}
                    </p>
                    <div className="flex flex-row flex-nowrap w-full justify-between gap-2">
                      <Badge
                        className="flex w-fit bg-gradient-to-br text-white from-violet-500 to-fuchsia-500 text-xs text-nowrap"
                        variant={item.speciality}
                      >
                        #{item.speciality}
                      </Badge>
                      <Badge
                        className="flex w-fit text-xs"
                        variant={item.total_years_exp}
                      >
                        {item.total_years_exp} exp
                      </Badge>
                    </div>
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
