import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle';
import MenuItem from '../../Component/MenuItem';
import useMenu from '../../Hook/UseMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')

    // const [menu , setMenu] = useState([])
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularMenu = data.filter(item => item.category === 'popular');
    //         setMenu(popularMenu)

    //     })
    // },[])
    return (
       <section className='mb-12'>
        <SectionTitle
        heading='From Our Menu'
        subHeading="Popular Items">

        </SectionTitle>
        <div className='grid md:grid-cols-2 gap-10 px-4'>
            {
                popularMenu.map(item => <MenuItem key={item._id} item ={item}></MenuItem>)
            }
        </div>
       </section>
    );
};

export default PopularMenu;