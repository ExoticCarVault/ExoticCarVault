import { useState, useEffect } from 'react';
import { FaX, FaRegCircleUser, FaBars, FaScrewdriverWrench, FaWarehouse } from "react-icons/fa6";
import logo from '../../assets/header/ecv-logo.png';
import { CartWidget } from '../Cart/CartWidget';
import { Link } from 'react-router-dom';


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
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
            <div className={`w-full fixed z-40 shadow-xl ${navbarScrolled ? 'bg-[#2a2a2a]' : 'bg-transparent'} text-white`}>
                <header className='flex flex-col place-content-around p-3'>
                    <nav className='flex w-full place-content-around'>
                        <button className='md:hidden' type="button" onClick={toggleMenu}>
                            <FaBars className='text-3xl text-[#b5a47e]' />
                        </button>
                        <Link to='/'>
                        <img src={logo} alt="Logo do site" className='w-[4rem]' />
                        </Link>
                        <div className='hidden md:flex w-50 text-center items-center'>
                            <ul className='flex'>
                                <Link to='/garage'>
                                    <li className='text-base hover:bg-[#ffffff30] py-1 px-2 rounded-md'>Garagem completa</li>
                                </Link>
                                <span className='mr-3 ml-3'>-</span>
                                <Link to='/services'>
                                <li className='text-base hover:bg-[#ffffff30] py-1 px-2 rounded-md'>Serviços</li>
                                </Link>                                    
                                
                            </ul>
                        </div>

                        <div className='flex items-center'>
                            <Link to='/login'>
                            <button className='flex items-center md:mr-7' type="button">
                                <FaRegCircleUser className='text-3xl mr-3 text-[#b5a47e]' />
                                <p className='text-base  hidden md:block'>Login</p>
                            </button>
                            </Link>
                            <Link to='cartList'>
                            <button className='hidden md:flex items-center' type="button">
                                <div className=''><CartWidget /></div>
                               
                            </button>
                            </Link>
                        </div>
                    </nav>

                    {menuOpen && (
                        <ul className={`w-[30%] h-screen rounded-tr-3xl rounded-ee-3xl bg-[#181818] absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden`}>
                            <div className='flex place-content-start mt-5 ml-4'>
                                <button className='md:hidden text-[#b5a47e] text-3xl mt-2 m-auto' type="button" onClick={toggleMenu}>
                                    <FaX />
                                </button>
                            </div>
                            <div className='flex text-left items-center justify-evenly flex-col gap-10 pb-5 bg-[#181818] h-screen rounded-br-3xl'>
                                <Link to='services'>
                                <button className='flex flex-col text-center items-center'>
                                    <FaScrewdriverWrench className='text-3xl text-[#b5a47e] mb-3'/>
                                    <li className='text-sm'>Serviços</li>
                                </button>
                                </Link>
                                <Link to='garage'>
                                <button className='flex flex-col text-center items-center'>
                                    <FaWarehouse className='text-3xl text-[#b5a47e] mb-3'/>
                                    <li className='text-sm'>Garagem <br />Completa</li>
                                </button>
                                </Link>
                                <Link to='cartList'>
                                <button className='flex flex-col text-center items-center'>
                                    <div className='mb-3'><CartWidget /></div>
                                    <li className='text-sm'>Carrinho</li>
                                </button>
                                </Link>
                            </div>
                        </ul>
                    )}
                </header>
            </div>
        </>
    );
};

