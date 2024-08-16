import ItemListContainer from "../../components/Container/ItemListContaine"

export const Garage = () => {
    return(
        <div className='h-full overflow-auto text-white'>
            <div className="text-3xl font-bold text-[#b5a47e] flex items-center justify-center p-10 mt-28 uppercase">
                <h1>garagem completa</h1>
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    )
}