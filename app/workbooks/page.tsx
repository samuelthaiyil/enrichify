"use server"

import { WorkbookHeader } from "@/components/workbookheader";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WorkbookTable } from "@/components/workbooktable";

export default async function WorkbooksPage() {
  return (
    <div>
        <WorkbookHeader />
        <WorkbookTable />
    </div>
  );
}
