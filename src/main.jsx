import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './style/index.css'
import {register} from 'swiper/element/bundle'

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
   

  </React.StrictMode>,
)
