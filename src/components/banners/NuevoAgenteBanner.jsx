export const NuevoAgenteBanner = () => {
    return (
        <header className="relative bg-[url(src/assets/images/sala_Banner.jpg)] bg-cover h-screen flex flex-col justify-center z-0 items-center font-roboto gap-6">
            <div className="absolute inset-0 bg-linear-to-r from-black/90 to-transparent"></div>
            <div className="z-10">
                <h2 className="flex flex-col gap-2 text-5xl text-white font-semibold text-center">Se parte del ecosistema <span>By CIMA</span></h2>
            </div>
            <div className="z-10"><h2 className="text-2xl text-white">¡Hacemos más del 60% de las labores operativas de tu negocio!</h2></div>
            <div className="flex z-10 gap-5">
                <a className="text-md text-white border-2 p-2 rounded-md font-bold cursor-pointer hover:bg-blue-primaryCima hover:border-blue-primaryCima">CARRERA EN BIENES RAICES</a>
                <a className="text-md text-white border-2 p-2 rounded-md font-bold cursor-pointer hover:bg-red-secundaryCima hover:border-red-secundaryCima">UNIRME A CIMA</a>
                </div>
        </header>
    )
}
