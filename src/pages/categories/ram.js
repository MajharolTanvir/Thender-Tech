import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Ram = () => {
    return (
        <div>
            <h1>This is Ram page</h1>
        </div>
    );
};

export default Ram;


Ram.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}