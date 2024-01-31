"use client";
import Form from "@/components/Forms/Form";
import BookingServiceForm from "../BookService/BookingServiceForm";


const Contact = () => {
  const onSubmit = (data: any) => {

    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const address = data.address;
    const brand = data.brand;
    const service_name = data.service_name;
    const reservation_date = data.reservation_date;
    const service_description = data.service_description;

    const number = "+971568703512";
    const message =
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Address: " +
      address +
      "\n" +
      "Brand: " +
      brand +
      "\n" +
      "Service Name: " +
      service_name +
      "\n" +
      "Reservation Date: " +
      reservation_date +
      "\n" +
      "Service Description: " +
      service_description;

    const url =
      "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
    // window.open(url, "_blank").focus();;
  };

  return (
    <div id="contact" className="my-10">
      <style jsx>
        {`
          .whiteInput input,
          select,
          textarea {
            background: white;
          }
        `}
      </style>
      <div className=" flex justify-center">
        <h1 className="text-center w-60 p-1 font-bold text-2xl bg-gray-200 ">
          Contact us
        </h1>
      </div>

      <div className="flex flex-col p-5 m-5 justify-around lg:flex-row">
        <div className="google-map-code">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width={600}
            height={450}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden={false}
            tabIndex={0}
          ></iframe>
        </div>

        <div className="w-full  lg:w-[500px] h-full bg-white rounded p-10 border-2 drop-shadow-2xl mt-7 lg:mt-0 ">
          <div>
            <h1 className="text-center font-bold text-xl -mt-3 -ml-3 text-orange-500 uppercase">
              Get In Touch
            </h1>
          </div>
          <Form submitHandler={onSubmit}>
            <BookingServiceForm />
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
