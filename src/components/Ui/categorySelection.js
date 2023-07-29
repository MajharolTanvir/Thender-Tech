
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const CategorySelection = ({ category, userPcData, setUserPcData }) => {

    const handleCancel = (id) => {
        const data = JSON.parse(localStorage.getItem('PcData')) || [];
        const updatedData = data.filter((d) => d._id !== id);
        localStorage.setItem('PcData', JSON.stringify(updatedData));
        setUserPcData(updatedData)
    }


    const pcInfo = userPcData.find(pcData => pcData.category === category.label)

    console.log(pcInfo?.category, category?.label)

    return (
        <div className='bg-slate-900 flex my-2 rounded-md text-white px-4'>
            <div className='text-center w-[15%]'>
                <p className=' text-4xl text-white'>{category.icon}</p>
            </div>
            <div className='w-[70%]'>
                <div className='inline border-2 border-white'>
                    <p className='font-bold'>{category.label}</p>
                </div>
                <div>
                    {
                        pcInfo && <div className='flex gap-5'>
                            <div>
                                <Image className='rounded-md' src={pcInfo.image} alt='' width={60} height={60} />
                            </div>
                            <div>
                                <h3 className='leading-none text-start m-0'>{pcInfo.productName}</h3>
                                <p className='mt-1 text-lg font-medium text-start'><TbCurrencyTaka />{pcInfo.price}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {
                !pcInfo && <div className='flex justify-center items-center w-[15%]'>
                    <Link className='w-full' href={`/pc-builder/choseComponent${category.path}`}>
                        <button className='p-2 w-full text-md font-bold cursor-pointer'>Chose</button>
                    </Link>
                </div>
            }
            {
                pcInfo && <div className='flex justify-center items-center w-[15%]'>
                    <button onClick={() => { handleCancel(pcInfo._id) }} className='p-2 w-full text-md font-bold cursor-pointer'>Cancel</button>
                </div>
            }
        </div>
    );
};

export default CategorySelection;