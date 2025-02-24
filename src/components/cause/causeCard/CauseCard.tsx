import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import temple from "../../../../public/images/tamplet.png";
import EditCauseModal from "../causeModal/EditCauseModal";

const CauseCard = () => {
  return (
    <div className="relative">
      <div className="z-10">
        <EditCauseModal />
      </div>
      <Link href={`/product/1`}>
        <div className="bg-white md:rounded-3xl rounded-xl p-3">
          <Image
            src={temple}
            height={1000}
            width={1000}
            alt="temple"
            className="md:rounded-[18px] rounded-xl"
          />
          <h3 className="text-xl font-semibold text-center my-2">
            Puliyur Cause
          </h3>
          <div className="flex gap-1 justify-center items-center text-sm ">
            <SlLocationPin />
            <p> Puliyur, Kerala, South India</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CauseCard;
