import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { BootstrapIcon } from "./ui/bootstrap-icon";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./ui/table";

export const WorkbookTable = () => {
  return (
    <>
      <button />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className="flex items-center gap-1">
                <BootstrapIcon name="BsFonts" />
                <span>Name</span>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1">
                <BootstrapIcon name="BsEnvelope" />
                <span>Email</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
            <TableCell className="border border-1 border-gray-200">
              <input className="text-sm w-full focus:outline-none focus:ring-0" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
