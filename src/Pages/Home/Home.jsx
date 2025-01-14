import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testomonial from "./Testomonial";
import Intro from "./Intro";
import CallUs from "./CallUs";
import Recommend from "./Recommend";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Intro></Intro>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommend></Recommend>
      <Featured></Featured>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
