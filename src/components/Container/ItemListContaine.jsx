import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { items } from '../Data';
import Logo from '../../assets/header/ecv-logo.png';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fadeClass, setFadeClass] = useState('opacity-0 scale-95');

    useEffect(() => {
        // Iniciar o efeito de fade-in com escala
        setTimeout(() => {
            setFadeClass('opacity-100 scale-100');
        }, 100);

        const fetchProducts = new Promise((resolve) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });

        fetchProducts.then((data) => {
            setFadeClass('opacity-0 scale-95'); // Iniciar o efeito de fade-out
            setTimeout(() => {
                setProducts(data);
                setLoading(false);
            }, 500); // Duração do efeito de fade-out
        });
    }, []);

    return (
        <div className="relative p-10">
            {loading ? (
                <div className="fixed h-[100vh] inset-0 flex flex-col justify-center items-center bg-[#181818] z-50 overflow-auto">
                    <img 
                        className={`w-[130px] transition-opacity transition-transform duration-1000 ease-in-out ${fadeClass}`} 
                        src={Logo} 
                        alt="Logo" 
                    />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};