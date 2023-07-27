import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Motherboard = () => {
    return (
        <div>
            <h1>This is Motherboard page</h1>
        </div>
    );
};

export default Motherboard;


Motherboard.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}