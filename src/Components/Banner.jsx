import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  
    return (
        <div className='mb-2'>
            <Swiper  modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
      }}
      pagination={{
        clickable: true,
      }}>
      <SwiperSlide className=''>
        <div className=" bg-blue-300 mx-auto flex flex-col items-center justify-center mt-1 space-y-5 pb-8 rounded-lg">
          <h2 className='font-bold text-2xl mt-4'>Learn new skills</h2>
          <img className='w-[350px] h-[250px] object-cover rounded-lg p-2' src="https://i.ibb.co.com/bR8f0p9b/9963620.jpg" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" bg-pink-300 mx-auto flex flex-col items-center justify-center mt-1 space-y-5 pb-8 rounded-lg">
          <h2 className='font-bold text-2xl mt-4'>Discover opportunities</h2>
          <img className='w-[350px] h-[250px] object-cover rounded-lg p-2' src="https://i.ibb.co.com/Vp5zpkJR/turned-gray-laptop-computer.jpg" alt="" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" bg-green-300 mx-auto flex flex-col items-center justify-center mt-1 space-y-5 pb-8 rounded-lg">
          <h2 className='font-bold text-2xl mt-4'> Connect With Mentors</h2>
          <img className='w-[350px] h-[250px] object-cover rounded-lg p-2' src="https://i.ibb.co.com/hJdtJhh1/still-life-graphic-design-day.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Banner;



