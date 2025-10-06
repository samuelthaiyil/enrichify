"use client";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BootstrapIcon } from "./ui/bootstrap-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User } from "@/app/types/user";
import { useRouter } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";

export const WorkbooksTable = () => {
  const router = useRouter();

  const workbooks = useQuery(api.workbook.getWorkbooks);
  const users = useQuery(api.user.getUsers) as User[];
  const favouriteWorkbooks = useQuery(api.favourite.getFavourites, { 
    userId: "jn77n3064fsrc05t7gtpe7tyj17p9qe9" as Id<"Users">
  }) as string[];

  const addFavouriteWorkbook = useMutation(api.favourite.addFavourite);

  const handleRowClick = (workbookId: string) => {
    router.push(`/workbook/${workbookId}`);
  };

  const handleAddFavouriteWorkbook = async (userId: Id<"Users">, workbookId: Id<"Workbooks">) => {
    try {
      await addFavouriteWorkbook({
        userId,
        workbookId
      });
    } catch (error) {
      toast.error("Error adding to favourites");
    }
  }

  return (
    <div className="px-6">
      <Table>
        {!workbooks?.length && (
          <TableCaption>A list of your workbooks.</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="w-90">Name</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>Creator</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workbooks?.map((workbook) => {
            const user = users.find((user) => user._id === workbook.createdBy);
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
                <TableCell>
                  <BootstrapIcon 
                    name="BsStar" 
                    className={favouriteWorkbooks.includes(workbook._id) ? "ml-auto bg-black" : "ml-auto"}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (user?._id && workbook?._id) {
                        handleAddFavouriteWorkbook(user._id as Id<"Users">, workbook._id as Id<"Workbooks">);
                      }
                    }} 
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
