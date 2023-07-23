import React from 'react';
import Header from "../components/Header/Header";
import Layout from "./Layout";
import './main.css';

const MainPage = () => {
    return (
        <div className={'main'}>
            <Header/>
            <Layout/>
        </div>
    );
};

export default MainPage;