
import {Header} from "./components/NavBar/Header"
import { Footer } from "./components/Footer"
import RoutePath from "./routes"



const App = () => {
  return (
   <div className='h-full overflow-auto text-white'>
    <Header />
    <RoutePath />
    <Footer />
   </div>
  )
}

export default App