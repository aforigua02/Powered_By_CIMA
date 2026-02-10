import {cardUbicaciones} from "../data/homeData"
import imagenBoton from "@/assets/icons/proximo.png"

const UbcacionesCard =({item})=>(
    <article className="flex flex-col items-center justify-center h-auto bg-gray-300/30 px-8 py-8 gap-8 md:px-50 md:py-8 md:bg-transparent md:flex-row md:gap-15">
        <div className="relative flex flex-col justify-center items-center inset-0 h-auto gap-5 2xl:w-115 md:w-96">
            <img src={item.imagen} alt={item.titulo} className=" object-cover inset-0 2 rounded-2xl w-full h-56 md:h-70"  loading="lazy" />
            <h4 className="z-10 absolute flex justify-center items-center text-center text-white font-bold font-roboto text-2xl w-full bg-gray-500/50 h-20">{item.titulo}</h4>
        </div>
        <div className="flex flex-col items-start justify-around  gap-5  md:w-1/3 md:gap-10 md:items-start">
            <h5 className="flex items-center justify-center text-4xl font-medium text-center gap-2 md:text-5xl md:items-start">{item.propCaptadas}k <span className=""></span></h5>
            <div className="flex flex-col gap-4 lg:gap-5 lg:items-center">
                <p className="text-base text-start md:text-xl">{item.descripcion}</p>
                <div className="flex w-full justify-start">
                    <a href="#" className="text-blue-primaryCima text-lg md:text-2xl lg:text-center rounded-lg lg:w-38 h-auto font-roboto font-bold inline-flex items-center transition-normal duration-400 lg:hover:underline lg:hover:translate-x-5">Conocer<img className="w-6 md:w-8" src={imagenBoton} alt="" /></a>
                </div>
            </div>
        </div>
    </article>
)
export const CardsUbicaciones = ()=>{
    return(
        <section className="flex flex-col justify-center gap-8 font-roboto text-blue-primaryCima my-10 h-auto lg:animate-[inwardsX_1s_ease-out_forwards] mt-30">
            <div className="flex flex-col gap-5  2xl:px-96 items-center">
                <h2 className="text-4xl md:text-5xl text-blue-primaryCima text-center font-semibold">Presencia que amplifica el modelo</h2>
                <p className="text-md lg:text-lg lg:w-1/3 text-blue-primaryCima text-center 2xl:w-1/2">Territorios donde nuestra red de agentes y captaciones consolida la expansión del modelo</p>
            </div>
            {
                cardUbicaciones.map((ubicacion,index)=>{
                    return(
                        <UbcacionesCard key={index} item={ubicacion}/>
                    )
                })
            }
        </section>
    )
}