
import RootLayout from '@/components/Layouts/RootLayout';
import CategoriesSection from '@/components/Ui/categoriesSection';
// import ComponentCard from '@/components/Ui/componentCard';
import React from 'react';
import dynamic from 'next/dynamic'
import Hero from '@/components/Ui/hero';

const HomePage = ({ products }) => {

  const ComponentCard = dynamic(() => import('@/components/Ui/componentCard'), {
    loading: () => <p>Loading...</p>,
  })



  return (
    <div>
      <section className='w-full'>
        <Hero></Hero>
      </section>
      <section style={{
        margin: '40px 0'
      }}>
        <h1 style={{
          paddingBottom: '15px',
          fontSize: '30px'
        }}>Featured Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            products?.map(product => <ComponentCard key={product?._id} product={product} />)
          }
        </div>
      </section>
      <section className='my-20'>
        <h1 style={{
          paddingBottom: '15px',
          fontSize: '30px'
        }}>Featured Categories</h1>
        <CategoriesSection className='w-full' />
      </section>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products`)
  const productsData = await res.json()
  const randomData = productsData.data.sort(() => Math.random() - 0.5)
  const data = randomData.slice(0, 6)


  return {
    props: { products: data }

  }
}

