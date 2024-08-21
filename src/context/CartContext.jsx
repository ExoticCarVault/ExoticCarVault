import { useState,  createContext } from "react";

const CartContext = createContext(undefined)

                    //props
export  function CartProvider (children) {

    const [cart, setCart] = useState([])

    //função para adicionar ao carrinho
    function addToCart(product) {
        if (isInCart(product.id)) {
            setCart(prevCart =>{
                const updatedCart = prevCart.map(item => {
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                });
                return updatedCart
            })

            console.log(cart);

        } else {
            setCart([...cart, product])  
        }
    }

    //função para checar se item no cart

    function isInCart(productId) {
        return cart.some(item => item.id === productId)
        
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider >
    )
}



