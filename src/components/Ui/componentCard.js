import { Button, Card, Col } from 'antd';
import Link from 'next/link';
import React from 'react';

const ComponentCard = () => {
    return (
        <Col xs={24} sm={24} md={12} lg={8}>
            <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <h1>Title</h1>
                <p>Category</p>
                <p>price</p>
                <p>status</p>
                <p>rating</p>
                <Link href='/'>
                    <Button>View Details</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default ComponentCard;