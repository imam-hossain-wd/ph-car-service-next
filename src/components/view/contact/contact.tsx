"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const contactHandler: SubmitHandler<FormValues> = (data) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const subject = data.subject;
    const message = data.message;

    const number = "+971568703512";
    const text =
      "Name: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Subject: " +
      subject +
      "\n" +
      "Message: " +
      message +
      "\n";

    const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    } else {
      console.error("Unable to open a new window");
    }

    reset();
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
          <form
            onSubmit={handleSubmit(contactHandler)}
            className="lg:ml-4 whiteInput"
          >
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="border border-gray-400 focus:outline-none w-full lg:w-96 p-2 mt-3"
              placeholder="Enter Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}

            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              className="border border-gray-400 focus:outline-none w-full lg:w-96 mt-3 p-2"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}

            <input
              type="tel"
              {...register("phone", { required: "Phone is required" })}
              className="border border-gray-400 focus:outline-none w-full lg:w-96 mt-3 p-2"
              placeholder="Phone"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}

            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="border border-gray-400 focus:outline-none w-full lg:w-96 mt-3 p-2"
              placeholder="Subject"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}

            <textarea
              {...register("message", { required: "Message is required" })}
              className="mt-3 textarea textarea-bordered border border-gray-400 w-full lg:w-96 focus:outline-none h-28"
              placeholder="Message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 border-0 py-3 rounded font-semibold text-white px-10 transition duration-500 w-48 mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
