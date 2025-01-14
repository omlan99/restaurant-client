import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../Component/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testomonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center md:max-w-screen-lg my-16 mx-28 space-y-6 text-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <FaQuoteLeft className="text-4xl"></FaQuoteLeft>
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">"{review.name}"</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testomonial;
