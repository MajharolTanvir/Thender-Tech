import React from 'react';
import { Button, Layout, theme } from 'antd';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const { Header, Content, Footer } = Layout;


const items = [
    {
        label: (
            <Link rel="noopener noreferrer" href="/categories/processor">
                Processor
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link rel="noopener noreferrer" href="/categories/motherboard">
                Motherboard
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link rel="noopener noreferrer" href="/categories/ram">
                RAM
            </Link>
        ),
        key: '2',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/powersupply">
                Power Supply Unit
            </Link>
        ),
        key: '3',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/storagedevice">
                Storage Device
            </Link>
        ),
        key: '4',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/monitor">
                Monitor
            </Link>
        ),
        key: '5',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/casing">
                Casing
            </Link>
        ),
        key: '6',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/mouse">
                Mouse
            </Link>
        ),
        key: '7',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/keyboard">
                Keyboard
            </Link>
        ),
        key: '8',
    }, {
        label: (
            <Link rel="noopener noreferrer" href="/categories/gpu">
                Gpu
            </Link>
        ),
        key: '9',
    },
    {
        type: 'divider',
    }
];

const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout bg-white">
            <Header
                style={{
                    backgroundColor: '#1E062E',
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
                    className="container mx-auto"
                    style={{
                        background: colorBgContainer,
                        minHeight: '100vh',
                        color: 'black',
                        display: 'flex',
                        padding: "0 20px"
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#1E062E',
                    color: 'white'
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default RootLayout;


