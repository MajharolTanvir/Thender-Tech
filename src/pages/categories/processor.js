import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Processor = () => {
    return (
        <div>
            <h1>This is Processor page</h1>
        </div>
    );
};

export default Processor;


Processor.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}