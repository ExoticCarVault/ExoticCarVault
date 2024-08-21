import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const HeroBtn = () => {
    return (
        <div className="text-[0.8rem] md:text-xl flex justify-center items-center gap-3 uppercase">
            <p>Descubra todos os veiculos</p>
            <Link to='/garage'>
            <button className=" p-2 border-2 rounded-full ms:text-md md:text-xl font-bold hover:border-[#b5a47e] hover:bg-[#ffffff30] transition-all ease-in duration-300"><FaChevronRight /></button>
            </Link>
        </div>
    );
};