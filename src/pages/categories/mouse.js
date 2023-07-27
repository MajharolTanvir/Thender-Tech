import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Mouse = () => {
    return (
        <div>
            <h1>This is Mouse page</h1>
        </div>
    );
};

export default Mouse;

Mouse.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}