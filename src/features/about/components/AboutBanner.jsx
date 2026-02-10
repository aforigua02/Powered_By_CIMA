export const AboutBanner = () =>{
    return( //Banner que se muestra en el About me de la pagina
        <header className="relative bg-[url(src/assets/images/sala_Banner.jpg)] bg-cover h-screen flex flex-col justify-center md:px-50">
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
            <div className="flex flex-col gap-8 font-roboto text-white z-10 items-start px-10">
                <div>
                    <h1 className="text-4xl md:text-5xl md:text-center font-semibold">Impulsamos negocios inmobiliarios que crecen con estructura, tecnología y propósito.</h1>
                </div>
                <div >
                    <h2 className="text-md md:text-xl md:text-center md:px-20">Nuestro modelo integra tecnología y operaciones para que cada aliado Powered by CIMA crezca con solidez y resultados reales.</h2>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-10">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative w-full h-30 fill-white z-10">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
                </svg>
            </div>
        </header>
    )
}