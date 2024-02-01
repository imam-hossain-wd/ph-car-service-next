"use client"
import HomePage from "@/components/ui/Home/HomePage";
import HomeBanner from "@/components/ui/HomeBanner/HomeBanner";
import OurTeam from "../../ourteam/OurTeam";
import BookService from "../../BookService/BookService";
import WhyChooseUs from "../../chooseus/WhyChooseUs";
import { useAppDispatch } from "@/redux/hooks";
import { getFromLocalStorage } from "@/utils/localStorage";
import { setAccessToken } from "@/redux/slice/authSlice";
import { authKey } from "@/constants/storageKey";


const Mainhome = () => {
    const token = getFromLocalStorage(authKey)
  const dispatch = useAppDispatch()
  dispatch(setAccessToken(token as string));

    return (
        <div>
            <HomeBanner />
    <div className="w-[95%] mx-auto">
      <HomePage />
      <OurTeam />
      <BookService />
      <WhyChooseUs />
    </div>
        </div>
    );
};

export default Mainhome;