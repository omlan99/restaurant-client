import React from 'react';

const Card = ({item}) => {
    const {image , name, recipe, price} = item
    return (
        <div className="card bg-base-100 max-w-[424px]">
        <figure className=" pt-10">
          <img

            src={image}
            alt="Shoes"
            className="w-full" />
        </figure>
        <p className='bg-slate-900 text-white absolute right-0 mt-12 mr-3 px-3 py-2 rounded-lg'>$ {price}</p>
        <div className="card-body items-center text-center bg-[#f3f3f3]">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 bg-slate-300 border-yellow-400 text-yellow-400 hover:text-yellow-400">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default Card;