import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slide1 from '../../assets/home/slide1.jpg'
import Slide2 from '../../assets/home/slide2.jpg'
import Slide3 from '../../assets/home/slide3.jpg'
import Slide4 from '../../assets/home/slide4.jpg'
import Slide5 from '../../assets/home/slide5.jpg'
const Category = () => {
    return (

        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Slide1} alt="" />
        <p className='-mt-12 text-4xl uppercase text-center text-white'>Salad</p></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" />
        <p className='-mt-12 text-4xl uppercase text-center text-white'>Pasta</p></SwiperSlide>
        <SwiperSlide><img src={Slide3} alt="" />
        <p className='-mt-12 text-4xl uppercase text-center text-white'>soup</p></SwiperSlide>
        <SwiperSlide><img src={Slide4} alt="" />
        <p className='-mt-12 text-4xl uppercase text-center text-white'>cake</p></SwiperSlide>
        <SwiperSlide><img src={Slide5} alt="" />
        <p className='-mt-12 text-4xl uppercase text-center text-white'>Salad</p></SwiperSlide>
        
      </Swiper>
      
       
    );
};

export default Category;