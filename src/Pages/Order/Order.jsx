import Cover from "../../Component/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import shopImg from "../../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hook/UseMenu";
import Card from "../../Component/Card";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const salads = menu.slice(0.6).filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet><title>Bistro Boss | Order</title></Helmet>
      <Cover image={shopImg} title={"Order Food"}></Cover>
      <div className="flex justify-center uppercase">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
