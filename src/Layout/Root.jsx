
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import TopHeader from '../Components/Header/TopHeader';
import Footer from '../Components/Footer/Footer';


const Root = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;