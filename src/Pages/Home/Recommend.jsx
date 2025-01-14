import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle';
import useMenu from '../../Hook/UseMenu';
import Card from '../../Component/Card';

const Recommend = () => {
    const [menu] = useMenu()
    // const [menus, setMenus] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenus(data)
    //     })
    // },[])
    return (
        <div>
            <SectionTitle subHeading={'Should Try'} heading={'chef recommends'}></SectionTitle>
            <div className='grid lg:grid-cols-3 gap-6 items-center justify-center'>
            {
                menu.slice(0, 3).map(menu =><Card item={menu}></Card>
                )
            }
            </div>
        </div>
    );
};

export default Recommend;