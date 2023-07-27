import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Monitor = () => {
    return (
        <div>
            <h1>This is monitor page</h1>
        </div>
    );
};

export default Monitor;

Monitor.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}