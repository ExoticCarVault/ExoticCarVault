import { FaCartShopping } from "react-icons/fa6";
export const CartWidget = () => {
    return (
        <div className="flex items-center">
        < FaCartShopping className='text-3xl text-[#b5a47e]' /> <div className="text-[0.7rem] px-1 rounded-full bg-red-500 ml-[-5px] mb-6">0</div>
        </div>
    )
}