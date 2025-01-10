import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white relative z-0">
      <Swiper
        spaceBetween={0}
        loop={true}
        className='h-[85%]'
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <img src="/images/carousel_3.jpg" alt="carousel image 3" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_2.jpg" alt="carousel image 2" className="h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/carousel_1.jpg" alt="carousel image 1" className="h-full w-full object-cover" />
        </SwiperSlide>
      </Swiper>
      <div className='z-50 absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-amazon-background via-amazon-background/60 to-transparent'></div>
    </div>
  )
}

export default Carousel;
