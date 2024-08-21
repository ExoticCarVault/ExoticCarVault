import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../Data'; 
import Logo from '../../assets/header/ecv-logo.png';
import { PiEngineFill, PiSpeedometerFill } from "react-icons/pi";
import { IoPricetags } from "react-icons/io5";
import ItemCount from '../Button/ItemCount';

export const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtém o id do parâmetro da URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fadeClass, setFadeClass] = useState('opacity-0 scale-95');

    useEffect(() => {
        setTimeout(() => {
            setFadeClass('opacity-100 scale-100');
        }, 100);

        const fetchItem = new Promise((resolve) => {
            setTimeout(() => {
                const foundItem = items.find(item => item.id === parseInt(id)); // Encontra o item com base no id
                resolve(foundItem);
            }, 2000); // Simula um tempo de carregamento
        });

        fetchItem.then((data) => {
            setFadeClass('opacity-0 scale-95'); // Inicia efeito de fade-out
            setTimeout(() => {
                setItem(data);
                setLoading(false); // Dados carregados
            }, 500); // Duração do efeito de fade-out
        });
    }, [id]);

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
                <div className='relative flex flex-row gap-5 mt-[5.5rem] md:mt-0 mb-10 shadow-xl'>
                    <img src={item.background} alt={item.name} className="w-full object-cover" />
                    <div className='absolute w-full h-full top-0 flex justify-between items-center bg-gradient-to-r from-[#000000e6] to-transparent px-[6%]'>
                        <div className='flex flex-col justify-between items-baseline'>
                            <h4 className='text-[0.6rem] text-[#b5a47e] p-1 md:text-xl'>{item.category}</h4>
                            <h1 className='text-2xl md:text-5xl'>{item.name}</h1>
                            <p><span className='text-red-500 text-sm font-bold md:text-2xl'>{item.model}</span></p>
                            <p className='text-[0.6rem]'>{item.year}</p>
                            <div className='mt-8'>
                                <ItemCount stock={item.stock} initial={1} item={item} />
                            </div>
                        </div>
                        <div className='flex flex-col text-[0.8rem] md:text-xl md:flex-col items-end gap-5'>
                            <p className='flex justify-center items-center gap-3'>
                                {item.power}
                                <span className='p-1 border-2 rounded-full'><PiEngineFill /></span>
                            </p>
                            <p className='flex justify-center items-center gap-3'>
                                {item.acceleration}
                                <span className='p-1 border-2 rounded-full'><PiSpeedometerFill /></span>
                            </p>
                            <p className='flex justify-center items-center gap-3'>
                                {item.price}
                                <span className='p-1 border-2 rounded-full'><IoPricetags /></span>
                            </p>
                        </div>
                    </div>    
                </div>
            ) : (
                <p className="text-center text-lg">Item não encontrado</p>
            )}
        </div>
    );
};