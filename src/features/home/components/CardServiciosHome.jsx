import {serviciosCard} from "../data/homeData"

export const CardServiciosHome = ()=>{
    const desktopDesign = `md:grid md:grid-cols-2 md:grid-rows-2 md:place-items-center md:my-15 lg:max-w-6xl md:mx-auto`;
    return(
        <section className= {`flex flex-col gap-12 items-center mt-10  ${desktopDesign}`}>
            {
                serviciosCard.map((item,index)=>(
                    <article  key={index} className="relative w-80 lg:w-125 flex flex-row justify-center items-center rounded-2xl inset-0 bg-black overflow-hidden shadow-xl cursor-pointer  transition-all duration-150 lg:hover:scale-105">
                            <img src={item.imagen} alt={item.titulo}  className="object-cover inset-0 w-full" loading="lazy"/>
                            <div className="absolute inset-0 bg-linear-to-b rounded-2xl from-blue-primaryCima/50 to-white/10"></div>
                            <h4 className="z-10 absolute flex justify-center items-center text-white font-bold font-roboto w-full h-16 text-lg lg:text-2xl">{item.titulo}</h4>
                    </article>
                ))
            }
        </section>

    )
}