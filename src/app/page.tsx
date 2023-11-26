/* eslint-disable react/no-unescaped-entities */
import HomePage from "@/components/ui/Home/HomePage";
import HomeBanner from "@/components/ui/HomeBanner/HomeBanner";
import BookService from "@/components/view/BookService/BookService";
import AboutPage from "@/components/view/about/About";
import OurTeam from "@/components/view/ourteam/OurTeam";

export default async function Home() {
  return (
    <div>
      <HomeBanner />
      <HomePage />
      <BookService />
      <OurTeam />
      <div>
        <div className="text-center my-5">
          <h3 className="uppercase text-xl mb-3 bg-gray-200 w-96 p-2 rounded mx-auto">
             Why choose us 
          </h3>
          <p className="w-[51%] font-semibold text-lg font-medium mx-auto">
          We Provide One of the best premium Quality service. Our expertise technician can easily fix all kind of problems
          </p>
        </div>
        <AboutPage />
      </div>
    </div>
  );
}
