import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Gpu = () => {
    return (
        <div>
            <h1>This is gpu page</h1>
        </div>
    );
};

export default Gpu;


Gpu.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}