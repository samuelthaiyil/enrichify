"use client"

import { WorkbookContent } from "@/components/workbookcontent";

interface WorkbookProps {
  params: Promise<{ id: string }>;
}

export default async function Workbook({ params }: WorkbookProps) {
  const { id } = await params;
  
  return <WorkbookContent id={id} />;
}