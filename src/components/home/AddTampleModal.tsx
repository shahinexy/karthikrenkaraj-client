"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlinePlus } from "react-icons/ai";
import MyFormWrapper from "../form/MyFormWrapper";
import { FieldValues } from "react-hook-form";
import MyFormInput from "../form/MyFormInput";

const AddTampleModal = () => {
    const onSubmit = async (data: FieldValues) => {
        console.log(data);
    };
    return (
        <Dialog>
            <DialogTrigger className="bg-gradient-to-b from-[#32CD32] to-[#249A24] rounded-3xl py-[10] md:px-7 px-3 text-xl text-white flex gap-2 items-center">
                <AiOutlinePlus /> Add Terminal
            </DialogTrigger>

            <DialogContent className="max-w-[935px] rounded-[50px]">
                <DialogHeader>
                    <DialogTitle className="md:mb-7 mb-3">
                        <div className="flex justify-between gap-1">
                            <div className="">
                                <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
                                    Add Tample
                                </h1>
                                <p className="md:text-2xl font-normal">On 20 Jun, 2024</p>
                            </div>
                            <div className="">
                                <button>Discard</button>
                                <button>Discard</button>
                            </div>
                        </div>
                    </DialogTitle>
                    <div className="">
                        <MyFormWrapper onSubmit={onSubmit}>
                            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
                               <div className="space-y-2">
                               <h3 className="md:text-3xl font-medium">Temple Name</h3>
                                <MyFormInput
                                    type="text"
                                    name="name"
                                    inputClassName="md:py-5 py-3 md:px-5 px-5 rounded-full"
                                    placeholder="Enter Temple Name"
                                />
                               </div>
                               <div className="space-y-2">
                               <h3 className="md:text-3xl font-medium">Upload Temple Picture</h3>
                                <MyFormInput
                                    type="email"
                                    name="email"
                                    inputClassName="md:py-5 py-3 md:px-5 px-5 rounded-full"
                                    placeholder="Upload Image"
                                />
                               </div>
                            </div>
                            <div className="space-y-2">
                               <h3 className="md:text-3xl font-medium">Enter Temple Information</h3>
                                <MyFormInput
                                    type="textarea"
                                    name="information"
                                    rows={1}
                                    inputClassName="md:py-5 py-3 md:px-5 px-5 rounded-[50px]"
                                    placeholder="Enter Temple Information Here"
                                />
                               </div>
                        </MyFormWrapper>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddTampleModal;
