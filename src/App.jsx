import {Header} from "./components/NavBar/Header"
import RoutePath from "./routes"



const App = () => {
  return (
   <div className='h-full overflow-auto text-white'>
    <Header />
    <RoutePath />
   </div>
  )
}

export default App