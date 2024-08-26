import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../services/firebase';
import { PiEngineFill, PiSpeedometerFill } from "react-icons/pi";
import { IoPricetags } from "react-icons/io5";
import { FaBolt } from "react-icons/fa6";
import ItemCount from '../Button/ItemCount';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams(); // Obtém o ID da URL

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const itemDoc = doc(db, 'items', id); // Usa o ID para buscar o documento
                const itemSnapshot = await getDoc(itemDoc);

                if (itemSnapshot.exists()) {
                    setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
                } else {
                    console.log('Item não encontrado com ID:', id);
                }
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [id]);

    return (
        <div className="relative">
            {item ? (
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
                                <span className='p-1 border-2 rounded-full'><FaBolt /></span>
                            </p>
                            <p className='flex justify-center items-center gap-3'>
                                {item.engine}
                                <span className='p-1 border-2 rounded-full'><PiEngineFill /></span>
                            </p>
                            <p className='flex justify-center items-center gap-3'>
                                {item.acceleration}
                                <span className='p-1 border-2 rounded-full'><PiSpeedometerFill /></span>
                            </p>
                            <p className='flex justify-center items-center gap-3'>
                                R$ {item.price}
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