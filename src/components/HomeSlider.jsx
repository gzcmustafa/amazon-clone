import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import {Link} from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const HomeSlider = ({title,images}) => {
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
          images.map((image,i)=> (
            <SwiperSlide  key={i}>
               <Link to={`/product/${i}`}>
                 <img src={image}  />
               </Link>
            </SwiperSlide>
          ))
        }
       
      </Swiper>
        </div>
      
    </div>
  )
}

export default HomeSlider;
