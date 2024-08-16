import { useState, useEffect } from 'react';
import { FaX, FaRegCircleUser, FaBars, FaScrewdriverWrench, FaWarehouse } from "react-icons/fa6";
import logo from '../../assets/header/ecv-logo.png';

import { CartWidget } from '../Container/CartWidget';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNavbarScrolled(true);
            } else {
                setNavbarScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`w-full fixed z-50 shadow-xl ${navbarScrolled ? 'bg-[#011724]' : 'bg-transparent'}  text-white`}>
                <header className='flex flex-col place-content-around p-3'>
                    <nav className='flex w-full place-content-around'>
                        <button className='md:hidden' type="button" onClick={toggleMenu}>
                            <FaBars className='text-4xl text-[#b5a47e]' />
                        </button>

                        <a href="/"><img src={logo} alt="Logo do site" className='w-[4rem]' /></a>

                        <div className='hidden md:flex w-50 text-center items-center'>
                            <ul className='flex'>
                                <a href="/garage" className='hover:bg-[#ffffff30] py-1 px-2 rounded-md'>
                                    <li className='text-base'>Garagem completa</li>
                                </a>
                                <span className='mr-3 ml-3'>-</span>
                                <a href="/services" className='hover:bg-[#ffffff30] py-1 px-2 rounded-md'>
                                    <li className='text-base'>Serviços</li>
                                </a>
                            </ul>
                        </div>

                        <div className='flex'>
                            <button className='flex items-center md:mr-7' type="button">
                                <FaRegCircleUser className='text-4xl mr-3 text-[#b5a47e]' />
                                <p className='hidden md:flex items-center'>Login</p>
                            </button>
                            <button className='hidden md:flex items-center' type="button">
                                <div className='mr-3'><CartWidget /></div>
                                <p className='items-center'>Carrinho</p>
                            </button>
                        </div>
                    </nav>

                    {menuOpen && (
                        <ul className={`w-[30%] h-screen rounded-tr-3xl rounded-ee-3xl bg-[#010E16] absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden`}>
                            <div className='flex place-content-start mt-5 ml-4'>
                                <button className='md:hidden text-[#b5a47e] text-4xl mt-2 m-auto' type="button" onClick={toggleMenu}>
                                    <FaX />
                                </button>
                            </div>
                            <div className='flex text-left items-center justify-evenly flex-col gap-10 pb-5 bg-[#010E16] h-screen rounded-br-3xl'>
                                <a href="#" className='flex flex-col text-center items-center'>
                                    <FaScrewdriverWrench className='text-3xl text-[#b5a47e] mb-3'/>
                                    <li className='text-sm'>Serviços</li>
                                </a>
                                <a href="#" className='flex flex-col text-center items-center'>
                                    <FaWarehouse className='text-3xl text-[#b5a47e] mb-3'/>
                                    <li className='text-sm'>Garagem <br />Completa</li>
                                </a>
                                <a href="#" className='flex flex-col text-center items-center'>
                                    <div className='mb-3'><CartWidget /></div>
                                    <li className='text-sm'>Carrinho</li>
                                </a>
                            </div>
                        </ul>
                    )}
                </header>
            </div>
        </>
    );
}

export default Header;