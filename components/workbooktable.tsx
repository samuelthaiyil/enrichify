"use client"

import { query } from "@/convex/_generated/server";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table"
import { v } from "convex/values";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BootstrapIcon } from "./ui/bootstrap-icon";

export const WorkbookTable = () => {

  const workbooks = useQuery(api.workbook.getWorkbooks);

  return <div className="px-6">
    <Table>
      <TableCaption>A list of your workbooks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-90">Name</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead>Creator</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workbooks?.map((workbook) => (
          <TableRow key={workbook._id}>
            <TableCell>{workbook.name}</TableCell>
            <TableCell>{new Date(workbook._creationTime).toLocaleDateString()}</TableCell>
            <TableCell>{workbook.createdBy}</TableCell>
            <TableCell><BootstrapIcon name="BsStar" /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
}