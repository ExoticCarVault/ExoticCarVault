import { Link } from "react-router-dom";
import bgImg from "../../assets/header/bglogin.jpg"

export const FormsLogin = () => {
    return(
        <div className="w-full h-screen">
            <img src={bgImg} alt="background" />
            <div>
            <Link to="/register">
            <button className="p-3 border-2 border-white rounded-lg hover:border-yellow-200 hover:bg-[#ffffff30] transition-all ease-in duration-300">Cadastre-se aqui</button>
            </Link>
            </div>
            
        </div>
        
    );
};