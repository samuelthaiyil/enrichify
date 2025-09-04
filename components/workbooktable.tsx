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
  setSelectedRows: (WorkbookTableRow: []) => void;
};

export const WorkbookTable = ({ selectedRows, setSelectedRows }: WorkboookTableProps) => {
  return (
    <>
      <button />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-2">
                <BootstrapIcon name="BsFonts" />
                <span>Name</span>
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
                  value={row.name}
                />
                <BootstrapIcon className="ml-auto" name="BsPlay" />
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
