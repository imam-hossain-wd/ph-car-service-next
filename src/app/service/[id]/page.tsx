import ProductDetails from "@/components/ui/productDetails/ProductDetails";
import Review from "@/components/ui/review/Review";

const getServiceDetailsData = async ({ params }: any) => {
  const res = await fetch(
    `https://car-service-auth.vercel.app/api/v1/service/${params.id}`
  );
  const data = await res.json();
  return data;
};

const ServiceDetailsPage = async ({ params }: any) => {
  const data = await getServiceDetailsData({ params });
  return (
    <div className=" flex flex-col  ml-8 lg:ml-0 lg:flex-row justify-around mt-5">
      <div className="w-full lg:w-[50%]">
        <ProductDetails data={data?.data} />
      </div>
      <div className="w-full lg:w-[40%]">
        <Review id={data?.data?.id} />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
