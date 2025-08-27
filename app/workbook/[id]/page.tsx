"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { BootstrapIcon } from "@/components/ui/bootstrap-icon";

interface WorkbookProps {
  params: Promise<{ id: string }>;
}

export default async function Workbook({ params }: WorkbookProps) {
  const { id } = await params;
  
  return <WorkbookContent id={id} />;
}

const WorkbookContent = ({ id }: { id: string }) => {
  const workbook = useQuery(api.workbook.getWorkbookById, { id: id as any });
  
  if (!workbook) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <WorkbookBreadcrumb name={workbook.name} />
      
    </div>
  );
};

const WorkbookBreadcrumb = ({ name }: { name: string }) => {
  return (
    <div className="text-sm text-gray-500 mb-4">
      <span>Workbooks</span>
      <span className="mx-2">/</span>
      <BootstrapIcon name="BsBook" className="inline mx-2" />
      <span>{name}</span>
    </div>
  );
};