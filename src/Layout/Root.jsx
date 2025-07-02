
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import TopHeader from '../Components/Header/TopHeader';
import Footer from '../Components/Footer/Footer';
import BottomHeader from '../Components/Header/BottomHeader';


const Root = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            <BottomHeader />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;