import React from 'react';
import { Item } from '../Container/Item';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ItemGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <div className=' overflow-hidden'>
                    <Item key={product.id} product={product}/>
                </div>
                
            ))}
        </div>
    );
};