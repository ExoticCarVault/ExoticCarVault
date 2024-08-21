import { register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react'
import { heroData } from "../Data";
import { HeroBtn } from '../Button/heroBtn';

export const Hero = () => {
    return(
        <div className='w-full min-h-screen top-0 '>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true}}
                navigation
        
            >
            {heroData.map((d ) => (
                <SwiperSlide key={d.id}>                
                    <div className='relative flex flex-row gap-5 '>
                        <video src={d.video} autoPlay loop muted className='w-full h-screen object-cover object-center'></video>
                        <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start bg-gradient-to-r from-[#000000e6] to-transparent px-[6%] '>

                                <div className='flex flex-col items-center justify-center m-auto gap-5 mb-[50px]'>
                                    <div className='text-[1.5rem] font-bold'>
                                    {d.category}
                                    </div>
                                    <div className="text-[4rem] font-bold uppercase">
                                    {d.text}
                                    </div>
                                    <div className='flex justify-center items-center text-xl gap-4'>
                                        <div className='font-bold'>
                                        {d.name}
                                        </div>
                                        <div className='text-[#b5a47e]'>
                                         {d.model}
                                         </div>
                                    </div>
                                    <div className='p-10'>
                                        <HeroBtn />
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

  
