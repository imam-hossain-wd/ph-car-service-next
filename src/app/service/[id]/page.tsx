
import ProductDetails from "@/components/ui/productDetails/ProductDetails";
import Review from "@/components/ui/review/Review";

const getServiceDetailsData = async ({ params }: any) => {
  const res = await fetch(`http://localhost:5000/api/v1/service/${params.id}`);
  const data = await res.json();
  return data;
};
const ServiceDetailsPage = async ({ params }: any) => {
  const data = await getServiceDetailsData({ params });

  return (
    <div className=" flex flex-col lg:flex-row justify-around">
      <div className="w-[50%]">
        <ProductDetails data={data?.data} />
      </div>
      <div className="w-50">
        <Review id={data?.data?.id} />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
