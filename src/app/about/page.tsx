import Image from "next/image";

const AboutPage = () => {
    return (
        <div id="about" className='container mx-auto my-10'>
            
        <div className='flex justify-center'>
        <h1 className='text-center w-60 p-1 bg-gray-200 font-bold text-xl mb-5'>About us</h1>
        </div>
         <div className='flex flex-col items-center  lg:flex-row justify-between'>
              <div className='relative text-white drop-shadow-2xl bg-white p-2 rounded z-9'>
                  <h1 className='absolute font-bold top-0 right-3'><span className='text-6xl'>10</span> <span className='text-3xl'>Years <br/> Experience</span> </h1>
                  <Image className='h-[400px] w-[700px]' src="https://i.ibb.co/LPyv1Vd/engine-oil-changing.png" width={500} height={700} alt="car repair and servicing" />
              </div>
              <div className='mt-10 lg:mt-0 ml-10'>
                  <h1 className='text-4xl font-bold mb-5'><span className='text-red-700'>CarDev</span> Is The Best Place For <br/> Your Auto Car</h1>
                  <p>Tempor erat elitr rebum at clita. Diam dolor diam <br/> ipsum sit. Aliqu diam amet diam et eos. Clita <br/> erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

                  <div className='flex items-center  mt-5 '>
                      <div className='bg-gray-200 w-12 h-12 flex justify-center items-center mr-4'>
                          <p className='font-bold text-lg'>01</p>
                      </div>
                      <div>
                          <h3 className='font-bold text-lg'>Professional & Expert</h3>
                          <p>Diam dolor diam ipsum sit amet diam et eos</p>
                      </div>
                  </div>
                  <div className='flex items-center  mt-5'>
                      <div className='bg-gray-200 w-12 h-12 flex justify-center items-center mr-4'>
                          <p className='font-bold text-lg'>02</p>
                      </div>
                      <div>
                          <h3 className='font-bold text-lg '>Quality Servicing Center</h3>
                          <p>Diam dolor diam ipsum sit amet diam et eos</p>
                      </div>
                  </div>
                  <div className='flex items-center  mt-5'>
                      <div className='bg-gray-200 w-12 h-12 flex justify-center items-center mr-4'>
                          <p className='font-bold text-lg'>03</p>
                      </div>
                      <div>
                          <h3 className='font-bold text-lg '>Awards Winning Workers</h3>
                          <p>Diam dolor diam ipsum sit amet diam et eos</p>
                      </div>
                  </div>
              </div>
         </div>
      </div>
    );
};

export default AboutPage;