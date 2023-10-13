// import { FaLongArrowAltUp, FaPhone, FaRegArrowAltCircleUp, FaWhatsapp } from 'react-icons/fa';
"use client"
import Link from 'next/link'
import Image from 'next/image';
import { WhatsAppOutlined , PhoneOutlined} from "@ant-design/icons";
import { Button } from 'antd';
const HomeBanner = () => {

    const phoneNumber = '+971568703512';
    
    return (
        <div id="home" className='flex w-full flex-col-reverse lg:flex-row justify-around items-center mt-10'>
            <div className='w-full lg:w-[38%]'>
                <h1 className='text-3xl text-center lg:text-4xl  -mt-5 font-bold'>Your On-Demand Car Savior <br/> <span className=' text-red-600'> Anywhere, Anytime!</span></h1>
                <p className='text-lg mt-4 text-center bg-gray-300 font-semi-bold font-semibold'>Quality car maintenance and repairs</p>

                <div className='flex flex-col lg:flex-row items-center justify-center mt-5 '>
                    <Link href={`tel:${phoneNumber}`} className="no-underline">
                    <Button className='flex justify-center items-center bg-red-500 hover:bg-red-600 py-5 px-8 mr-5' type="primary"><span className='text-xl  mr-2 '> <PhoneOutlined /></span> Call Now</Button>
                    </Link>
                    <Link href={`tel:${phoneNumber}`} className="no-underline">
                    <Button className='flex justify-center items-center bg-green-500 hover:bg-green-600 border-0 py-5 px-8' type="primary"><span className='text-xl mr-2'> <WhatsAppOutlined /> </span> Whatsapp</Button>
                    </Link>
                   
                </div>

                </div>
            <div>
                <Image className='w-[100%] h-72 lg:h-96 mb-10 lg:mb-0' src="https://i.ibb.co/nDc28mg/banner.png" width={500} height={500} alt="Car Repair and servicing"/>
            </div>
        </div>




    );
};

export default HomeBanner;