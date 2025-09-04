"use client";

import { useRouter } from "next/navigation";
import { BootstrapIcon } from "./ui/bootstrap-icon";

interface WorkbookBreadcrumbProps {
  name: string;
}

export const WorkbookBreadcrumb = ({ name }: WorkbookBreadcrumbProps) => {
  const router = useRouter();
  const handleGoToWorkbooks = () => router.push('/workbooks');

  
  return (
    <div className="text-sm text-gray-500 my-auto">
      <span className="hover:cursor-pointer" onClick={handleGoToWorkbooks}>Workbooks</span>
      <span className="mx-2">/</span>
      <BootstrapIcon name="BsBook" className="inline mx-2" />
      <span>{name}</span>
    </div>
  );
};
