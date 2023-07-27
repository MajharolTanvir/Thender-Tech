
import RootLayout from '@/components/Layouts/RootLayout';
import CategoriesSection from '@/components/Ui/categoriesSection';
import ComponentCard from '@/components/Ui/componentCard';
import { Row } from 'antd';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <section style={{
        margin: '40px 0'
      }}>
        <h1 style={{
          paddingBottom: '15px',
          fontSize: '30px'
        }}>Featured Products</h1>
        <Row><ComponentCard /></Row>
      </section>
      <section style={{
        margin: '40px 0'
      }}>
      <h1 style={{
          paddingBottom: '15px',
          fontSize: '30px'
      }}>Featured Categories</h1>
      <CategoriesSection />
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