import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Component/Cover';
import coverImg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../../Pages/Home/PopularMenu";
import { Parallax } from 'react-parallax';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={coverImg} title={'our Menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={coverImg} title={'our Menu'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover image={coverImg} title={'our Menu'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;