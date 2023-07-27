import React from 'react';
import { Button, Layout, theme } from 'antd';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const { Header, Content, Footer } = Layout;


const items = [
    {
        label: (
            <a rel="noopener noreferrer" href="/categories/processor">
                Processor
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/categories/motherboard">
                Motherboard
            </a>
        ),
        key: '1',
    },
    {
        label: (
            <a rel="noopener noreferrer" href="/categories/ram">
                RAM
            </a>
        ),
        key: '2',
    }, {
        label: (
            <a rel="noopener noreferrer" href="/categories/powersupply">
                Power Supply Unit
            </a>
        ),
        key: '3',
    }, {
        label: (
            <a rel="noopener noreferrer" href="/categories/storagedevice">
                Storage Device
            </a>
        ),
        key: '4',
    }, {
        label: (
            <a rel="noopener noreferrer" href="/categories/monitor">
                Monitor
            </a>
        ),
        key: '5',
    },
    {
        type: 'divider',
    }
];

const RootLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <div><h1>
                    <Link
                        href="/"
                        style={{
                            color: "white",
                            padding: "5px 10px",
                            borderRadius: "3px",
                        }}
                    >
                        Thunder_Tech
                    </Link>
                </h1></div>
                <Dropdown
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{
                            color: 'white',
                            fontSize: '16px'
                        }}>
                            Categories
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <Button>
                    PC Builder
                </Button>
            </Header>
            <Content
                style={{
                    margin: '16px 0'
                }}
            >

                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        minHeight: '100vh',
                        color: 'black'
                    }}
                >
                    Content
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default RootLayout;


