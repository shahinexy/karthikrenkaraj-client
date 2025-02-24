"use client"
import MyFormInput from "@/components/form/MyFormInput";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import React from "react";
import { FieldValues } from "react-hook-form";

const LoginForm = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
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
  );
};

export default LoginForm;
