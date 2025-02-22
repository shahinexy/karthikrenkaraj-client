"use client";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import { FieldValues } from "react-hook-form";

export default function Page() {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className=" flex flex-col h-screen justify-center items-center md:space-y-14 space-y-10 py-20 px-5">
      {/* <div className="flex justify-center">
      <Image height={100} width={200} alt="logo" src={logo} />
    </div> */}
      <div className="w-full max-w-[728px] bg-gradient-to-b from-[#f2f8f2] to-[#fafafa] md:p-12 p-5 rounded-[48px] border-[3px] border-white text-center">
        <h1 className="md:text-4xl text-3xl font-semibold mb-1">Login Here</h1>
        <p className="mb-5">Start your journey as admin here</p>

        <MyFormWrapper onSubmit={onSubmit}>
          <MyFormInput
            type="email"
            name="email"
            inputClassName="md:py-4 py-2 md:px-5 px-5 rounded-3xl"
            placeholder="email"
          />

          <MyFormInput
            type="password"
            name="password"
            inputClassName="md:py-4 py-2 md:px-5 px-5 rounded-3xl"
            placeholder="password"
          />

          <button className="bg-gradient-to-b from-[#32CD32] to-[#249A24] rounded-3xl py-3 md:px-36 px-20 text-xl text-white">
            Login
          </button>
        </MyFormWrapper>
      </div>
    </div>
  );
}
