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

    function clearCart() {
        setCart([]); // Limpa todos os itens do carrinho
    }

    // Função para calcular o total
    const parseNumber = (value) => {
        // Verifica se o valor é uma string, caso contrário, converte para string
        const str = typeof value === 'string' ? value : value.toString();
        
        // Remove os pontos e substitui a vírgula por um ponto
        return parseFloat(str.replace(/\./g, '').replace(',', '.'));
    };
    
    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const itemTotal = parseNumber(item.price) * parseNumber(item.quantity);
            return total + itemTotal;
        }, 0);
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, calculateTotal }}>
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
};