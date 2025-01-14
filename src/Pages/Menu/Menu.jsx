import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Component/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hook/UseMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupsImg from "../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../assets/menu/salad-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salads = menu.slice(0.6).filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover image={coverImg} title={"our Menu"}></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={dessert.slice(0, 6)}
        title={"desserts"}
        details={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!"
        }
        image={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza.slice(0, 7)}
        title={"pizza"}
        details={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!"
        }
        image={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salads.slice(0, 8)}
        title={"salads"}
        details={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!"
        }
        image={saladsImg}
      ></MenuCategory>
      <MenuCategory
        items={soups.slice(0, 8)}
        title={"soups"}
        details={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis!"
        }
        image={soupsImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
