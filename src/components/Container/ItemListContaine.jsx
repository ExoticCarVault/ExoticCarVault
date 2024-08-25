import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import db from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const itemsCollection = collection(db, 'items');
            const snapshot = await getDocs(itemsCollection);
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
            <ItemList products={products} />
        </div>
    );
};