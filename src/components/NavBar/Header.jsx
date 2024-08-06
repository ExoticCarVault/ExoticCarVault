import menuIcon from '../../assets/header/menu.svg';
import logo from '../../assets/header/logo-ecv.svg';
import login from '../../assets/header/login.svg';
import star from '../../assets/header/star.svg';
import garage from '../../assets/header/garage.svg';
import keys from '../../assets/header/keys.svg';
import { useState } from 'react';


function Header (){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    };

    return (
        <>
        <div className="w-full ">
            <header className='flex flex-col  place-content-around mt-5'>
                <nav  className='flex w-full place-content-around'>
    
                    <button className='md:hidden' type="button" id="menuBtn" onClick={toggleMenu}>
                        <img src={menuIcon} alt="Menu do site" />

                    </button>

                    <img src={logo} alt="Logo do site" />

                    <div className='hidden md:flex w-50 text-center items-center  '>
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
                        <button className=' flex items-center md:mr-7' type="button" id="login">
                            <img className='md:mr-4' src={login} alt="Login do site" />
                            <p className=' hidden md:flex items-center '>Login</p>
                        </button>
                        <button className=' hidden md:flex items-center ' type="button" id="login">
                            <img className='mr-1' src={star} alt="Lista de desejo" />
                            <p className=' items-center '>Lista de Desejo</p>
                        </button>
                    </div>
                </nav>
  
                {menuOpen && (
                    <ul id='menu' className='w-[30%] h-[100%] rounded-tr-3xl rounded-ee-3xl opacity-100 top-0.5 flex flex-col bg-[#010E16] absolute z-10  md:hidden z-1'>
                    <div className='flex place-content-start mt-5 ml-4'>
                        <button className='md:hidden' type="button" id="menuBtn" onClick={toggleMenu}>
                                {/* <img src={menuIcon} alt="Menu do site" /> */}
                                <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className='flex text-left items-center flex-col mt-20 space-y-20'>
                        <a href="#" className='flex flex-col text-center items-center'>
                            <img src={keys} alt="" className='w-10' />
                            <li className='text-sm		'>Serviços</li>
                        </a>
                        <a href="#"  className='flex flex-col text-center items-center' >
                            <img src={garage} alt=""  className='w-10'/>
                            <li className='text-sm		'>Garagem <br />Completa</li>
                        </a>
                        <a href="#"  className='flex flex-col flex-wrap text-center items-center'>
                            <img src={star} alt=""  className='w-10'/>
                            <li className='flex text-sm	 '>Lista de  <br /> Desejo</li>
                        </a>
                    </div>
                </ul>
                )}
                
            </header>
        </div>

        
        </>
    )


}



export default Header