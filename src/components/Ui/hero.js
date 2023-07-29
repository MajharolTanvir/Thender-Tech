/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            <Image className='w-full h-full' alt='fd' src='https://www.startech.com.bd/image/cache/catalog/home/banner/desktop-deal/desktop-deal-live-now-home-banner-982x500.webp' width={500} height={500} />
        </div>
    );
};

export default Hero;