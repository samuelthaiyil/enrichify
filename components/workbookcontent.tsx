"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { WorkbookBreadcrumb } from "./workbookbreadcrumb";
import { WorkbookTable } from "./workbooktable";
import { Button } from "./ui/button";
import { BootstrapIcon } from "./ui/bootstrap-icon";
import { useState } from "react";
import { WorkbookTableRow } from "@/app/types/workbook";

interface WorkbookContentProps {
  id: string;
}

export const WorkbookContent = ({ id }: WorkbookContentProps) => {
  const workbook = useQuery(api.workbook.getWorkbookById, { id: id as any });
  const [selectedRows, setSelectedRows] = useState<WorkbookTableRow[]>([
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
    { companyName: "", contactInfo: [] },
  ]);

  if (!workbook) {
    return <div>Loading...</div>;
  }

  const handleRunEnrichment = () => {};

  return (
    <div>
      <div className="flex justify-between">
        <WorkbookBreadcrumb name={workbook.name} />
        <Button onClick={handleRunEnrichment} disabled={!selectedRows.length}>
          <BootstrapIcon name="BsPlay" />
          Run Enrichment
        </Button>
      </div>
      <WorkbookTable
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
    </div>
  );
};
