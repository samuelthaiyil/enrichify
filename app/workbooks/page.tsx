"use server"

import { WorkbookHeader } from "@/components/workbookheader";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WorkbooksTable } from "@/components/workbookstable";

export default async function WorkbooksPage() {
  return (
    <div>
        <WorkbookHeader />
        <WorkbooksTable />
    </div>
  );
}
