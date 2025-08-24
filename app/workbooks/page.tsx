"use client"

import { AddWorkbookDialog } from "@/components/addworkbookdialog";
import { WorkbookHeader } from "@/components/workbookheader";
import { BootstrapIcon } from "@/components/ui/bootstrap-icon";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function WorkbooksPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
        <WorkbookHeader />
      
      <div className="px-6">
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
          </TableBody>
        </Table>
      </div>
      <AddWorkbookDialog open={open} setOpen={setOpen} />
    </div>
  );
}
