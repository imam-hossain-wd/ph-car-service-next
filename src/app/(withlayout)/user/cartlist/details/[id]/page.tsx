"use client"

import { useAppSelector } from "@/redux/hooks";
import { selectCartItemById } from "@/redux/slice/cartSlice";
import Image from "next/image";

const CartItemDetailsPage = ({params}:any) => {

    const item = useAppSelector((state) => selectCartItemById(state, params.id));
    const {description,imageUrl,availability,name,price} = item

    return (
        <div>
            <div>
                <Image src={imageUrl} width={500} height={300} alt={name} />
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <p>Availability: {availability}</p>
            </div>
        </div>
    );
};

export default CartItemDetailsPage;