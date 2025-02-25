import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import temple from "../../../../../public/images/tamplet.png";
import EditCauseModal from "../causeModal/EditCauseModal";

const CauseCard = () => {
  return (
    <div className="relative">
      <div className="z-10">
        <EditCauseModal />
      </div>
      <Link href={`/product/1`}>
        <div className="bg-white md:rounded-3xl rounded-xl md:p-3 p-2">
          <Image
            src={temple}
            height={1000}
            width={1000}
            alt="temple"
            className="md:rounded-[18px] rounded-xl"
          />
          <h3 className="md:text-xl text-lg font-semibold text-center md:my-2 my-[5px]">
            Puliyur Cause
          </h3>
          <div className="flex gap-1 justify-center md:items-center text-sm ">
            <SlLocationPin className="md:mt-0 mt-1" />
            <p> Puliyur, Kerala, South India</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CauseCard;
