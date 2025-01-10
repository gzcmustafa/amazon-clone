import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Carousel = ({title}) => {
  return (
    <div className=" m-3 bg-white p-4 m-auto h-[285px] ">
        <div className='text-lg xl:text-xl mb-4 font-semibold '>{title}</div>

        <div>
        <Swiper
        spaceBetween={-400}
        navigation={true}
        slidesPerView={5}
        modules={[Navigation]}
        
      >
        <SwiperSlide>
          <img src="/images/carouselctg_3.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_2.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_1.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_4.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_5.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_6.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_7.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_8.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_9.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_10.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_1.jpg"  />
        </SwiperSlide>


        <SwiperSlide>
          <img src="/images/carouselctg_1.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_3.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_4.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_2.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_9.jpg"  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/carouselctg_5.jpg"  />
        </SwiperSlide>

        


        
        
       
      </Swiper>
        </div>
      
    </div>
  )
}

export default Carousel;
