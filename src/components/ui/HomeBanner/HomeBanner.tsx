"use client";
import Link from "next/link";
import {
  WhatsAppOutlined,
  PhoneFilled,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import HomeCarousel from "../carousel/Carousel";

const HomeBanner = () => {
  const phoneNumber = "+8801624243747";

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <HomeCarousel />
        <Button
        onClick={handleScrollToTop}
          type="primary"
          className="animated z-10 fixed right-5 bottom-24 transition rounded-full duration-200 text-[16px] flex justify-center items-center animate-bounce w-8 h-8 bg-[#0C1A2D] "
        >
          <ArrowUpOutlined />
        </Button>
      <Link href={`tel:${phoneNumber}`}>
        <Button
          type="primary"
          className="flex hover:text-white items-center w-36 hover:bg-rose-600 z-10 fixed left-5 bottom-5 transition rounded-full duration-200 text-[15px] h-9 bg-rose-500 font-bold"
        >
          <span className="text-lg mr-2 ml-2">
            {" "}
            <PhoneFilled />
          </span>{" "}
          Call Now
        </Button>
      </Link>

      <Link href={`https://wa.me/${phoneNumber}`}>
        <Button
          type="primary"
          className="flex hover:text-white items-center justify-center w-36 hover:bg-green-600 z-10 fixed right-5 bottom-5 transition rounded-full duration-200 text-[15px] h-9 bg-green-500 font-bold"
        >
          <span className="text-xl mr-2 ml-2">
            {" "}
            <WhatsAppOutlined />
          </span>{" "}
          Whatsapp
        </Button>
      </Link>
    </div>
  );
};

export default HomeBanner;
