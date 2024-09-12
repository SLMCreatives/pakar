"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import Image from "../../node_modules/next/image";
import Link from "../../node_modules/next/link";

export function TrainersTable({ data }: any) {
  const dataX = data;
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
              <TableHead className="text-nowrap">Name</TableHead>
              <TableHead className="hidden md:table-cell">Speciality</TableHead>
              <TableHead className="hidden md:table-cell">Rate</TableHead>
              <TableHead className="text-center hidden md:table-cell">
                Years of Exp
              </TableHead>
              <TableHead className="hidden md:table-cell">Joined at</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataX.map((item: any) => (
              /*  <Link
                key={item.auth_user_id}
                href={`/findtrainers/${item.auth_user_id}`}
              > */
              <TableRow className="hover:bg-muted group cursor-pointer">
                <TableCell className="text-nowrap">
                  <div className="flex flex-row text-nowrap gap-2 items-center ">
                    <Link
                      key={item.auth_user_id}
                      href={`/findtrainers/${item.auth_user_id}`}
                    >
                      <Image
                        width={40}
                        height={40}
                        className="w-12 h-12 md:w-8 md:h-8 rounded-full group-hover:ring-1 ring-slate-500 aspect-square object-cover"
                        src={item?.avatarurl || "/logo.jpg"}
                        alt={item.name}
                      />
                    </Link>
                    <div className="flex flex-col">
                      <p className="text-xl md:text-sm font-medium text-nowrap leading-none">
                        {item.user_name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-wrap hidden md:table-cell">
                  <Badge variant={item.speciality}>{item.speciality}</Badge>
                </TableCell>
                <TableCell className="text-center hidden md:table-cell">
                  RM {item.rate_per_hour}
                </TableCell>
                <TableCell className="text-center hidden md:table-cell">
                  {item.total_years_exp}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(item.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link href={`/findtrainers/${item.auth_user_id}`}>
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>LinkedIn</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              /*               </Link>
               */
            ))}
          </TableBody>
        </Table>
        <div className="md:hidden grid grid-cols-1 gap-4">
          {dataX.map((item: any) => (
            <Link
              key={item.auth_user_id}
              href={`/findtrainers/${item.auth_user_id}`}
            >
              <Card className="group cursor-pointer aspect-square">
                <div className="flex flex-col gap-4 p-2">
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-fit rounded-sm group-hover:ring-1 ring-slate-500 aspect-square object-cover"
                    src={item?.avatarurl || "/logo.jpg"}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl md:text-sm font-bold overflow-clip group-hover:overflow-visible text-nowrap leading-none">
                      {item.user_name}
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
          Showing <strong>1-10</strong> of <strong>32</strong> users
        </div>
      </CardFooter>
    </Card>
  );
}
