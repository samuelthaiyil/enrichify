"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableCell,
} from "@/components/ui/table";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { Workbook } from "../types/workbook";
import { useEffect } from "react";
import { User } from "../types/user";

export default function FavouritesPage() {
  const router = useRouter();

  const favouriteWorkbooks = useQuery(api.favourite.getFavourites, {
    userId: "jn77n3064fsrc05t7gtpe7tyj17p9qe9" as Id<"Users">,
  }) as Workbook[];
  const users = useQuery(api.user.getUsers) as User[];

  useEffect(() => {
    console.log("favouriteWorkbooks", favouriteWorkbooks);
  }, [favouriteWorkbooks]);

  const handleRowClick = (workbookId: string) => {
    router.push(`/workbook/${workbookId}`);
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-medium tracking-tighter">Favourites</h1>
      </div>
      <div className="px-6">
        <Table>
          {!favouriteWorkbooks?.length && (
            <TableCaption>A list of your favourite workbooks.</TableCaption>
          )}
          <TableHeader>
            <TableRow>
              <TableHead className="w-90">Name</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Creator</TableHead>
            </TableRow>
          </TableHeader>
          {favouriteWorkbooks?.map((workbook) => {
            const user = users.find(user => user._id === workbook.createdBy);
            return (
              <TableRow
                key={workbook._id}
                className="hover:bg-gray-100 hover:cursor-pointer"
                onClick={() => handleRowClick(workbook._id)}
              >
                <TableCell>{workbook.name}</TableCell>
                <TableCell>
                  {new Date(workbook._creationTime).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 rounded-full overflow-hidden">
                      <AvatarImage
                        src={user?.imageUrl}
                        className="w-full h-full object-cover"
                      />
                      <AvatarFallback className="bg-red-200 text-red-800 text-xs w-6 h-6 rounded-full flex items-center justify-center">
                        {user?.name?.charAt(0) || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <span>{user?.name || "Unknown User"}</span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      </div>
    </>
  );
}
