import { Card, Col, Row } from 'antd';
import React from 'react';
import { GiCpu, GiPowerGenerator } from "react-icons/gi";
import { BsMotherboard, BsMouse3, BsKeyboard, BsGpuCard } from "react-icons/bs";
import { CgSmartphoneRam, CgBox } from "react-icons/cg";
import { MdOutlineStorage, MdMonitor } from "react-icons/md";
import Link from 'next/link';

const categories = [
    {
        path: '/categories/processor',
        icon: <GiCpu />,
        label: 'Processor',
    }, {
        path: '/categories/motherboard',
        icon: <BsMotherboard />,
        label: 'Motherboard'
    }, {
        path: '/categories/ram',
        icon: <CgSmartphoneRam />,
        label: 'Ram'
    }, {
        path: '/categories/powersupply',
        icon: <GiPowerGenerator />,
        label: 'Power supply'
    }, {
        path: '/categories/storagedevice',
        icon: <MdOutlineStorage />,
        label: 'Storage device'
    }, {
        path: '/categories/monitor',
        icon: <MdMonitor />,
        label: 'Monitor'
    }, {
        path: '/categories/casing',
        icon: <CgBox />,
        label: 'Casing'
    }, {
        path: '/categories/mouse',
        icon: <BsMouse3 />,
        label: 'Mouse'
    }, {
        path: '/categories/keyboard',
        icon: <BsKeyboard />,
        label: 'Keyboard'
    }, {
        path: '/categories/gpu',
        icon: <BsGpuCard />,
        label: 'GPU'
    },
]

const CategoriesSection = () => {
    return (
        <Row gutter={[16, 16]}>
            {
                categories.map((category, index) => (<Col key={index + 1}>
                    <Link href={category.path}><Card style={{
                        width: '240px',
                        textAlign: 'center'
                    }}>
                        <h1 style={{
                            fontSize: '60px'
                        }}>{category.icon}</h1>
                        <h1>{category.label}</h1>
                    </Card></Link>
                </Col>))
            }
        </Row>
    );
};

export default CategoriesSection;