import { Link } from 'react-router-dom';
import Logo from '../../assets/header/ecv-logo.png';
import { FaGithub, FaLinkedinIn, FaRegCopyright } from "react-icons/fa6";
export const Footer = () => {

    const sendMail = () =>{
        alert('inscrição realizada com sucesso');
    };

    return (
        
        <div className='w-full flex flex-col justify-center items-center bg-gradient-to-t from-[#2a2a2a] via-[#2a2a2a] to-[#b5a47e] shadow-2xl'>
            <div className='flex flex-col justify-center items-center p-14'>
            <Link to='/'>
            <img src={Logo} alt="Logo do site" className='w-[8rem]' />
            </Link>
            <h1 className='p-2 md:p-5 font-bold text-sm md:text-3xl'> Receba ofertas exclusivas em seu e-mail</h1>
            <p className='text-[12px] md:text-lg'>Inscreva-se em nossa newsletter e fique atualizado</p>
            <div className='pb-10 pt-5 flex'>
                <input className='w-[300px]  md:w-[500px] md:ml-[50px] border-none outline-none rounded-full text-[#616161] text-[14px] md:text-[16px] p-4 md:pl-6' type='email' placeholder='seuemail@exemplo.com.br' /> 
                <button onClick={sendMail} className='w-[100px] md:w-[200px] rounded-[80px] bg-[#b5a47e] ml-[-70px] text-[14px]'>Subscribe</button>
            </div>
            </div>
            <div className='p-5 md:p-10'>
                <h1>Website created by</h1>
            </div>
            <div className='p-10 w-full flex flex-col md:flex-row justify-center items-center gap-[60px]'>
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
            <div className='w-full flex flex-col justify-center md:flex-row md:justify-between items-center border-t-2 border-[#b5a47e] p-5 mt-10 text-[10px]'>
                <div className='flex justify-center items-center gap-1 p-2'>
                <p>CopyRigth</p>
                <FaRegCopyright />
                <p>2024, ExoticCarVault. Todos os direitos reservados</p>
                </div>
                <div className='flex justify-center items-center p-2'>
                    <a href='mailto:exotic@exoticcarvault.com.br'>exotic@exoticcarvault.com.br</a>
                </div>
                <div className='flex justify-center items-center p-2'>
                    <p>Projeto React criado para fins educacionais CoderHouse</p>
                </div>
            </div>
        </div>
    
    );
};