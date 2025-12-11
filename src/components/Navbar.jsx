export const Navbar = ()=>{
    return(
        <>
            <nav className="bg-blue-primaryCima py-2 flex justify-around">
                <img className="w-25  rounded-full" src="src/assets/images/logo_BYCIMA.jpg" alt="logo_Bycima" />
                <div className="flex gap-12 content-center items-center">
                    <ul className="flex gap-8 text-white font-roboto font-semibold text-lg">
                        <li className="text-xl"><a href="">ByCIMA</a></li>
                        <li className="text-xl"><a href="">Servicios</a></li>
                        <li className="text-xl"><a href="">Precios</a></li>
                        <li className="text-xl"><a href="">Agentes</a></li>
                        <li className="text-xl"><a href="">Inmuebles</a></li>
                    </ul>
                </div>
                <div className="flex gap-12 content-center items-center">
                    <button className="bg-red-secundaryCima text-white text-lg rounded-2xl p-3 font-roboto font-bold" type="button">Contactanos</button>
                </div>
            </nav>
        </>
    )
}