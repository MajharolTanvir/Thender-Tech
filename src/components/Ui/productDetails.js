import React from 'react';
import { Rate } from 'antd';
import Image from 'next/image';

const ProductDetails = ({ product }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div>
                    <Image alt='' src={product.image} width={300} height={300} layout="responsive" />
                </div>
                <div>
                    <h1>Title: {product?.productName}</h1>
                    <p><span className='font-bold'>Category:</span> {product?.category}</p>
                    <p><span className='font-bold'>Status:</span> {product?.status}</p>
                    <p><span className='font-bold'>Individual rating:</span>
                        <Rate allowHalf defaultValue={product?.individualRating} />
                    </p>
                    <h3>Reviews</h3>
                    {
                        product?.reviews?.map(r => <>

                            <p>{r.reviewText}</p>
                        </>)
                    }
                    <h1>Price: {product?.price}</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h1>Key features</h1>
                    <ul>
                        <li className='font-semibold text-lg'>
                            Brand: {product?.keyFeatures?.brand}
                        </li>
                        {product?.keyFeatures?.model && <li className='font-semibold text-lg'>Model: {product?.keyFeatures?.model}</li>}

                        {product?.keyFeatures?.aspectRation && <li className='font-semibold text-lg'>Aspect Ratio: {product?.keyFeatures?.aspectRation}</li>}

                        {product?.keyFeatures?.display && <li className='font-semibold text-lg'>Display: {product?.keyFeatures?.display}</li>}


                        {product?.keyFeatures?.features && <li className='font-semibold text-lg'>Features: {product?.keyFeatures?.features}</li>}


                        {product?.keyFeatures?.port && <li className='font-semibold text-lg'>Port: {product?.keyFeatures?.port}</li>}

                        {product?.keyFeatures?.cache && <li className='font-semibold text-lg'>Cache: {product?.keyFeatures?.cache}</li>}

                        {product?.keyFeatures?.speed && <li className='font-semibold text-lg'> Speed: {product?.keyFeatures?.speed}</li>}

                        {product?.keyFeatures?.GraphicsOutput && <li className='font-semibold text-lg'> Graphics Output: {product?.keyFeatures?.GraphicsOutput}</li>}

                        {product?.keyFeatures?.SupportedMemory && <li className='font-semibold text-lg'> Supported Memory: {product?.keyFeatures?.SupportedMemory}</li>}

                        {product?.keyFeatures?.SupportedProcessors && <li className='font-semibold text-lg'> Supported Processors: {product?.keyFeatures?.SupportedProcessors}</li>}

                        {product?.keyFeatures?.capacity && <li className='font-semibold text-lg'> Capacity: {product?.keyFeatures?.capacity}</li>}

                        {product?.keyFeatures?.frequency && <li className='font-semibold text-lg'> Frequency: {product?.keyFeatures?.frequency}</li>}

                        {product?.keyFeatures?.Certification && <li className='font-semibold text-lg'> Certification: {product?.keyFeatures?.Certification}</li>}

                        {product?.keyFeatures?.modularType && <li className='font-semibold text-lg'> Modular Type: {product?.keyFeatures?.modularType}</li>}

                        {product?.keyFeatures?.frequencyRange && <li className='font-semibold text-lg'>Frequency Range: {product?.keyFeatures?.frequencyRange}</li>}

                        {product?.keyFeatures?.busType && <li className='font-semibold text-lg'>Bus Type: {product?.keyFeatures?.busType}</li>}

                        {product?.keyFeatures?.coreClock && <li className='font-semibold text-lg'>Core Clock: {product?.keyFeatures?.coreClock}</li>}

                        {product?.keyFeatures?.memoryClock && <li className='font-semibold text-lg'>Memory Clock: {product?.keyFeatures?.memoryClock}</li>}

                        {product?.keyFeatures?.dimension && <li className='font-semibold text-lg'>Dimension: {product?.keyFeatures?.dimension}</li>}

                        {product?.keyFeatures?.formFactory && <li className='font-semibold text-lg'>Form Factor: {product?.keyFeatures?.formFactory}</li>}

                        {product?.keyFeatures?.mtbf && <li className='font-semibold text-lg'>MTBF: {product?.keyFeatures?.mtbf}</li>}

                        {product?.keyFeatures?.color && <li className='font-semibold text-lg'>Color: {product?.keyFeatures?.color}</li>}

                        {product?.keyFeatures?.weight && <li className='font-semibold text-lg'>Weight: {product?.keyFeatures?.weight}</li>}

                        {product?.keyFeatures?.voltage && <li className='font-semibold text-lg'>Voltage: {product?.keyFeatures?.voltage}</li>}

                        {product?.keyFeatures?.dimensions && <li className='font-semibold text-lg'>Dimensions: {product?.keyFeatures?.dimensions}</li>}

                        {product?.keyFeatures?.type && <li className='font-semibold text-lg'>Type: {product?.keyFeatures?.type}</li>}

                        {product?.keyFeatures?.buttons && <li className='font-semibold text-lg'>Buttons: {product?.keyFeatures?.buttons}</li>}

                        <li className='font-semibold text-lg'><span className='font-bold'>Average rating:</span>
                            <Rate allowHalf defaultValue={product?.averageRating} />
                        </li>
                    </ul>

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