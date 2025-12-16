export const Banner = () =>{
    return(
        <>
            <header className="relative bg-[url(src/assets/images/sala_Banner.jpg)] bg-cover min-h-screen flex justify-between z-0 ">
                <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
                <div className="relative z-10 text-white font-roboto flex flex-col w-1/2 justify-center p-10 gap-10">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-bold">Soluciones Inmobiliarias Profesionales en Colombia</h1>
                        <p className="text-base">En CIMA te acompañamos en la compra, venta y gestión de inmuebles con un enfoque profesional, transparente y centrado en tus objetivos.</p>
                    </div>
                    <div className="flex items-start gap-5">
                        <button className="bg-red-secundaryCima w-40 h-12 font-bold px-5 py-2 rounded-xl">UNIRSE A CIMA</button>
                        <a href="#" className="flex border-2 text-center items-center border-white h-12 px-5 py-2 rounded-xl font-bold">ENCUENTRA UN AGENTE</a>
                    </div>
                </div>
                <div className="flex w-1/2 items-center justify-center px-8">
                    <img src="src/assets/images/agente_Banner.png" alt="Asesora inmobiliara de servicios de CIMA" className="flex w-120 h-full pt-35 items-center justify-center z-10" />
                </div>
            </header>
        </>
    )
}