import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footers/Footer';
import Navbar from '../components/navbar/Navbar';
import Slidebar from '@/components/slidebar/Slidebar';

const AuthUiLayout = () => {
    return (
        <div className='layoutMain'>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AuthUiLayout;
