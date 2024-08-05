import video1 from '../../assets/Hero/porshe.mp4'
import video2 from '../../assets/Hero/ferrari.mp4'
import video3 from '../../assets/Hero/lamborghini.mp4'
import { PiEngineFill, PiSpeedometerFill } from "react-icons/pi";
import { IoPricetags } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
            acceleration: `3.4s`
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
            acceleration: `3.4s`
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
            acceleration: `2.5s`
        }
     
    ];
      
    

    return(
        <div className='w-[90%] m-auto h-full'>
         <Slider {...settings}>
         {data.map((d ) => (
                        <div key={d.id} className='relative flex flex-row gap-5'>
                            <video src={d.video} autoPlay loop muted className='w-full h-full object-cover object-center'></video>
                            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start bg-gradient-to-r px-[6%]  from-[#000000e6] to-transparent'>
                                <div className='flex flex-col justify-between items-center gap-10'>
                                    <div className='flex flex-col'>
                                        <h4 className='text-sm text-[#b5a47e] p-1 md:text-xl'>{d.category}</h4>
                                        <h1 key={d.id} className='text-xl md:text-3xl'>{d.name}<span className='text-red-500 text-lg font-bold md:text-2xl'>{d.model}</span></h1>
                                        <div className='flex items-center gap-3 p-3 text-[0.8rem] md:text-xl'>
                                        <p className='flex flex-col items-center gap-3'>
                                            <span className='p-1 border-2 rounded-full'><PiEngineFill /></span>
                                            {d.power}
                                        </p>
                                        <p className='flex flex-col items-center gap-3'>
                                            <span className='p-1 border-2 rounded-full'><PiSpeedometerFill /></span>
                                            {d.acceleration}
                                        </p>
                                        <p className='flex flex-col items-center gap-3'>
                                            <span className='p-1 border-2 rounded-full'><IoPricetags /></span>
                                            {d.price}
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <button className='p-2 bg-[#b5a47e] rounded text-sm hover:bg-white hover:text-[#b5a47e] md:text-xl'>comprar</button>
                                    <button className='p-2 bg-[#b5a47e] rounded ml-2 text-sm hover:bg-white hover:text-[#b5a47e] md:text-xl'>+</button>
                                </div>
                            </div>
                        </div>
                  ))}
         </Slider>          
        </div>
    )
};
