"use client";
import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import EditCauseModal from "../causeModal/EditCauseModal";
import { TCause } from "@/types/cause.type";
import { useGetAllCauseQuery } from "@/redux/features/cause/cause.api";
import Spinner from "@/components/shared/Spinner";

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
            <EditCauseModal />
          </div>
          <Link href={`/product/1`}>
            <div className="bg-white md:rounded-3xl rounded-xl md:p-3 p-2">
              <Image
                src={cause?.image}
                height={1000}
                width={1000}
                alt="temple"
                className="md:rounded-[18px] rounded-xl"
              />
              <h3 className="md:text-xl text-lg font-semibold text-center md:my-2 my-[5px]">
                {cause.name}
              </h3>
              <div className="flex gap-1 justify-center md:items-center text-sm ">
                <SlLocationPin className="md:mt-0 mt-1" />
                <p> {cause.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CauseCard;
