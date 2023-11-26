import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const HomeCarousel = () => (
  <div className='w-screen  lg:w-[650px] mb-5 lg:mb-0'>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
      <Image className='w-full h-full rounded' src='https://i.ibb.co/nDc28mg/banner.png' width={500} height={400}  alt='home banner' /> 
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image className='w-full h-full rounded' src='https://i.ibb.co/FD4k02g/car-engine-diagnostic.png' width={500} height={400}  alt='home banner' /> 
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <Image className='w-full h-full rounded' src='https://i.ibb.co/CMhgcxS/car-washing.png' width={500} height={400}  alt='home banner' /> 
      </h3>
    </div>
  </Carousel>
  </div>
);

export default HomeCarousel;
