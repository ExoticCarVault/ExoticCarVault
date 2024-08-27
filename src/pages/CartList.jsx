import { useCart } from "../context/cartContext";

const CartList = () => {
    const { cart, clearCart, calculateTotal } = useCart();

    return (
        <div className="h-screen">
            <div className="text-3xl font-bold text-[#b5a47e] flex items-center justify-center p-5 mt-28 uppercase">
                <h1 className="underline underline-offset-8">Lista de Compras</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mt-10 p-10 mb-10">
                {cart.length === 0 ? (
                    <p className="text-2xl font-bold">Não há compras registradas.</p>
                ) : (
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-5 mb-10">
                        <ul className="flex flex-col items-center justify-center gap-5">
                            {cart.map((item) => (
                                <li key={item.id} className="flex flex-col md:flex-row w-full p-4 border border-gray-200 rounded-md">
                                    <img src={item.img} alt={item.name} className="w-[200px] h-32 object-cover p-1" />
                                    <h2 className="text-xl font-semibold p-3">{item.name}</h2>
                                    <p className="p-3">Modelo: {item.model}</p>
                                    <p className="p-3">Quantidade:<span className="p-2 bg-[#ffffff30] border-2 rounded-sm text-red-500 ml-2">{item.quantity}</span></p>
                                    <p className="p-3">Preço: R$ {item.price}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex flex-col  p-3 items-center justify-center">
                            <p className="text-md font-semibold">Total: R$ {calculateTotal().toFixed(2)}</p>
                            <button onClick={clearCart} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-xl">Limpar Compras</button>
                            <button className="p-3 border-2 rounded-xl hover:bg-[#ffffff30] hover:border-[#b5a47e] mt-5">Finalizar Compra</button>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default CartList;