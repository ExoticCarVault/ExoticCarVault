import banner from '../../assets/banner/porsche-teste.png';
import { Swiper, SwiperSlide } from 'swiper/react'; 


function Banner (){

    return (
        <>
        {/* <div className="w-full flex justify-center mt-5">
            <div className="flex w-[100%] justify-evenly items-center mr-10 ml-10">
                <div className=" ">
                    <p className="text-5xl md: text-10xl">Porshe</p>
                    <div className=" flex border rounded-[5px] p-0.5 mt-4 justify-around">
                        <p className="flex items-center  "><i className="material-symbols-outlined mr-1">calendar_month</i>2024/2024</p>
                    </div>
                </div>

                <div className=" ">
                    <p className="text-5xl">Spyder</p>
                    <div className=" flex border rounded-[5px] p-0.5 mt-4 justify-around md: ofgmogmof">
                       <p className="flex items-center justify-around "><i className="material-symbols-outlined mr-1">add_road</i>20.000 KM</p>
                    </div>
                </div>
            </div>

        </div> */}


        <Swiper
            pagination= {{clickable: true}}
            slidesPerView={1}
            navigation
            // autoplay
            
        >
        <SwiperSlide>
            <div className='md:flex'> 
                <div className="w-full flex justify-center mt-5 md:">
                    <div className="flex w-[100%] justify-evenly items-center mr-10 ml-10">
                        <div className=" ">
                            <p className="text-5xl md: text-10xl">Porshe</p>
                            <div className=" flex border rounded-[5px] border-[--color-golden] p-0.5 mt-4 justify-around">
                                <p className="flex items-center  "><i className="material-symbols-outlined mr-1">calendar_month</i>2024/2024</p>
                            </div>
                        </div>

                        <div className=" ">
                            <p className="text-5xl">Spyder</p>
                            <div className=" flex border rounded-[5px] border-[--color-golden] p-0.5 mt-4 justify-around md: ofgmogmof">
                            <p className="flex items-center justify-around "><i className="material-symbols-outlined mr-1">add_road</i>20.000 KM</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className='mt-8 '>
                    <img className=' W-[100%] object-fill' src={banner} alt="Imagem de um carro"  />
                </div>
            </div>
           
        </SwiperSlide>

        <SwiperSlide>

            <div className='md:flex'>
                <div className="w-full flex justify-center mt-5">
                    <div className="flex w-[100%] justify-evenly items-center mr-10 ml-10">
                        <div className=" ">
                            <p className="text-5xl md: text-10xl">Porshe</p>
                            <div className=" flex border rounded-[5px] p-0.5 mt-4 justify-around">
                                <p className="flex items-center  "><i className="material-symbols-outlined mr-1">calendar_month</i>2024/2024</p>
                            </div>
                        </div>
                        <div className=" ">
                            <p className="text-5xl">Spyder</p>
                            <div className=" flex border rounded-[5px] p-0.5 mt-4 justify-around md: ofgmogmof">
                            <p className="flex items-center justify-around "><i className="material-symbols-outlined mr-1">add_road</i>21.000 KM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 '>
                        <img className='  ' src={banner} alt="Imagem de um carro"  />
                </div>
            </div>

        </SwiperSlide>

        </Swiper>
        </>
    )
}

export default Banner