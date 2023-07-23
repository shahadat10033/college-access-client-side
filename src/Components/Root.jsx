import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className='min-h-full'><Outlet></Outlet></div> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;