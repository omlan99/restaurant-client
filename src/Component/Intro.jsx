import React from 'react';

import './Intro.css'
const Intro = ({title, details}) => {
    return (
        <div className="Intro-css  h-[200px] md:h-[572px] bg-fixed flex justify-center items-center text-center my-20">
               <div className='md:max-w-[1096px] bg-white md:py-[100px] md:px-[167px] space-y-2 mx-3 p-4'>
                    <h2 className='uppdercase text-5xl'>{title}</h2>
                    <p>{details}</p>

                </div> 
        </div>
    );
};

export default Intro;