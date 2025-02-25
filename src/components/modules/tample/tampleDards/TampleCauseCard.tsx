import Image from "next/image";
import flower from "../../../../../public/images/flower.png";

const TampleCauseCard = () => {
  return (
    <div className="space-y-1">
      <Image
        src={flower}
        height={1000}
        width={1000}
        alt="tamplet"
        className="rounded-3xl"
      />
      <h3 className="md:font-semibold font-medium pt-3">Flower for monthly</h3>
      <div className="flex justify-between">
        <p>1 Items</p>
        <p className="text-[#68A678] md:text-xl font-semibold">$100</p>
      </div>
    </div>
  );
};

export default TampleCauseCard;
