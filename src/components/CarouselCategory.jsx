import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const CarouselCategory = ({title,images}) => {
  return (
    <div className=" m-3 bg-white p-4  h-[285px] ">
        <div className='text-lg xl:text-xl mb-4 font-semibold '>{title}</div>

        <div>
        <Swiper
        spaceBetween={-400}
        navigation={true}
        slidesPerView={5}
        modules={[Navigation]}
        
      >
        
        {
          images.map((image,index)=> (
            <SwiperSlide>
          <img src={image}  />
        </SwiperSlide>
          ))
        }
       
      </Swiper>
        </div>
      
    </div>
  )
}

export default CarouselCategory;
