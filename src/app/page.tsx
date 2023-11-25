import Footer from "@/components/ui/Footer/Footer"
import HomePage from "@/components/ui/Home/HomePage"
import HomeBanner from "@/components/ui/HomeBanner/HomeBanner"

export default async function Home () {
  return (
    <div>
      <HomeBanner /> 
      <HomePage />
    </div>
  )
}
