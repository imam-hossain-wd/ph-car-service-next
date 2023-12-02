import { PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

const CarouselContent = () => {
    const phoneNumber = "+8801624243747";
    return (
        <div>
               <h3 className="text-xl lg:text-center -ml-5 lg:text-3xl  lg:-mt-10 font-bold">
          Your On-Demand Car Savior <br />{" "}
          <span className=""> Anywhere, Anytime!</span>
        </h3>
        <p className="text-lg p-2  text-center font-semi-bold font-semibold">
          Quality car maintenance and repairs
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-5 ">
          <Link href={`tel:${phoneNumber}`} className="no-underline">
            <Button
              className="flex justify-center items-center bg-[#FC5185] hover:bg-[#f93e76] h-9 font-semibold text-[17px] px-5 lg:mr-5"
         
              type="primary"
            >
              <span className="text-xl  mr-2 ">
                {" "}
                <PhoneOutlined />
              </span>{" "}
              Call Now
            </Button>
          </Link>
          <Link href={`tel:${phoneNumber}`} className="no-underline">
            <Button
              className="mt-3 lg:mt-0 flex justify-center items-center bg-green-500 hover:bg-green-600 h-9 text-white font-semibold text-[17px] px-5 border-0 "
              type="primary"
              
            >
              <span className="text-xl mr-2">
                {" "}
                <WhatsAppOutlined />{" "}
              </span>{" "}
              Whatsapp
            </Button>
          </Link>
        </div>
        </div>
    );
};

export default CarouselContent;