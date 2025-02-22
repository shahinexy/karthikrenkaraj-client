"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';

const ProductPage = () => {

    const { id } = useParams()

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="md:text-5xl text-3xl font-medium md:mb-4 mb-2">
                    Temple Details
                </h1>
                <div className="inline-block">
                    <button className='border border-gray-400 rounded-full py-[10] md:px-7 px-3 text-xl text-gray-400 flex gap-2 items-center'>
                        Edit   <MdOutlineModeEdit />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;