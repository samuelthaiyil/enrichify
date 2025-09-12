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

type WorkboookTableProps = {
  selectedRows: WorkbookTableRow[];
  setSelectedRows: (updater: (oldRows: WorkbookTableRow[]) => WorkbookTableRow[]) => void;
};

export const WorkbookTable = ({ selectedRows, setSelectedRows }: WorkboookTableProps) => {
  
  const updateRowCompanyName = (name: string, index: number) => {
    setSelectedRows((oldRows: WorkbookTableRow[]) => {
      return oldRows.map((row: WorkbookTableRow, i: number) => {
        if (i === index) {
          return {
            ...row,
            name
          }
        }

        return row;
      });
    });
  }

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
                <BootstrapIcon name="BsEnvelope" />
                <span>Email</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="flex flex-row border border-1 border-gray-200">
                <input 
                  className="text-sm w-full focus:outline-none focus:ring-0" 
                  onChange={(e) => updateRowCompanyName(e.target.value, index)}
                  value={row.name}
                />
                <BootstrapIcon className="ml-auto cursor-pointer" name="BsPlay" />
              </TableCell>
              <TableCell className="border border-1 border-gray-200">
                <input 
                  className="text-sm w-full focus:outline-none focus:ring-0" 
                  value={row.email}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
