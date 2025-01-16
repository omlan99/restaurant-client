import React from "react";
import useAuth from "../Hook/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSecure";

const Card = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const axiosSecure = useAxiosSecure()
    if (user && user.email) {
      const cartItem = {
        menuId : _id,
        email : user.email,
        name : user.displayName,
        image,
        price
      }
      console.log(cartItem)
      axiosSecure('/carts', cart)

    } else {
      navigate("/login");
    }
  };
  return (
    <div className="card bg-base-100 max-w-[424px]">
      <figure className=" pt-10">
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-12 mr-3 px-3 py-2 rounded-lg">
        $ {price}
      </p>
      <div className="card-body items-center text-center bg-[#f3f3f3]">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleClick}
            className="btn btn-outline border-0 border-b-4 bg-slate-300 border-yellow-400 text-yellow-400 hover:text-yellow-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
