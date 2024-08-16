import { Route, Routes } from "react-router-dom"
import Header from "./components/NavBar/Header"
import Home from "./routes/pages/Home"
import { Garage } from "./routes/pages/Garage"
import {Services} from "./routes/pages/Services"


const App = () => {
  return (
   <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/garage' element={<Garage />} />
        <Route path='/services' element={<Services />} />
    </Routes>
   </>
  )
}

export default App