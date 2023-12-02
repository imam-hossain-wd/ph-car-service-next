import { Carousel} from 'antd';
import Image from 'next/image';
import CarouselContent from './CarouselContent';

const contentStyle: React.CSSProperties = {
  height: '450px',
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  position: 'relative',
};

const textContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const HomeCarousel = () => (

  <div className='-mt-16 mb-5 lg:mb-0 bg-gradient-to-tr from-black to-gray-900'>
    <Carousel autoplay >
      <div className='bg-gradient-to-tr from-black to-state-900'>
        <h3 style={contentStyle}>
          <Image className='w-full h-full rounded bg-gradient-to-tr from-black to-gray-900' src='https://i.ibb.co/nDc28mg/banner.png' width={500} height={800} alt='home banner' />
          <div style={textContainerStyle}>

            <CarouselContent />
 
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image className=' w-full h-full rounded' src='https://i.ibb.co/FD4k02g/car-engine-diagnostic.png' width={500} height={800} alt='home banner' />
          <div style={textContainerStyle}>
          <CarouselContent />
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <Image className='w-full h-full rounded' src='https://i.ibb.co/CMhgcxS/car-washing.png' width={500} height={800} alt='home banner' />
          <div style={textContainerStyle}>
          <CarouselContent />
          </div>
        </h3>
      </div>
    </Carousel>
  </div>
);

export default HomeCarousel;



