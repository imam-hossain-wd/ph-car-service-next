import AboutPage from "@/components/view/about/About";

const About = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center w-60 p-1 bg-gray-200 font-bold text-xl mb-5">
          About us
        </h1>
      </div>
      <AboutPage />
    </div>
  );
};

export default About;
