import React from 'react';

export const Item = ({ product }) => {
    return (
        <div className='w-3/4 m-auto'>
            <div className='mt-20 shadow-xl'>
                <div className='bg-white text-black h-[450px] rounded-xl'>
                    <div className='rounded-t-2xl items-center'>
                        <img src={product.img} alt="logo do carro" className='rounded-t-lg w-full h-[200px] md:object-cover object-center' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1 md:gap-4 p-2'>
                        <p className='text-md font-bold text-[#b5a47e]'>{product.category}</p>
                        <p className='text-xl font-bold'>{product.name}</p>
                        <p className='text-lg font-bold text-red-500'>{product.model}</p>
                        <button className='text-xl text-white font-semibold px-5 py-1 bg-[#b5a47e] rounded-xl mt-7 mb-6 md:mt-4 md:mb-2'>Detalhes</button>
                    </div>
                    <div className='flex text-lg items-center justify-center p-2 md:p-1 border-t-2'>
                        <p>Quantidade em estoque: {product.stock}</p>
                    </div>
                </div>

            </div>

        </div>
    );
};