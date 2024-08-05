import menu from '../../assets/header/menu.svg';
import logo from '../../assets/header/logo-ecv.svg';
import login from '../../assets/header/login.svg';

function Header (){
    return (
        <>
        <div className="w-full ">
            <header className='flex place-content-around mt-5'>
                <button type="button" id="menu">
                    <img src={menu} alt="Menu do site" />
                </button>

                <img src={logo} alt="Logo do site" />

                <button type="button" id="login">
                    <img src={login} alt="Login do site" />
                </button>
            </header>
        </div>
        </>
    )
}

export default Header