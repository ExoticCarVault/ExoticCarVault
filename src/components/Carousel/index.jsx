import video1 from '../../assets/Hero/porshe.mp4'
import video2 from '../../assets/Hero/ferrari.mp4'
import video3 from '../../assets/Hero/lamborghini.mp4'

export const Carousel = () => {
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
     
    ]

    return(
        <div className='w-full h-full'>

                {data.map((d ) => (
                        <div key={d.id} className='relative flex flex-row gap-5'>
                            <video src={d.video} autoPlay loop muted className='w-full h-full object-cover object-center'></video>
                            <div className='absolute w-full h-full top-0 flex flex-col justify-center items-start bg-gradient-to-r px-[6%] from-[#000000e6] to-transparent'>
                                <div className='flex flex-col justify-between items-center gap-10'>
                                    <div className='flex flex-col'>
                                    <h4 className='text-xl'>{d.category}</h4>
                                    <h1 className='text-2xl'>{d.name}<span className='text-red-500 text-3xl font-bold'>{d.model}</span></h1>
                                    <p>
                                        {d.price}
                                    </p>
                                    </div>
                                </div>
                                <div>
                                    <button className='p-3 bg-blue-400 rounded hover:bg-white hover:text-blue-400'>comprar</button>
                                    <button className='p-3 bg-blue-400 rounded ml-2  hover:bg-white hover:text-blue-400'>+</button>
                                </div>
                            </div>
                        </div>
                  ))}
         </div>               
           
    )
};

  
