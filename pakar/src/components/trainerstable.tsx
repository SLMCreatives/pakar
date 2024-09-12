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
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Speciality</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead className="hidden md:table-cell">
                Years of Exp
              </TableHead>
              <TableHead className="hidden md:table-cell">Joined at</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataX.map((item: any) => (
              <TableRow key={item.auth_user_id}>
                <TableCell className="hidden sm:table-cell">
                  <div className="relative h-10 w-10">
                    <Image
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                      src={item?.avatarurl || "/logo.jpg"}
                      alt={item.name}
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium leading-none">
                        {item.user_name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={item.speciality}>{item.speciality}</Badge>
                </TableCell>
                <TableCell>RM {item.rate_per_hour}</TableCell>
                <TableCell className="hidden md:table-cell text-center">
                  {item.total_years_exp}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(item.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
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
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> users
        </div>
      </CardFooter>
    </Card>
  );
}
