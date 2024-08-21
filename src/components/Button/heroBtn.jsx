import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const HeroBtn = () => {
    return (
        <div className="flex justify-center items-center gap-5 uppercase">
            <p>Descubra todos os veiculos</p>
            <Link to='/garage'>
            <button className=" p-3 border-2 rounded-full text-xl font-bold hover:border-[#b5a47e] transition-all ease-in duration-300"><FaChevronRight /></button>
            </Link>
        </div>
    );
};