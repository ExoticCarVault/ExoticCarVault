import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, item];
            }
        });
    }

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
    }
    return context;
}