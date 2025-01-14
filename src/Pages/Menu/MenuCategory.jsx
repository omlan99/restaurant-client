import React from "react";
import MenuItem from "../../Component/MenuItem";
import Intro from "../../Component/Intro";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, image, details }) => {
  return (
    <div className="mb-10">
        {title && <Intro title={title} image={image} details={details}></Intro>}
      <div className="grid md:grid-cols-2 gap-10 px-4 mb-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center"><button className='btn btn-outline border-0 border-b-4'>Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
