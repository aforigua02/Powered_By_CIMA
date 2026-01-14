import cardUbicacion1 from "../assets/images/colombiaCard.jpg"
import cardUbicacion2 from "../assets/images/costaRica.jpg"
import cardUbicacion3 from "../assets/images/republicaDominicana.jpg"

export const CardsUbicaciones = ()=>{
    const cardUbicaciones = [
            {
                id:1,
                imagen: cardUbicacion1,
                titulo:"COLOMBIA",
                propCaptadas:4.5,
                descripcion:"Presencia sólida y operación madura; acompañamos a miles de agentes con procesos claros y un portafolio amplio de propiedades en todo el país."
            },
            {
                id:2,
                imagen: cardUbicacion2,
                titulo:"COSTA RICA",
                propCaptadas:1.5,
                descripcion:"Expansión estratégica en un mercado dinámico; impulsamos a los agentes con formación y tecnología, respaldados por un inventario activo de propiedades."
            },
            {
                id:3,
                imagen: cardUbicacion3,
                titulo:"REPUBLICA DOMINICANA",
                propCaptadas:1.1,
                descripcion:"Crecimiento acelerado en un destino clave de inversión; equipamos a los agentes con estructura y comunidad, gestionando propiedades turísticas y residenciales en expansión."
            }
        ]

    return(
        <>
            <section className="flex flex-col  justify-center gap-8 font-roboto text-blue-primaryCima my-10 h-auto animate-[inwardsX_1s_ease-out_forwards]">
                <div className="flex flex-col gap-5 py-12 2xl:px-96 items-center">
                    <h2 className="text-4xl 2xl:text-5xl text-blue-primaryCima text-center font-medium">Presencia que amplifica el modelo</h2>
                    <p className="text-lg  text-blue-primaryCima text-center 2xl:w-1/2">Territorios donde nuestra red de agentes y captaciones consolida la expansión del modelo</p>
                </div>
                {
                    cardUbicaciones.map((item,index)=>{
                        return(
                            <article className="flex justify-center items-center inset-0 h-auto gap-15" key={index}>
                                <div className="relative flex justify-center items-center inset-0 w-96 h-auto gap-5 2xl:w-115">
                                    <img src={item.imagen} alt={item.titulo} className=" object-cover inset-0 2 rounded-2xl w-full h-56 2xl:h-65"  loading="lazy" />
                                    <h4 className="z-10 absolute flex justify-center items-center text-white font-bold font-roboto w-full text-2xl bg-gray-600/35 h-20">{item.titulo}</h4>
                                </div>
                                <div className="flex w-1/3 gap-10 items-center">
                                    <h5 className="text-5xl font-light text-center">{item.propCaptadas}k <span className="">Captadas</span></h5>
                                    <div className="flex flex-col gap-5 items-center">
                                        <p className="text-base">{item.descripcion}</p>
                                        <a href="#" className="text-blue-primaryCima text-center text-lg rounded-lg w-38 h-auto py-2 font-roboto font-bold inline-flex gap-1 items-center transition-normal duration-400 hover:underline hover:translate-x-5">Conocer<img className="w-6" src="src/assets/icons/proximo.png" alt="" /></a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                };
            </section>
        </>
    )
}