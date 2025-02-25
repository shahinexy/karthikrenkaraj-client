"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlinePlus } from "react-icons/ai";
import { FieldValues } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";

const AddCauseModal = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-secondary rounded-3xl md:py-[10] py-1 md:px-7 px-3 md:text-xl text-primary flex gap-2 items-center">
        <AiOutlinePlus /> Add Cause
      </DialogTrigger>

      <DialogContent className="max-w-[935px]  md:!rounded-[50px] !rounded-3xl [&>button]:hidden">
        <DialogHeader>
          <div className="">
            <MyFormWrapper onSubmit={onSubmit}>
              <DialogTitle className="md:mb-7 mb-3">
                <div className="flex md:flex-row flex-col justify-between items-center md:gap-1 gap-4">
                  <div className="">
                    <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
                      Add Cause
                    </h1>
                    <p className="md:text-2xl font-normal">On 20 Jun, 2024</p>
                  </div>
                  <div className="space-x-3 flex ">
                    <div>
                      <button
                        onClick={() => setOpen(false)}
                        className="border border-[#0C0B2133] text-[#0C0B21] py-3 px-6 rounded-full font-normal"
                      >
                        Discard
                      </button>
                    </div>
                    <div>
                      <button className="border border-[#0C0B21] bg-[#0C0B21] text-white py-3 px-6 rounded-full flex items-center justify-center gap-1  font-normal">
                        <FaSave /> Save
                      </button>
                    </div>
                  </div>
                </div>
              </DialogTitle>

              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
                <div className="space-y-2">
                  <h3 className="md:text-3xl font-medium">Cause Name</h3>
                  <MyFormInput
                    type="text"
                    name="name"
                    inputClassName="md:py-5 py-3 md:px-7 px-5 rounded-full"
                    placeholder="Enter Cause Name"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="md:text-3xl font-medium">
                    Upload Cause Picture
                  </h3>
                  <MyFormInput
                    type="file"
                    name="image"
                    inputClassName="md:py-5 py-3 md:px-7 px-5 rounded-full"
                    placeholder="Upload Image"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="md:text-3xl font-medium">Cause Price</h3>
                  <MyFormInput
                    type="text"
                    name="price"
                    inputClassName="md:py-5 py-3 md:px-7 px-5 rounded-full"
                    placeholder="Enter Cause Price"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="md:text-3xl font-medium">Cause Quantity</h3>
                  <MyFormInput
                    type="text"
                    name="quantity"
                    inputClassName="md:py-5 py-3 md:px-7 px-5 rounded-full"
                    placeholder="Enter Cause Quantity"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="md:text-3xl font-medium">Cause Category</h3>
                <MyFormSelect
                  name="causeCategory"
                  options={[]}
                  selectClassName="md:py-5 py-3 md:px-7 px-5 rounded-full"
                />
              </div>

              <div className="space-y-2">
                <h3 className="md:text-3xl font-medium">Category Details</h3>
                <MyFormInput
                  type="textarea"
                  name="causeDetails"
                  inputClassName="md:py-5 py-3 md:px-7 px-5 rounded-3xl"
                  rows={3}
                  placeholder="Enter Cause Quantity"
                />
              </div>
            </MyFormWrapper>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddCauseModal;
