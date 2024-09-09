import Image from "../../../../node_modules/next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";

export default function HistorySection({ data }: any) {
  console.log(data);
  const avatarUrl = "/logo.jpg";
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
            {data?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={item.image_alt}
                    className="aspect-square rounded-full object-cover"
                    height="52"
                    src={item.avatar_url || "/logo.jpg"}
                    width="52"
                  />
                </TableCell>
                <TableCell className="font-medium text-nowrap">
                  {item.name}
                </TableCell>
                <TableCell>
                  <Badge variant={item.speciality}>{item.speciality}</Badge>
                </TableCell>
                <TableCell>RM {item.rate_per_hour}</TableCell>
                <TableCell className="hidden md:table-cell text-center">
                  {item.total_years_exp}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.created.slice(0, 10)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                        className="w-full"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Phone</DropdownMenuItem>
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
