import Cover from "../../Component/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import shopImg from "../../assets/shop/banner2.jpg";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
const Order = () => {
    const [tabIndex, setTabIndex] = useState()
  return (
    <div>
      <Cover image={shopImg} title={"Order Food"}></Cover>
      <div className="flex justify-center uppercase">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      </div>
 
    </div>
  );
};

export default Order;
