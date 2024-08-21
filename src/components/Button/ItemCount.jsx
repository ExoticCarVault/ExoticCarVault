import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

    function ItemCount ({stock, initial, onAdd}) {

    const [contador, setContador] = useState(initial);
    



    const incrementar = () => {
        if(contador < stock) {
        setContador(contador + 1 );
        }else {
            alert('Não há mais carros no estoque!')
        }
    }
    const desincrementar = () => {
        if(contador > 0) {
        setContador(contador - 1 );
        }
    }

    return(
        <div className="flex items-center justify-center gap-4 md:flex-col">
            <div className="flex justify-between items-center w-[80px] h-6 rounded-md p-1 text-[0.8rem] md:h-10 md:text-xl md:w-[150px]">
                <div>
                <button className="p-2 bg-[#b5a47e] hover:bg-[#c7b181] text-sm rounded-full md:text-xl" onClick={desincrementar} ><FaMinus /></button>
                </div>
                <div className="text-white p-2">
                    {contador}
                </div>
                <div>
                <button className=" p-2 bg-[#b5a47e] hover:bg-[#c7b181] text-sm rounded-full md:text-xl" onClick={incrementar} ><FaPlus /></button>
                </div>
            </div>
            <Link to>
            <button className="flex justify-center items-center w-[80px] h-6 text-[0.8rem] bg-[#b5a47e] hover:bg-[#c7b181] rounded-md p-1 md:h-10 md:text-xl md:w-[150px] cursor-pointer">
                <spam>Adicionar ao carrinho</spam>
            </button>
            </Link>
        </div>
        
    )
}
export default ItemCount;