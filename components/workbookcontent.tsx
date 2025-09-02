"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { WorkbookBreadcrumb } from "./workbookbreadcrumb";
import { WorkbookTable } from "./workbooktable";

interface WorkbookContentProps {
  id: string;
}

export const WorkbookContent = ({ id }: WorkbookContentProps) => {
  const workbook = useQuery(api.workbook.getWorkbookById, { id: id as any });
  
  if (!workbook) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <WorkbookBreadcrumb name={workbook.name} />
      <WorkbookTable />
    </div>
  );
};
