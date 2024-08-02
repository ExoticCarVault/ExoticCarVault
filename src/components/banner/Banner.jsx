function Banner (){
    return (
        <>
        <div className="w-full flex justify-center mt-5">
            <div className="flex text-center">
                <div className=" mr-2 ">
                    <p>Porshe</p>
                    <div className="border rounded-[5px] p-1 ">
                    <span className="material-icons">calendar_month</span>
                       <p>2024/2024</p>
                    </div>
                </div>

                <div>
                    <p>Spyder</p>
                    <div>
                        <i><p>20.000 km</p></i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner