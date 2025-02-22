"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import tamplet from '../../../../../public/images/tamplet2.png'
import { SlLocationPin } from 'react-icons/sl';
import { LiaPhoneSquareSolid } from 'react-icons/lia';
import ProductDetailsTap from '@/components/productDetails/ProductDetailsTap';


const ProductPage = () => {

    const { id } = useParams()

    return (
        <div>
            <button className="flex gap-1 items-center mb-3 md:mb-6">
                <BsArrowLeft /> Back
            </button>
            <div className="flex justify-between mb-3 md:mb-6">
                <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
                    Temple Details
                </h1>
                <div className="inline-block">
                    <button className='border border-gray-400 rounded-full py-[10] md:px-7 px-3 text-xl text-gray-400 flex gap-2 items-center'>
                        Edit   <MdOutlineModeEdit />
                    </button>
                </div>
            </div>

            {/* cols 2  */}
            <div className="grid md:grid-cols-5 grid-cols-1 md:gap-16 gap-3 md:p-7 p:3 bg-white rounded-3xl">
                {/* col  */}
                <div className="md:col-span-2 col-span-1 space-y-5">
                    <Image src={tamplet} height={1000} width={1000} alt='tamplet' />
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <h1 className="md:text-5xl text-3xl font-medium md:mb-3 mb-2">
                            Temple Details
                        </h1>
                        <div className="flex gap-4 justify-center items-center text-sm text-[#5D6460]">
                            <div className="flex justify-center items-center gap-1 ">
                                <SlLocationPin />
                                <p > Puliyur, Kerala, South India</p>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <LiaPhoneSquareSolid className='text-lg' />
                                <p > +91 543 564 3526</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-center text-[#5D6460]'>
                        Puliyur Perumal Temple, an ancient Hindu temple in Tamil Nadu, is dedicated to Lord Vishnu and is one of the 108 Divya Desams praised in the Divya Prabandham by the Alvar saints. According to legend, Sage Pulika Maharishi performed penance here, leading to the temples divine significance. Built in the Dravidian architectural style, the temple is over 1,000 years old and was patronized by Tamil dynasties like the Pallavas and Cholas. It enshrines Lord Kripasamudra Perumal with consorts Sridevi and Bhoodevi, attracting Vaishnavite devotees. Major festivals, including Vaikunta Ekadashi and Brahmotsavam, are celebrated here, making it a significant pilgrimage site.
                    </p>
                </div>
                {/* col  */}
                <div className="md:col-span-3 col-span-1">
                    <ProductDetailsTap />

                </div>
            </div>
        </div>
    );
};

export default ProductPage;