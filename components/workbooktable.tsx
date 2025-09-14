import { BootstrapIcon } from "./ui/bootstrap-icon";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";
import { WorkbookTableRow } from "@/app/types/workbook";
import { createPipe } from "@/app/api/pipe0";
import { toast } from "sonner";

type WorkbookTableProps = {
  selectedRows: WorkbookTableRow[];
  setSelectedRows: (
    updater: (oldRows: WorkbookTableRow[]) => WorkbookTableRow[]
  ) => void;
};

export const WorkbookTable = ({
  selectedRows,
  setSelectedRows,
}: WorkbookTableProps) => {
  const runEnrichment = async (
    contactName: string,
    companyUrl: string,
    index: number
  ) => {
    try {
      const result = await createPipe(contactName, companyUrl);
      console.log("result: ", result);
      updateRowProperty("workEmail", result ?? "", index);
    } catch (error) {
      console.log(error);
      toast.error("Error running enrichment");
    }
  };

  const updateRowProperty = (key: string, value: string, index: number) => {
    setSelectedRows((oldRows: WorkbookTableRow[]) => {
      return oldRows.map((row: WorkbookTableRow, i: number) => {
        if (i === index) {
          return {
            ...row,
            [key]: value,
          };
        }
        return row;
      });
    });
  };

  return (
    <>
      <button />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-2">
                <BootstrapIcon name="BsFonts" />
                <span>Company Name</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <BootstrapIcon name="BsLink" />
                <span>Company Website</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <BootstrapIcon name="BsEnvelope" />
                <span>Email</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="border border-1 border-gray-200">
                <input
                  className="text-sm w-full focus:outline-none focus:ring-0"
                  onChange={(e) =>
                    updateRowProperty("contactName", e.target.value, index)
                  }
                  value={row.contactName}
                />
              </TableCell>
              <TableCell className="flex flex-row border border-1 border-gray-200">
                <input
                  className="text-sm text-blue-500 underline w-full focus:outline-none focus:ring-0"
                  onChange={(e) =>
                    updateRowProperty("companyUrl", e.target.value, index)
                  }
                  value={row.companyUrl}
                />
                <BootstrapIcon
                  className="ml-auto cursor-pointer"
                  onClick={() =>
                    runEnrichment(row.contactName, row.companyUrl, index)
                  }
                  name="BsPlay"
                />
              </TableCell>
              <TableCell className="border border-1 border-gray-200">
                <input
                  className="text-sm w-full focus:outline-none focus:ring-0"
                  value={row.workEmail}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
