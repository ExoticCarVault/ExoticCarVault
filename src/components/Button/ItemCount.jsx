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
        // Adiciona o item completo ao carrinho com a quantidade selecionada
        addToCart({ ...item, quantity: contador });
    };

    return (
        <div className="flex items-center justify-center md:pt-10">
            <div className="flex justify-around items-center w-[80px] h-6 rounded-md p-1 text-[0.8rem] md:h-10 md:text-xl md:w-[150px]">
                <button className="p-2 bg-[#b5a47e] hover:bg-[#c7b181] text-[0.6rem] rounded-full md:text-xl" onClick={desincrementar}>
                    <FaMinus />
                </button>
                <div className="text-white p-2">
                    {contador}
                </div>
                <button className="p-2 bg-[#b5a47e] hover:bg-[#c7b181] text-[0.6rem] rounded-full md:text-xl" onClick={incrementar}>
                    <FaPlus />
                </button>
            </div>
            <button 
                onClick={handleAddToCart} 
                className="flex justify-center items-center w-[60px] h-6 text-[0.6rem] bg-[#b5a47e] hover:bg-[#c7b181] rounded-md p-1 md:h-10 md:text-xl md:w-[150px] cursor-pointer"
            >
                <span>Comprar</span>
            </button>
        </div>
    );
}

export default ItemCount;