import React from 'react';

const MenuItem = ({item}) => {
    const {recipe, price, image, name} = item
    return (
        <div className='flex space-x-4'>
            {/* same rounded style could be done with style={{borderRadius: '0 200px 200px 200px'}} */}
            
            <img className='w-[118px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px]' src={image} alt="" />
            <div>
                <h4 className='uppercase'>{name}-------</h4>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuItem;