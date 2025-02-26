"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserInfoModal from "./UserInfoModal";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";

const UserTable = () => {
  const {data} = useGetAllUserQuery(undefined)
  console.log(data?.data?.data);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Member Id
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Name
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Email
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Mobile
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Profile
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="text-[#0C0B21B2] text-center">
            <TableCell className="py-3">INV001</TableCell>
            <TableCell>Jdon</TableCell>
            <TableCell>example@gmail.com</TableCell>
            <TableCell>12324324</TableCell>
            <TableCell>
            <UserInfoModal />
            </TableCell>
          </TableRow>
          <TableRow className="text-[#0C0B21B2] text-center">
            <TableCell className="py-3">INV001</TableCell>
            <TableCell>Don</TableCell>
            <TableCell>example@gmail.com</TableCell>
            <TableCell>12324324</TableCell>
            <TableCell>
              <UserInfoModal />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
