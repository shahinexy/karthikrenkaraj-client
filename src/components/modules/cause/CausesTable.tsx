"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TUser } from "@/types/user.type";
import Spinner from "@/components/modules/common/Spinner";
import { useAllCausesForAdminQuery } from "@/redux/features/cause/cause.api";
import CausesUpdateModal from "./CausesUpdateModal";

const CausesTable = () => {
  const { data, isFetching } = useAllCausesForAdminQuery(undefined);
console.log(data?.data);
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
          {data?.data.map((data: any, idx: string) => (
            <TableRow key={data.id} className="text-[#0C0B21B2] text-center">
              <TableCell className="py-3">{idx + 1}</TableCell>
              <TableCell>{data?.temple?.name}</TableCell>
              <TableCell>{data?.cause?.name}</TableCell>
              <TableCell>{data?.totalAmount}</TableCell>
              <TableCell>{data?.status}</TableCell>
              <TableCell>
                <div className="flex justify-center">
                <CausesUpdateModal />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CausesTable;
