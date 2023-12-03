
import BookingDrawer from "../BookingDrawer/BookingDrawer";

const CarouselContent = () => {
  return (
    <div>
      <h3 className="text-xl lg:text-center -ml-5 lg:text-3xl  lg:-mt-10 font-bold">
        Your On-Demand Car Savior <br />{" "}
        <span className=""> Anywhere, Anytime!</span>
      </h3>
      <p className="text-lg p-2  text-center font-semi-bold font-semibold">
        Quality car maintenance and repairs
      </p>
        <div className="-mt-10">
        <BookingDrawer />
        </div>
    </div>
  );
};

export default CarouselContent;
