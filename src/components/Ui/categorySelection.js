
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
        <div className='bg-white shadow-md shadow-slate-200 flex my-4 rounded-md text-slate-900 px-4'>
            <dic className='flex items-center justify-center w-[10%]'>
                <p className='text-5xl text-slate-900 m-7'>{category.icon}</p>
            </dic>
            <div className='w-[70%] pl-5'>
                <div className='inline border-2 border-white'>
                    <p className='font-bold'>{category.label}</p>
                </div>
                <div>
                    {
                        pcInfo && <div>
                            <h3 className='leading-none text-start m-0'>{pcInfo.productName}</h3>
                            <p className='mt-1 text-lg font-medium text-start flex items-center'>{pcInfo.price}<TbCurrencyTaka /></p>
                        </div>
                    }
                </div>
            </div>
            {
                pcInfo ? <div className='w-[10%] flex justify-center items-center'>
                    <Image className='rounded-md' src={pcInfo.image} alt='' width={80} height={80} />
                </div> : <div className='w-[10%]'></div>
            }
            {
                !pcInfo && <div className='flex justify-center items-center w-[10%]'>
                    <Link className='w-full' href={`/pc-builder/choseComponent${category.path}`}>
                        <button className='p-2 w-full text-md font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>Chose</button>
                    </Link>
                </div>
            }
            {
                pcInfo && <div className='flex justify-center items-center w-[10%]'>
                    <button onClick={() => { handleCancel(pcInfo._id) }} className='p-2 w-full text-md font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>Cancel</button>
                </div>
            }
        </div>
    );
};

export default CategorySelection;