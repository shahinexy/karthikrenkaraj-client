import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import temple from '../../../public/images/Frame 1321315273.png'
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";


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
          temples.map((item, idx) => (<Link href={`/product/${item}`} key={idx}>
          <div  className="bg-white rounded-3xl p-3 space-y-2">
            <Image src={temple} height={1000} width={1000} alt="temple" className="rounded-3xl" />
            <h3 className="text-xl font-semibold text-center">Puliyur Temple</h3>
            <div className="flex gap-1 justify-center items-center text-sm ">
              <SlLocationPin />
              <p > Puliyur, Kerala, South India</p>
            </div>
          </div>
          </Link>))
        }
      </div>
    </div>
  );
};

export default CommonLayoutHomePage;
