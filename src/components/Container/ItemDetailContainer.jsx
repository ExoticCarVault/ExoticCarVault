import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../Data'; 
import Logo from '../../assets/header/ecv-logo.png';
import ItemCount from '../Button/ItemCount';
import { useCart } from '../../context/CartContext';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fadeClass, setFadeClass] = useState('opacity-0 scale-95');
    const {addToCart} = useCart();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        // Start the fade-in effect with scale
        setTimeout(() => {
            setFadeClass('opacity-100 scale-100');
        }, 100);

        const fetchItem = new Promise((resolve) => {
            setTimeout(() => {
                const foundItem = items.find(item => item.id === parseInt(id));
                resolve(foundItem);
            }, 2000);
        });

        fetchItem.then((data) => {
            setFadeClass('opacity-0 scale-95'); // Start fade-out effect
            setTimeout(() => {
                setItem(data);
                setLoading(false);
            }, 500); // Duration of fade-out effect
        });
    }, [id]);

    function submit(){
        console.log("submit")
        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="relative">
            {loading ? (
                <div className="fixed h-[100vh] inset-0 flex flex-col justify-center items-center bg-[#181818] z-50 overflow-auto">
                    <img 
                        className={`w-[130px] transition-opacity duration-1000 ease-in-out ${fadeClass}`} 
                        src={Logo} 
                        alt="Logo" 
                    />
                </div>
            ) : item ? (
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
                    <img src={item.img} alt={item.name} className="w-full mb-4" />
                    <p><strong>Modelo:</strong> {item.model}</p>
                    <p><strong>Potência:</strong> {item.power}</p>
                    <p><strong>Preço:</strong> {item.price}</p>
                    <p><strong>Motor:</strong> {item.engine}</p>
                    <p><strong>Aceleração:</strong> {item.acceleration}</p>
                    <p><strong>Estoque:</strong> {item.stock}</p>
                    <ItemCount onClick={submit} stock={item.stock} initial={1} />
                
                </div>
                
            ) : (
                <p className="text-center text-lg">Item não encontrado</p>
            )}
        </div>
    );
};