import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle';
import useMenu from '../../Hook/UseMenu';

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
                menu.slice(0, 3).map(menu => <div className="card bg-base-100 max-w-[424px]">
                    <figure className=" pt-10">
                      <img

                        src={menu.image}
                        alt="Shoes"
                        className="w-full" />
                    </figure>
                    <div className="card-body items-center text-center bg-[#f3f3f3]">
                      <h2 className="card-title">{menu.name}</h2>
                      <p>{menu.recipe}</p>
                      <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 border-yellow-400 text-yellow-400 hover:text-yellow-400">Add To Cart</button>
                      </div>
                    </div>
                  </div>)
            }
            </div>
        </div>
    );
};

export default Recommend;