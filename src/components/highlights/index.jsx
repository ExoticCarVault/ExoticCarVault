import mclaren from '../../assets/banner/mc.png'

export const Destaques = () => {
    return (
        <>
            <div className="flex w-full mt-5 flex-col lg:flex-row min-h-full">
                <div className="w-full lg:w-1/2 h-[400px] flex flex-col justify-center items-center bg-gradient-to-br from-gray-500 via-[#b5a47e] to-gray-500 p-10">
                    <h1 className="text-[0.8rem] font-bold py-3 uppercase">Dirija o Excepcional, Viva o Exclusivo</h1>
                    <p className='font-sans text-[0.8rem] font-bold'>
                        Na ExoticCarVault, acreditamos que dirigir não é apenas sobre chegar ao destino, mas sobre experimentar a jornada com excelência. Por isso, oferecemos uma seleção de veículos de luxo que redefinem o conceito de exclusividade e desempenho. Nosso compromisso é proporcionar a você, o exigente motorista, não apenas um carro, mas uma obra-prima sobre rodas. Aqui, cada detalhe é pensado para entregar uma experiência única, alinhando luxo e performance em perfeita harmonia. Dirija o excepcional e viva o exclusivo com os veículos mais prestigiados do mercado.
                    </p>
                </div>
                <div className="flex w-full lg:w-1/2 md:h-[400px]">
                    <img src="https://www.classicdriver.com/sites/default/files/styles/article_full/public/article_images/vegashypercars5.jpg" className=" h-full w-full object-cover"></img>
                </div>
            </div>
        </>
    )
}