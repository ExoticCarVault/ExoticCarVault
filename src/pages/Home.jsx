import { Hero } from "../components/Hero"
import { Destaques } from "../components/highlights"
import { ItemListContainer } from "../components/Container/ItemListContaine" 
import { useCart } from "../context/cartContext";



function Home() {
const { cart } = useCart();
  return (
    <div >
     <Hero />
     <Destaques />  
     <ItemListContainer />  
    </div>
  
  )
}

export default Home
