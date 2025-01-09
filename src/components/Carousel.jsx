import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white relative">
      <Swiper
        spaceBetween={0}
        loop={true}
        className='h-[50%]'
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <img src="/images/carousel_3.jpg" alt="carousel image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_2.jpg" alt="carousel image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_1.jpg" alt="carousel image 1" />
        </SwiperSlide>
      </Swiper>
      <div className='h-[50%] bg-gradient-to-b from-stone-900'></div>
    </div>
  )
}

export default Carousel;
