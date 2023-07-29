import { Button, Card, Col, Rate } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ComponentCard = ({ product }) => {
    return (
        <div>
            <Card className='h-full'
                hoverable
                cover={<Image alt="example" src={product.image} priority width={150} height={250} />}
            >
                <h1>{product.productName}</h1>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Status: {product.status}</p>
                <Rate allowHalf defaultValue={product.rating} />
                <Link className='flex justify-center' href={`/categories/product/${product?._id}`}>
                    <Button className='w-full'>View Details</Button>
                </Link>
            </Card>
        </div>
    );
};

export default ComponentCard;