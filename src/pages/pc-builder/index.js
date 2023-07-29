import RootLayout from '@/components/Layouts/RootLayout';
import CategorySelection from '@/components/Ui/categorySelection';
import React, { useEffect, useState } from 'react';
import { BsGpuCard, BsKeyboard, BsMotherboard, BsMouse3 } from 'react-icons/bs';
import { CgBox, CgSmartphoneRam } from 'react-icons/cg';
import { GiCpu, GiPowerGenerator } from 'react-icons/gi';
import { MdMonitor, MdOutlineStorage } from 'react-icons/md';

const categories = [
    {
        path: '/Processor',
        icon: <GiCpu />,
        label: 'Processor',
    }, {
        path: '/Motherboard',
        icon: <BsMotherboard />,
        label: 'Motherboard'
    }, {
        path: '/Ram',
        icon: <CgSmartphoneRam />,
        label: 'Ram'
    }, {
        path: '/Power-supply',
        icon: <GiPowerGenerator />,
        label: 'Power-supply'
    }, {
        path: '/Storage',
        icon: <MdOutlineStorage />,
        label: 'Storage'
    }, {
        path: '/Monitor',
        icon: <MdMonitor />,
        label: 'Monitor'
    }, {
        path: '/Casing',
        icon: <CgBox />,
        label: 'Casing'
    }, {
        path: '/Mouse',
        icon: <BsMouse3 />,
        label: 'Mouse'
    }, {
        path: '/Keyboard',
        icon: <BsKeyboard />,
        label: 'Keyboard'
    }, {
        path: '/Gpu',
        icon: <BsGpuCard />,
        label: 'Gpu'
    },
]

const PcBuilder = () => {
    const [userPcData, setUserPcData] = useState([])

    useEffect(() => {
        if (typeof window !== undefined) {
            const data = JSON.parse(localStorage.getItem('PcData')) || []

            setUserPcData(data)
        }
    }, [])

    return (
        <div className='w-full'>
            <div>
                {
                    categories.map((category, index) =>
                        <CategorySelection key={index + 1} userPcData={userPcData} setUserPcData={setUserPcData} category={category} />
                    )
                }
            </div>
            <div className='flex justify-center'>
                {
                    userPcData.length >= 5 && <button className='px-10 p-2 rounded-lg text-md font-bold'>Complete build</button>
                }
            </div>
        </div>
    );
};

export default PcBuilder;


PcBuilder.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}