import React from "react";
import MenuItem from "../../Component/MenuItem";
import Intro from "../../Component/Intro";

const MenuCategory = ({ items, title, image, details }) => {
  return (
    <div>
        {title && <Intro title={title} image={image} details={details}></Intro>}
      <div className="grid md:grid-cols-2 gap-10 px-4 mb-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
