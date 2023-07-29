import React, { useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useSession, signOut } from "next-auth/react"
import auth from '@/firebase/firebase.auth';
import {
    DatabaseOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { TbHandClick } from 'react-icons/tb';


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Category', 'sub1', <DatabaseOutlined />, [
        getItem(<Link rel="noopener noreferrer" href="/categories/processor">
            Processor
        </Link>, '0'),
        getItem(<Link rel="noopener noreferrer" href="/categories/motherboard">
            Motherboard
        </Link>, '1'),
        getItem(<Link rel="noopener noreferrer" href="/categories/ram">
            RAM
        </Link>, '2'),
        getItem(<Link rel="noopener noreferrer" href="/categories/powersupply">
            Power Supply Unit
        </Link>, '3'),
        getItem(<Link rel="noopener noreferrer" href="/categories/storagedevice">
            Storage Device
        </Link>, '4'),
        getItem(<Link rel="noopener noreferrer" href="/categories/monitor">
            Monitor
        </Link>, '5'),
        getItem(<Link rel="noopener noreferrer" href="/categories/casing">
            Casing
        </Link>, '6'),
        getItem(<Link rel="noopener noreferrer" href="/categories/mouse">
            Mouse
        </Link>, '7'),
        getItem(<Link rel="noopener noreferrer" href="/categories/keyboard">
            Keyboard
        </Link>, '8'),
        getItem(<Link rel="noopener noreferrer" href="/categories/graphics">
            Graphics
        </Link>, '9'),

    ]),

];

const Navbar = ({ children }) => {
    const { data: session } = useSession()
    const [user] = useAuthState(auth);
    const [{ signOut: logout }] = useSignOut(auth);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout className='md:hidden'
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div>
                    <h1 className='text-center'>
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
                    </h1>
                </div>
                <Menu theme="dark" mode="inline" items={items} />

                {
                    (session?.user?.email || user?.email) ? <>
                        {
                            session?.user?.email && <Menu
                                theme="dark"
                                mode="inline"
                                items={[
                                    {
                                        key: '1',
                                        icon: <UserOutlined />,
                                        label: <button className='text-lg bg-transparent border-none text-white cursor-pointer' onClick={() => signOut()}>
                                            Logout
                                        </button>,
                                    }
                                ]}
                            />
                        }
                        {
                            user?.email && <Menu
                                theme="dark"
                                mode="inline"
                                items={[
                                    {
                                        key: '1',
                                        icon: <UserOutlined />,
                                        label: <button className='text-lg bg-transparent border-none text-white cursor-pointer' onClick={() => logout()}>
                                            Logout
                                        </button>,
                                    }
                                ]}
                            />
                        }

                    </>
                        : <Menu
                            theme="dark"
                            mode="inline"
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: <Link style={{
                                        color: 'white',
                                        fontSize: '16px'
                                    }} href='/login'>Login</Link>
                                }
                            ]}
                        />
                }
                <Menu
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key: '1',
                            icon: <TbHandClick />,
                            label: <Link href='/pc-builder'><Button>
                                PC Builder
                            </Button>
                            </Link>
                        }
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: 'white',
                        height: '0px'
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {
                            children
                        }
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
        </Layout>
    );
};

export default Navbar;