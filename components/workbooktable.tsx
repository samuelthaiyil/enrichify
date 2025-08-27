"use client"

import { query } from "@/convex/_generated/server";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table"
import { v } from "convex/values";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BootstrapIcon } from "./ui/bootstrap-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User } from "@/app/types/user";
import { useRouter } from "next/navigation";

export const WorkbookTable = () => {
  const router = useRouter();

  const workbooks = useQuery(api.workbook.getWorkbooks);
  const users = useQuery(api.user.getUsers) as User[];

  const handleRowClick = (workbookId: string) => {
    router.push(`/workbook/${workbookId}`);
  };

  return <div className="px-6">
    <Table>
      {!workbooks?.length && <TableCaption>A list of your workbooks.</TableCaption>}
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
              <TableCell>{new Date(workbook._creationTime).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6 rounded-full overflow-hidden">
                    <AvatarImage src={user?.imageUrl} className="w-full h-full object-cover" />
                    <AvatarFallback className="bg-red-200 text-red-800 text-xs w-6 h-6 rounded-full flex items-center justify-center">
                      {user?.name?.charAt(0) || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <span>{user?.name || "Unknown User"}</span>
                </div>
              </TableCell>
              <TableCell><BootstrapIcon name="BsStar" className="ml-auto" /></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </div>
}