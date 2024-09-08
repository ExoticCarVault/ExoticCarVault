import React, { useState, useEffect } from 'react';
import { ItemGrid } from './ExclusiveItems'; 
import db from '../../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export const Exclusive = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const q = query(collection(db, 'items'), where("stock", "<", 3));
            const snapshot = await getDocs(q);
            const fetchedProducts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setProducts(fetchedProducts); 
        };

        fetchProducts();
    }, []);


    return (
        <div className=" p-10">
            <div className='text-center text-3xl font-bold uppercase underline underline-offset-8 text-[#b5a47e] mb-10'>
                <h1>Últimas uinidades</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <ItemGrid products={products} />
            </div>
            <div className='flex justify-center items-center p-10 mt-5'>
                <Link to={"/garage"}>
                <button className='p-3 border-2 rounded-lg text-lg font-semibold hover:border-[#b5a47e] hover:bg-[#ffffff30]'>Garagem completa</button>
                </Link>
            </div>
        </div>
    );
};