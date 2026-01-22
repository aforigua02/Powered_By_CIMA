import {serviciosCard} from "../data/infoServicios.js"

export const CardServicios = ()=>{
    return(
        <section className="grid grid-cols-2 grid-rows-2 place-items-center gap-12 my-15 max-w-6xl mx-auto">
            {
                serviciosCard.map((item,index)=>{
                    return(
                    <div key={index} className="text-white">
                        <article className="relative flex flex-row justify-center items-center rounded-2xl inset-0 bg-black w-110 overflow-hidden shadow-xl cursor-pointer  transition-all duration-150 hover:scale-105">
                                <img src={item.imagen} alt={item.titulo}  className="object-cover inset-0 w-full" loading="lazy"/>
                                <div className="absolute inset-0 bg-linear-to-b rounded-2xl from-blue-primaryCima/50 to-white/10"></div>
                                <h4 className="z-10 absolute flex justify-center items-center text-white font-bold font-roboto w-full h-16 text-2xl">{item.titulo}</h4>
                        </article>
                    </div>)
                })
            }
        </section>

    )
}