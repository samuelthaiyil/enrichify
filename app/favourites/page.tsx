import { TableCaption, TableHeader, TableRow, TableHead, TableBody, Table } from "@/components/ui/table";

export default function FavouritesPage() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-medium tracking-tighter">Favourites</h1>
      </div>
      <div className="px-6">
        <Table>
          <TableCaption>A list of your favourite workbooks.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-90">Name</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
