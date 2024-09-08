import React from 'react';
import { Item } from './Item';

export const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};
