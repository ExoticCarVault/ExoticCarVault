import video1 from '../../assets/Hero/porshe.mp4'
import video2 from '../../assets/Hero/ferrari.mp4'
import video3 from '../../assets/Hero/lamborghini.mp4'
import { PiEngineFill, PiSpeedometerFill } from "react-icons/pi";
import { IoPricetags } from "react-icons/io5";
import { register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react'
import ItemCount from '../Button/ItemCount';

export const Hero = () => {
    const data = [
        {
            id: 0,
            category: `Sport`,
            video: video1,
            name: `Porshe`,
            model: ` 718 Cayman GT4 RS`,
            power: `500cv`,
            price: `R$ 1.5000,00`,
            engine: `Boxer`,
            acceleration: `3.4s`,
            stock: 2,
        },
        {
            id: 1,
            category: `Suv`,
            video: video2,
            name: `Ferrari`,
            model: ` Purosangue`,
            power: `725cv`,
            price: `R$ 2.0000,00`,
            engine: `V12`,
            acceleration: `3.4s`,
            stock: 8,
        },
        {
            id: 2,
            category: `Sport`,
            video: video3,
            name: `Lamborghini`,
            model: ` Revuelto`,
            power: `1101cv`,
            price: `R$ 6.0000,00`,
            engine: `V12`,
            acceleration: `2.5s`,
            stock: 6,
        }
     
    ]

    return(
        <div className='w-full min-h-screen top-0 '>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true}}
                navigation
            
            >
            {data.map((d ) => (
                <SwiperSlide key={d.id}>                
                    <div className='relative flex flex-row gap-5 '>
                        <video src={d.video} autoPlay loop muted className='w-full h-screen object-cover object-center'></video>
                        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start bg-gradient-to-r px-[6%]  from-[#000000e6] to-transparent '>
                            <div className='flex flex-col justify-center items-center gap-20 m-auto md:m-1 py-5 px-10'>
                                <div className='flex flex-col items-center justify-center m-auto gap-10'>
                                    <div>
                                    <h4 className='text-sm text-[#b5a47e] p-1 md:text-xl'>{d.category}</h4>
                                    <h1 className='text-2xl md:text-5xl'>{d.name}<span className='text-red-500 text-lg font-bold md:text-2xl'>{d.model}</span></h1>
                                    </div>
                                    <div className='flex items-center gap-4 p-2 text-[0.8rem] md:text-xl md:flex-col md:items-start md:gap-5'>
                                        <p className='flex flex-col items-center gap-3 md:flex-row'>
                                            <span className='p-1 border-2 rounded-full'><PiEngineFill /></span>
                                            {d.power}
                                        </p>
                                        <p className='flex flex-col items-center gap-3 md:flex-row'>
                                            <span className='p-1 border-2 rounded-full'><PiSpeedometerFill /></span>
                                            {d.acceleration}
                                        </p>
                                        <p className='flex flex-col items-center gap-3 md:flex-row'>
                                            <span className='p-1 border-2 rounded-full'><IoPricetags /></span>
                                            {d.price}
                                        </p>
                                    </div>
                                    <div>
                                        <ItemCount stock={d.stock} initial={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                </SwiperSlide>
              ))}
            </Swiper>
           
         </div>               
        
    )
};

  
