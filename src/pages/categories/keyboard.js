import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const Keyboard = () => {
    return (
        <div>
            <h1>This is keyboard page</h1>
        </div>
    );
};

export default Keyboard;


Keyboard.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}