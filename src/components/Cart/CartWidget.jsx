import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../context/cartContext";

export const CartWidget = () => {
    const { cart } = useCart();

    const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
    return (
        <div className="flex items-center">
        < FaCartShopping className='text-3xl text-[#b5a47e]' /> 
        {totalQuantity > 0 && (
        <div className="text-[0.7rem] px-1 rounded-full bg-red-500 ml-[-5px] mb-6">{totalQuantity}</div>
        )}
        </div>
    )
}