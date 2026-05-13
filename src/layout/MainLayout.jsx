import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='w-11/12 mx-auto'>
                {/* <Footer></Footer> */}
            </footer>
        </div>
    );
};

export default MainLayout;