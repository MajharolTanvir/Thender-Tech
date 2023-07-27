import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Casing = () => {
    return (
        <div>
            <h1>This is casing page</h1>
        </div>
    );
};

export default Casing;


Casing.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}