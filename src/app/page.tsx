import HomePage from "@/components/ui/Home/HomePage"
import HomeBanner from "@/components/ui/HomeBanner/HomeBanner"
import SearchFiltering from "@/components/ui/searchFiltering/searchFiltering"

export default async function Home () {
  return (
    <div className="mt-5 w-[90%] mx-auto">
      <HomePage />
      <HomeBanner /> 
    </div>
  )
}
