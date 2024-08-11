
import ItemListContainer from '../components/Container/ItemListContaine'
import { Garage } from '../components/Garage'
import { Hero } from '../components/Hero'
import { Destaques } from '../components/highlights'
import Header from '../components/NavBar/Header'

function Home() {

  return (
    <div className='h-full overflow-auto text-white'>
      <Header />
      <Hero/>
      <Destaques />
      <Garage />
    </div>
  
  )
}

export default Home
