import React, { useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
register();
import { FaPause, FaPlay } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { heroData } from '../../Data';
import { HeroBtn } from '../Button/heroBtn';
import '../../style/index.css'

export const Hero = () => {
    const videoRefs = useRef([]); // Array de refs para cada vídeo
    const [isPlaying, setIsPlaying] = useState({}); // Estado que armazena o estado de reprodução de cada vídeo

    const handlePlayPause = (index) => {
        const currentVideo = videoRefs.current[index];
        if (currentVideo) {
            if (isPlaying[index]) {
                currentVideo.play();
            } else {
                currentVideo.pause();
            }
            setIsPlaying((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        }
    };

    return (
        <div className='w-full min-h-screen top-0'>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {heroData.map((d, index) => (
                    <SwiperSlide key={d.id}>
                        <div className='relative flex flex-row gap-5'>
                            <video
                                ref={(el) => (videoRefs.current[index] = el)} // Referencia o vídeo atual
                                src={d.video}
                                autoPlay
                                loop
                                muted
                                className='w-full h-screen object-cover object-center'
                            ></video>
                            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start bg-gradient-to-r from-[#000000e6] to-transparent px-[6%]'>
                                <div className='flex flex-col items-center justify-center m-auto gap-4 mb-[50px]'>
                                    <div className='text-sm md:text-[1.5rem] font-bold'>
                                        {d.category}
                                    </div>
                                    <div className="text-[1.1rem] md:text-[2rem] lg:text-[3rem] font-bold uppercase">
                                        {d.text}
                                    </div>
                                    <div className='flex justify-center items-center text-md md:text-xl gap-4'>
                                        <div className='font-bold'>
                                            {d.name}
                                        </div>
                                        <div className='text-[#b5a47e]'>
                                            {d.model}
                                        </div>
                                        <div>
                                            <button onClick={() => handlePlayPause(index)} className='p-2 md:p-3 bg-transparent border-2 text-white font-bold rounded-lg hover:border-[#b5a47e] hover:bg-[#ffffff30] transition-all ease-in duration-300' >
                                                {isPlaying[index] ? <FaPlay /> : <FaPause /> }
                                            </button>
                                        </div>
                                    </div>
                                <div className='flex items-center justify-'>
                                    <div className='p-5 md:p-10'>
                                        <HeroBtn />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};