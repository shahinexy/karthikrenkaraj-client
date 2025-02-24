import CauseCard from "@/components/cause/causeCard/CauseCard";
import AddCauseModal from "@/components/cause/causeModal/AddCauseModal";
import React from "react";

const CauseShopPage = () => {
  const temples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1, 2, 3, 4, , 5];
  return (
    <div className="">
      {/* hearder  */}
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
          All Cause Shop
        </h1>
        <div className="inline-block">
          <AddCauseModal />
        </div>
      </div>

      {/* cards  */}
      <div className="grid md:grid-cols-5 grid-cols-2 gap-3 md:gap-7 md:mt-12 mt-7">
        {temples.map((item, idx) => (
          <CauseCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CauseShopPage;
