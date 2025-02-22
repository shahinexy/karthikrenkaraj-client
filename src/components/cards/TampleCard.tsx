import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import temple from '../../../public/images/tamplet.png'

const TampleCard = () => {
    return (
        <Link href={`/product/1`}>
          <div  className="bg-white rounded-3xl p-3 space-y-2">
            <Image src={temple} height={1000} width={1000} alt="temple" className="rounded-3xl" />
            <h3 className="text-xl font-semibold text-center">Puliyur Temple</h3>
            <div className="flex gap-1 justify-center items-center text-sm ">
              <SlLocationPin />
              <p > Puliyur, Kerala, South India</p>
            </div>
          </div>
          </Link>
    );
};

export default TampleCard;