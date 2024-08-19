import { ItemListContainer } from "../components/Container/ItemListContaine"
const Garage = () => {
    return(
        <div className='h-full w-full overflow-auto text-white'>
            <div className="text-3xl font-bold text-[#b5a47e] flex items-center justify-center mt-28 uppercase">
                <h1>garagem completa</h1>
            </div>
            <div>
               <ItemListContainer />
            </div>
        </div>
    );
};

export default Garage;