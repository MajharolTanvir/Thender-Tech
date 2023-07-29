import { Button, Card, Col, Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ComponentCard = ({ product }) => {
    return (
        <div>
            <Card className='h-full'
                hoverable
                cover={<Image alt="example" src={product.image} priority width={200} height={200} layout="responsive" />}
            >
                <h1>{product.productName}</h1>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Status: {product.status}</p>
                <Rate allowHalf defaultValue={product.rating} />
                <Link className='flex justify-center py-2' href={`/categories/product/${product._id}`}>
                    <Button className='p-2 w-full text-md font-bold border-slate-900 rounded-md bg-slate-900 text-white cursor-pointer'>View Details</Button>
                </Link>
            </Card>
        </div>
    );
};

export default ComponentCard;