
import { AiOutlinePlus } from "react-icons/ai";
import TampleCard from "@/components/cards/TampleCard";


const CommonLayoutHomePage = () => {
  const temples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9,1, 2, 3, 4, , 5]
  return (
    <div className="">
      {/* hearder  */}
      <div className="flex justify-between">
        <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
          Welcome Back , Arik Lee
        </h1>
        <div className="inline-block">
          <button className='bg-gradient-to-b from-[#32CD32] to-[#249A24] rounded-3xl py-[10] md:px-7 px-3 text-xl text-white flex gap-2 items-center'>
            <AiOutlinePlus /> Add Terminal
          </button>
        </div>
      </div>

      {/* cards  */}

      <div className="grid md:grid-cols-5 grid-cols-2 gap-7 md:mt-12 mt-7">
        {
          temples.map((item, idx) => <TampleCard key={idx}/>)
        }
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
