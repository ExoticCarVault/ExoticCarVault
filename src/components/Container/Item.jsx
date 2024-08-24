import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
    return (
        <div className='m-auto'>
            <div>
                <div className=' bg-transparent w-[300px] text-white shadow-xl'>
                    <div className=' rounded-t-3xl items-center pt-6'>
                        <img src={product.img} alt="logo do carro" className='relative rounded-t-2xl w-full h-[200px] md:object-cover object-center mb-[-.75rem]' />
                    </div>
                    <div className='relative flex flex-col justify-center items-center gap-1 md:gap-4 p-2 bg-[#464646] rounded-t-2xl h-[200px]'>
                        <p className='text-md font-bold text-[#b5a47e]'>{product.category}</p>
                        <p className='text-lg text-white font-bold'>{product.name} {product.model}</p>
                        <Link to={`/item/${product.id}`}>
                            <button className='text-md text-white border-2 font-semibold px-5 py-2 rounded-2xl hover:border-[#b5a47e] hover:bg-[#ffffff30] mt-10 md:mt-4 md:mb-2 transition-all ease-in duration-300'>
                                Detalhes
                            </button>
                        </Link>
                    </div>
                    <div className='flex text-md text-white items-center justify-center p-3 md:p-3 border-t-2 border-[#b5a47e] bg-[#464646] rounded-b-2xl'>
                        <p>Quantidade em estoque: {product.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};