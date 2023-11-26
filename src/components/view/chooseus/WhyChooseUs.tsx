import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div>


     <div>
        <Image className="border-2 border-red-500 rounded-md" src="https://i.ibb.co/8zSYkjM/who-we-are.png" width={180} height={150} alt="service"/>
        <Image src="https://i.ibb.co/b1BydHY/provide.png" width={180} height={150} alt="service"/>
        <Image src="https://i.ibb.co/mcf7X9p/our-history.png" width={180} height={150} alt="service"/>
        <Image src="https://i.ibb.co/f2cRyF6/save-money.png" width={180} height={150} alt="service"/>
        <Image src="https://i.ibb.co/SKLTxjj/best-services.png" width={180} height={150} alt="service"/>
        <Image src="https://i.ibb.co/5Gxtz1w/our-store.png" width={180} height={150} alt="service"/>
     </div>
    </div>
  );
};

export default WhyChooseUs;
