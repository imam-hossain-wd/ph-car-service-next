import AboutPage from "../about/About";

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      <div className="text-center my-5">
        <h3 className="uppercase text-xl mb-3 bg-gray-200 w-full lg:w-96 p-2 rounded mx-auto">
          Why choose us
        </h3>
        <p className="w-[51%] font-semibold text-lg font-medium mx-auto">
          We Provide One of the best premium Quality service. Our expertise
          technician can easily fix all kind of problems
        </p>
      </div>
      <div className="w-full">
      <AboutPage />
      </div>
    </div>
  );
};

export default WhyChooseUs;
