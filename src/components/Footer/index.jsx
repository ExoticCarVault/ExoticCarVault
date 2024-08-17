import { Link } from 'react-router-dom';
import Logo from '../../assets/header/ecv-logo.png';
import { FaGithub,FaLinkedinIn } from "react-icons/fa6";
export const Footer = () => {
    return (
        
        <div className='w-full flex flex-col justify-center items-center bg-[#181818]'>
            <div className='flex flex-col justify-center items-center p-10'>
            <Link to='/'>
            <img src={Logo} alt="Logo do site" className='w-[4rem]' />
            </Link>
            <p>Projeto Educacional desenvolvido para o trabalho final do curso JavaScript da Coder House. Turma 70555 </p>
            </div>
            <div className='p-10 bg-[#2a2a2a] w-full flex flex-col md:flex-row justify-center items-center gap-[60px]'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-xl'>Fabio <span className='font-bold text-[#b5a47e]'>Fernandes</span></h1>
                    <h2>Front-end Developer</h2>
                    <div className='flex justify-center items-center gap-3'>
                        <Link to='https://github.com/fernandesfabio' target='blank'>
                        <button className='p-2 bg-[#b5a47e] text-xl rounded-md'>
                            <FaGithub />
                        </button>
                        </Link>
                        <Link to='https://www.linkedin.com/in/fernandes-fabio-dev/' target='blank'>
                        <button className='p-2 bg-[#b5a47e] text-xl rounded-md'>
                            <FaLinkedinIn />
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-xl'>Juan <span className='font-bold text-[#b5a47e]'>Anjos</span></h1>
                    <h2>Front-end Developer</h2>
                    <div className='flex justify-center items-center gap-3'>
                        <Link to='https://github.com/dev-anjos' target='blank'>
                        <button className='p-2 bg-[#b5a47e] text-xl rounded-md'>
                            <FaGithub />
                        </button>
                        </Link>
                        <Link to='https://www.linkedin.com/in/dev-anjos/' target='blank'>
                        <button className='p-2 bg-[#b5a47e] text-xl rounded-md'>
                            <FaLinkedinIn />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <h1>CopyRigthg</h1>
            </div>
        </div>
    
    );
};