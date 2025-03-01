"use client";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import EditCauseModal from "../causeModal/EditCauseModal";
import { TCause } from "@/types/cause.type";
import { useGetAllCauseQuery } from "@/redux/features/cause/cause.api";
import Spinner from "@/components/modules/common/Spinner";

const CauseCard = () => {
  const { data: causeData, isFetching } = useGetAllCauseQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <div className="grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 gap-3 md:gap-7 md:mt-12 mt-7">
      {causeData?.data?.data.map((cause: TCause) => (
        <div key={cause.id} className="relative">
          <div className="z-10">
            <EditCauseModal id={cause.id} />
          </div>
          <div className="bg-white md:rounded-3xl rounded-xl md:p-3 p-2">
            <Image
              src={cause?.images[0]}
              height={1000}
              width={1000}
              alt="temple"
              className="md:rounded-[18px] rounded-xl md:h-44 h-[120px] w-full"
            />
            <h3 className="md:text-xl text-lg font-semibold text-center md:my-2 my-[5px] truncate overflow-hidden whitespace-nowrap">
              {cause.name}
            </h3>
            <div className="flex gap-1 justify-center md:items-center text-sm ">
              <div className="w-3"><SlLocationPin className="md:mt-0 mt-1" /></div>
              <p className="truncate overflow-hidden whitespace-nowrap"> {cause.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CauseCard;
