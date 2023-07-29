import RootLayout from '@/components/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { TbCurrencyTaka } from "react-icons/tb";

const ChoseComponent = ({ products }) => {
    const router = useRouter()

    const addProduct = (product) => {
        const data = JSON.parse(localStorage.getItem('PcData')) || []
        data.push(product)
        localStorage.setItem('PcData', JSON.stringify(data))
        router.push('/pc-builder')
    }

    return (
        <div className='w-full'>
            {
                products.map(product => <>
                    <div key={product?._id} className='bg-slate-900 flex gap-x-10 my-2 rounded-md text-white p-4'>
                        <div className='text-center w-[15%]'>
                            <Image src={product.image} alt='' width={180} height={180} />
                        </div>
                        <div className='w-[70%] text-white'>
                            <div className='inline border-2 border-white'>
                                <h1>{product.productName}</h1>
                                <p>Category: {product.category}</p>
                                <p>Status: {product.status}</p>
                                <p>Rating: {product.rating}</p>
                                <h2><TbCurrencyTaka />{product.price}</h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-[15%]'>
                            <button onClick={() => addProduct(product)} className='p-2 w-full text-md font-bold cursor-pointer'>Add To Builder</button>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default ChoseComponent;

ChoseComponent.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getServerSideProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:3000/api/products`)
    const productsData = await res.json()
    const data = productsData.data.filter(products => products?.category === params.choseComponent)

    return {
        props: { products: data }

    }
}
