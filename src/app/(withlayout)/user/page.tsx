import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const UserPage = () => {
    const cartItems = useSelector((state:RootState) => state.cart.items);
    console.log(cartItems, 'cart items');
    return (
        <div>
            <h1>This is user page</h1>
        </div>
    );
};

export default UserPage;
