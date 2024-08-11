import ItemListContainer from "../Container/ItemListContaine"

export const Garage = () => {
    return(
        <div>
            <div className="text-3xl font-bold text-[#b5a47e] flex items-center justify-center p-10 mt-10 uppercase">
                <h1>garagem completa</h1>
            </div>
            <div>
                <ItemListContainer />
            </div>
        </div>
    )
}