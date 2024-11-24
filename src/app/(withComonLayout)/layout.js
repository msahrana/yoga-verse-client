import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
            <Toaster />
        </div>
    );
};

export default layout;