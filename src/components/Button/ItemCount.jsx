import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useCart } from "../../context/cartContext";

function ItemCount({ stock, initial, item }) {
    const { addToCart } = useCart();
    const [contador, setContador] = useState(initial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert('Não há mais carros no estoque!');
        }
    };

    const desincrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const handleAddToCart = () => {
       
        addToCart({ ...item, quantity: contador });
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2 md:gap-5 md:pt-10">
            <div className="flex justify-around items-center rounded-md md:gap-3 text-[0.6rem] md:text-xl">
                <button className="p-2 bg-[#b5a47e] hover:bg-[#c7b181] text-[0.3rem] rounded-full md:text-xl" onClick={desincrementar}>
                    <FaMinus />
                </button>
                <div className="text-white p-2">
                    {contador}
                </div>
                <button className="p-2 bg-[#b5a47e] hover:bg-[#c7b181] text-[0.3rem] rounded-full md:text-xl" onClick={incrementar}>
                    <FaPlus />
                </button>
            </div>
            <button 
                onClick={handleAddToCart} 
                className="flex justify-center items-center py-2 px-5  text-[0.3rem] bg-[#b5a47e] hover:bg-[#c7b181] rounded-md md:text-xl cursor-pointer"
            >
                <span>Comprar</span>
            </button>
        </div>
    );
}

export default ItemCount;