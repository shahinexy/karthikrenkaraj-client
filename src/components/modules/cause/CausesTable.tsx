"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import { TUser } from "@/types/user.type";
import Spinner from "@/components/modules/common/Spinner";

const CausesTable = () => {
  const { data, isFetching } = useGetAllUserQuery(undefined);
console.log(data);
  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              No
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Temple Name
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Cause Name
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Price
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Status
            </TableHead>
            <TableHead className="text-[#0C0B21B2] font-normal text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.data.map((user: TUser, idx: string) => (
            <TableRow key={user.id} className="text-[#0C0B21B2] text-center">
              <TableCell className="py-3">{idx + 1}</TableCell>
              <TableCell>{user?.fullName}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.phoneNumber}</TableCell>
              <TableCell>In-progress</TableCell>
              <TableCell>
                <button className="bg-primary md:px-4 px-2 md:py-2 py-1 rounded-full">
                  Update
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CausesTable;
