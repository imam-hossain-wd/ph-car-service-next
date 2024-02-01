import HomePage from "@/components/ui/Home/HomePage";
import HomeBanner from "@/components/ui/HomeBanner/HomeBanner";
import BookService from "@/components/view/BookService/BookService";
import WhyChooseUs from "@/components/view/chooseus/WhyChooseUs";
import OurTeam from "@/components/view/ourteam/OurTeam";

export default async function Home() {

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
  )

 

}
