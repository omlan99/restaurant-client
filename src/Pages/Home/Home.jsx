import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testomonial from "./Testomonial";
import Intro from "../../Component/Intro";
import CallUs from "./CallUs";
import Recommend from "./Recommend";
import { Helmet } from "react-helmet-async";
import introImg from '../../assets/home/chef-service.jpg'


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Intro title={"Bistro Boss"} details={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam nulla esse sit debitis molestiae eveniet iste temporibus ullam illo nihil."} image={introImg}></Intro>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommend></Recommend>
      <Featured></Featured>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
