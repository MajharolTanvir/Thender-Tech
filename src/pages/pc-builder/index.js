import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const PcBuilder = () => {
    return (
        <div>
            <h1>Pc builder</h1>
        </div>
    );
};

export default PcBuilder;


PcBuilder.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}