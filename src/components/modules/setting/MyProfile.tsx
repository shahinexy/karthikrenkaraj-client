import Image from "next/image";
import userImg from "../../../../public/images/flower.png";

const MyProfile = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className=" max-w-[625px] bg-gradient-to-b from-[#f2f8f2] to-[#fafafa] md:p-12 p-5 md:rounded-3xl rounded-2xl border-[3px] border-white text-center md:space-y-7 space-y-4">
        <div className="rounded-full overflow-hidden flex justify-center">
          <Image
            src={userImg}
            alt="user"
            width={1000}
            height={1000}
            className="w-[125px] h-[125px] rounded-full"
          />
        </div>

        <h2 className="md:text-[32px] text-2xl font-medium text-center">
          Personal Information
        </h2>

        <div className="grid grid-cols-5 md:gap-9 gap-3">
          <div className="text-start col-span-3">
            <h3 className="md:text-[25px] text-xl font-semibold">Email</h3>
            <p className="md:text-2xl text-[#0C0B2199]">ariklee07@gmail.com</p>
          </div>
          <div className="text-start col-span-2">
            <h3 className="md:text-[25px] text-xl font-semibold">Mobile No</h3>
            <p className="md:text-2xl text-[#0C0B2199]">+1 567 2543 642</p>
          </div>
          <div className="text-start col-span-3">
            <h3 className="md:text-[25px] text-xl font-semibold">Country</h3>
            <p className="md:text-2xl text-[#0C0B2199]">United Sate Of America</p>
          </div>
          <div className="text-start col-span-2">
            <h3 className="md:text-[25px] text-xl font-semibold">City / State</h3>
            <p className="md:text-2xl text-[#0C0B2199]">New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
