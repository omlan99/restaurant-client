import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle
            heading={'Form Our Menu'}
            subHeading={'Check It Out'}>

            </SectionTitle>
            <div className='md:flex justify-center items-center px-36 pt-12 pb-20 '>
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10  space-y-4'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where Can I get Some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores dolore labore laborum reprehenderit dolor est minus magnam at non expedita exercitationem quam odio molestiae voluptates autem aliquid atque, dicta repellat odit quibusdam placeat nisi! Fugiat, in itaque quasi sapiente eum repellendus nobis cum laboriosam iste, dolorum quod aut iusto.</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;