import React from 'react';
import IntroImg from '../../assets/home/chef-service.jpg'
import './Intro.css'
const Intro = () => {
    return (
        <div className="Intro-css  h-[200px] md:h-[572px] bg-fixed flex justify-center items-center text-center my-20">
               <div className='md:max-w-[1096px] bg-white md:py-[100px] md:px-[167px] space-y-2 mx-3 p-4'>
                    <h2 className='uppdercase text-5xl'>Bistro Boss</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nulla esse sit debitis molestiae eveniet iste temporibus ullam illo nihil.</p>

                </div> 
        </div>
    );
};

export default Intro;