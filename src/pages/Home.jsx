import { Hero } from "../components/Hero"
import { Destaques } from "../components/highlights"
import { ItemListContainer } from "../components/Container/ItemListContaine"


function Home() {

  return (
    <div >
     <Hero />
     <Destaques />  
     <ItemListContainer />  
    </div>
  
  )
}

export default Home
