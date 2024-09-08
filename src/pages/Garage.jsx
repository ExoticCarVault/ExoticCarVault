import { ItemListContainer } from "../components/Container/ItemListContaine"
const Garage = () => {
    return(
        <div className='h-full w-full overflow-auto text-white flex flex-col justify-center items-center'>
            <div className="text-xl md:text-3xl font-bold text-[#b5a47e] flex items-center justify-center mt-28 uppercase">
                <h1 className="underline underline-offset-8">garagem completa</h1>
            </div>
            <div className="mr-0">
               <ItemListContainer />
            </div>
        </div>
    );
};

export default Garage;