
import {Header} from "./components/NavBar/Header"
import { Footer } from "./components/Footer"
import RoutePath from "./routes"
import CartProvider from "./context/cartContext"




const App = () => {
  return (
   <div className='h-full w-full overflow-auto text-white'>
    <CartProvider>
    <Header />
    <RoutePath />
    </CartProvider>
    <Footer />
   </div>
  )
}

export default App