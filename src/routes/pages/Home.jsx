
// import ItemListContainer from '../../components/Container/ItemListContaine'
import { Garage } from './Garage'
import { Hero } from '../../components/Hero'
import { Destaques } from '../../components/highlights'


function Home() {

  return (
    <div className='h-full overflow-auto text-white'>
   
      <Hero/>
      <Destaques />
      <Garage />
    </div>
  
  )
}

export default Home
