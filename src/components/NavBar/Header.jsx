import { useState, useEffect } from 'react';
import menuIcon from '../../assets/header/menu.svg';
import logo from '../../assets/header/ecv-logo.png';
import login from '../../assets/header/login.svg';
import star from '../../assets/header/star.svg';
import garage from '../../assets/header/garage.svg';
import keys from '../../assets/header/keys.svg';

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
            <div className={`w-full top-0 fixed z-50 shadow-xl ${navbarScrolled ? 'bg-[#011724]' : 'bg-transparent'}`}>
                <header className='flex flex-col place-content-around mt-5'>
                    <nav className='flex w-full place-content-around'>
                        <button className='md:hidden' type="button" onClick={toggleMenu}>
                            <img src={menuIcon} alt="Menu do site" />
                        </button>

                        <img src={logo} alt="Logo do site" className='w-[4rem]' />

                        <div className='hidden md:flex w-50 text-center items-center'>
                            <ul className='flex'>
                                <a href="#" className='hover:bg-gray-700 p-1 rounded-md'>
                                    <li className='text-base'>Garagem completa</li>
                                </a>
                                <span className='mr-3 ml-3'>-</span>
                                <a href="#" className='hover:bg-gray-700 p-1 rounded-md'>
                                    <li className='text-base'>Serviços</li>
                                </a>
                            </ul>
                        </div>

                        <div className='flex'>
                            <button className='flex items-center md:mr-7' type="button">
                                <img className='md:mr-4' src={login} alt="Login do site" />
                                <p className='hidden md:flex items-center'>Login</p>
                            </button>
                            <button className='hidden md:flex items-center' type="button">
                                <img className='mr-1' src={star} alt="Lista de desejo" />
                                <p className='items-center'>Lista de Desejo</p>
                            </button>
                        </div>
                    </nav>

                    {menuOpen && (
                        <ul className={`w-[30%] h-screen rounded-tr-3xl rounded-ee-3xl bg-[#010E16] absolute top-0 left-0 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden`}>
                            <div className='flex place-content-start mt-5 ml-4'>
                                <button className='md:hidden' type="button" onClick={toggleMenu}>
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <div className='flex text-left items-center flex-col space-y-20 bg-[#010E16] h-screen p-10 rounded-br-3xl'>
                                <a href="#" className='flex flex-col text-center items-center'>
                                    <img src={keys} alt="" className='w-10' />
                                    <li className='text-sm'>Serviços</li>
                                </a>
                                <a href="#" className='flex flex-col text-center items-center'>
                                    <img src={garage} alt="" className='w-10'/>
                                    <li className='text-sm'>Garagem <br />Completa</li>
                                </a>
                                <a href="#" className='flex flex-col text-center items-center'>
                                    <img src={star} alt="" className='w-10'/>
                                    <li className='text-sm'>Lista de <br /> Desejo</li>
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