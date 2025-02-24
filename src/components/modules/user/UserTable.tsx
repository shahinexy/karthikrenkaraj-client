import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UserTable = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow >
            <TableHead className="text-[#0C0B21B2] font-normal text-center">Member Id</TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">Name</TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">Email</TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">Mobile</TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">Profile</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-[#0C0B21B2] text-center">
            <TableCell className="py-3">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>12324324</TableCell>
            <TableCell>12/12/1212</TableCell>
          </TableRow>
          <TableRow className="text-[#0C0B21B2] text-center">
            <TableCell className="py-3">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>12324324</TableCell>
            <TableCell>12/12/1212</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
