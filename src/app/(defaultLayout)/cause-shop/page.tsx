import CauseCard from "@/components/modules/cause/causeCard/CauseCard";
import AddCategoryModal from "@/components/modules/cause/causeModal/AddCategoryModal";
import AddCauseModal from "@/components/modules/cause/causeModal/AddCauseModal";
import React from "react";
import { MdOutlineCategory } from "react-icons/md";

const CauseShopPage = () => {
  const temples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1, 2, 3, 4, , 5];
  return (
    <div className="">
      {/* hearder  */}
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-2xl font-medium md:mb-4 mb-3">
          All Cause Shop
        </h1>
        <div className="inline-block">
          <AddCauseModal />
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex gap-1 items-center bg-white  md:px-3 px-2 rounded-full">
          <span className="bg-[#F5F5F5] md:p-2 p-1 rounded-full">
            <MdOutlineCategory />
          </span>
          Basic Need
        </button>

        <AddCategoryModal />
      </div>

      {/* cards  */}
      <div className="grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 gap-3 md:gap-7 md:mt-12 mt-7">
        {temples.map((item, idx) => (
          <CauseCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CauseShopPage;
