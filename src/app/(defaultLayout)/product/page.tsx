import CauseCard from "@/components/modules/product/causeCard/CauseCard";
import AddCategoryModal from "@/components/modules/product/causeModal/AddCategoryModal";
import AddCauseModal from "@/components/modules/product/causeModal/AddCauseModal";
import React from "react";
import { MdOutlineCategory } from "react-icons/md";

const CauseShopPage = () => {

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
      <CauseCard />
    </div>
  );
};

export default CauseShopPage;
