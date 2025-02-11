import { Link } from "react-router-dom";
import bgImg from "../../assets/header/bglogin.jpg"
import { FaUser, FaKey } from "react-icons/fa6";
import { useState } from "react";

export const FormsLogin = () => {
const[username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username, password);
    console.log("envio");
;}

    return(
        <div className='relative flex justify-center items-center  md:mt-0 mb-10 shadow-xl'>
            <img src={bgImg} alt="background image" className="w-full h-screen object-cover" />
            <div className="absolute w-[300px] h-[400px] bg-[#ffffff30] flex justify-center items-center mt-[7rem]">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center pt-3 pb-3 text-black">
                <input type="email" placeholder="E-mail" required
                onChange={(e) => setUsername(e.target.value)} 
                className="p-2 rounded-xl w-[250px]"
                />
                <FaUser className="text-[#b5a47e] ml-[-30px]"/>
                </div>
                <div className="flex justify-center items-center text-black">
                <input type="password" placeholder="Senha" required
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 rounded-xl w-[250px]"
                />
                <FaKey className="text-[#b5a47e] ml-[-30px]"/>
                </div>
                <div className="p-3">
                    <label className="flex gap-2">
                        <input type="checkbox" />
                        <p>Lembre de mim </p>
                    </label>
                </div>
                <button className="p-2 border-2 rounded-lg">Entrar</button>
                <div className="p-3 text-sm">
                <p>Se ainda não tem cadastro <Link to="/register" className="text-md font-bold text-[#b5a47e] ">clique aqui</Link></p>
                </div>
            </form>
            </div>
        </div>
    );
};