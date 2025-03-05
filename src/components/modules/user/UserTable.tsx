"use client";
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
import { TUser } from "@/types/user.type";
import Spinner from "@/components/modules/common/Spinner";

const UserTable = () => {
  const { data, isFetching } = useGetAllUserQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }
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
          {data?.data?.data.map((user: TUser, idx: string) => (
            <TableRow key={user.id} className="text-[#0C0B21B2] text-center">
              <TableCell className="py-3">{idx + 1}</TableCell>
              <TableCell>{user?.fullName}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.phoneNumber || "N/A"}</TableCell>
              <TableCell>
                <UserInfoModal user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
