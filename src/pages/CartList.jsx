import { useCart } from "../context/cartContext";

const CartList = () => {
    const { cart } = useCart();

    return (
        <div className="flex flex-col justify-center items-center gap-5 mt-[200px]">
            <h1>Lista do Carrinho</h1>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul className="list-disc">
                    {cart.map((item) => (
                        <li key={item.id} className="flex flex-col gap-2 p-4 border border-gray-200 rounded-md">
                            <img src={item.img} alt={item.name} className="w-32 h-32 object-cover" />
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p>Modelo: {item.model}</p>
                            <p>Quantidade: {item.quantity}</p>
                            <p>Preço: {item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartList;