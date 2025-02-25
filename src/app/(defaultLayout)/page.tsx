import TampleCard from "@/components/modules/tample/tampleDards/TampleCard";
import AddTampleModal from "@/components/modules/tample/tampleModal/AddTampleModal";

const CommonLayoutHomePage = () => {
  const temples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1, 2, 3, 4, , 5];
  return (
    <div className="">
      {/* hearder  */}
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-2xl font-medium md:mb-4 mb-2">
          All Temple List
        </h1>
        <div className="inline-block">
          <AddTampleModal />
        </div>
      </div>

      {/* cards  */}
      <div className="grid lg:grid-cols-5  md:grid-cols-3 grid-cols-2 gap-3 md:gap-7 md:mt-12 mt-7">
        {temples.map((item, idx) => (
          <TampleCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
