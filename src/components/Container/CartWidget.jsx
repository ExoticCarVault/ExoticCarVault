import { FaCartShopping } from "react-icons/fa6";
export const CartWidget = () => {
    return (
        <div className="flex items-center">
        < FaCartShopping className='text-3xl text-[#b5a47e]' /> <div className="text-red-500 rounded-full ml-[-2px] mt-2">0</div>
        </div>
    )
}