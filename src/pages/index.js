
import RootLayout from '@/components/Layouts/RootLayout';
import ComponentCard from '@/components/Ui/componentCard';
import { Row } from 'antd';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 style={{
        paddingBottom: '15px',
      }}>Featured Products</h1>
      <Row><ComponentCard /></Row>
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