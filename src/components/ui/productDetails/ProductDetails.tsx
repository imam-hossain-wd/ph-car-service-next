"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slice/cartSlice";
import { Button } from "antd";
import Image from "next/image";

const ProductDetails = (data: any) => {
  const { id, name, imageUrl, availability, price, description } = data?.data;
  const cartItems = useAppSelector((state) => state.cart.items);
  console.log(cartItems, 'cartitems,,,,');
  const dispatch = useAppDispatch();
  const HandleAddToCart = (productDetails: any):any => {
    dispatch(addToCart(productDetails))
  };
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <Image src={imageUrl} alt="product" width={460} height={300} />
        <h1 className="text-xl font-semibold text-black ">{name}</h1>
      </div>
      <div>
        <p>Rating: {price}</p>
        <p className="text-sm">
          Availability: {availability ? "In stock" : "Out of stock"}
        </p>
        <p className="text-sm">Price: {description}</p>
        <div className="flex justify-center items-center my-3">
          <Button
            onClick={() => HandleAddToCart(data?.data)}
            className="bg-sky-400 hover:text-white border-0 text-bold mr-5"
          >
            Add to cart
          </Button>
          <Button className="bg-sky-400 hover:text-white border-0 text-bold">
            Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
