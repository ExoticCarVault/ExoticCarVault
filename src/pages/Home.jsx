
import { Hero } from '../components/Hero'
import { Destaques } from '../components/highlights'
import Header from '../components/NavBar/Header'

function Home() {

  return (
    <div className='h-[500vh] text-white'>
      <Header />
      <Hero/>
      <Destaques />
    </div>
  
  )
}

export default Home
