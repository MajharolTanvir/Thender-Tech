import RootLayout from '@/components/Layouts/RootLayout';
import { Rate } from 'antd';
import React from 'react';

const ProductDetails = ({ product }) => {
    console.log(product)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div>
                    <h1>Title: {product?.productName}</h1>
                    <p>Category: {product?.category}</p>
                    <p>Status: {product?.status}</p>
                    <p>Individual rating:
                        <Rate allowHalf defaultValue={product?.individualRating} />
                    </p>
                    <p>Average rating:
                        <Rate allowHalf defaultValue={product?.averageRating} />
                    </p>
                    <p>Price: {product?.price}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h1>Key features</h1>
                    <p>Model: {product?.status}</p>
                    {/* {product?.keyFeature} */}
                </div>
                <div>
                    <h1>Description</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis fugit numquam blanditiis libero error voluptate quasi, molestias perspiciatis mollitia est vel sequi sunt iste atque sapiente dolor illum rerum voluptatem! Voluptatem rem voluptates cum dolorem deserunt necessitatibus soluta corporis repellendus quo unde saepe et veniam maiores nesciunt id, accusantium debitis at. Veritatis sapiente ullam architecto ea, eaque, magnam fuga similique accusantium recusandae officiis repellendus? Atque aliquam accusamus maxime maiores aperiam, architecto placeat eligendi asperiores illum? Autem ducimus delectus illum a corrupti sapiente sunt magni sint explicabo illo. Aperiam id aut obcaecati facilis vero repellendus enim provident, dignissimos minima beatae quasi praesentium quod. Sapiente eaque alias ex et magni nostrum? Facilis, debitis nihil earum maiores perferendis doloribus beatae iure fugiat voluptas obcaecati ab delectus aperiam similique voluptatem, numquam recusandae perspiciatis et assumenda eaque! Itaque ullam quo eligendi autem qui nostrum, minus modi dolore repellendus nesciunt optio corrupti amet suscipit ratione quam asperiores deleniti consequatur consequuntur fuga beatae facere quae enim at quasi? Id fugit expedita error distinctio quod perspiciatis aperiam ullam consectetur dolorum voluptas, quidem nisi autem dolorem voluptate? Quisquam quidem, similique perspiciatis ab provident veniam accusantium exercitationem incidunt recusandae libero mollitia, distinctio laudantium nisi nemo voluptate eveniet ex quasi.</p>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;


ProductDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()
    const paths = products?.data.map(product => ({
        params: { productId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:3000/api/products/${params.productId}`)
    const data = await res.json()
    console.log(data)

    return {
        props: { product: data }

    }
}