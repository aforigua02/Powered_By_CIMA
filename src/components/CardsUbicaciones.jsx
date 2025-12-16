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
            <section className="flex flex-col items-center justify-center gap-4 font-roboto text-blue-primaryCima my-10 transition-all h-auto">
                <h2 className="text-4xl font-bold p-8">Tenemos presencia en:</h2>
                {
                    cardUbicaciones.map((item,index)=>{
                        return(
                            <article className="flex justify-center items-center inset-0 h-auto gap-10" key={index}>
                                <div className="relative flex justify-center items-center inset-0 w-96 h-auto gap-5">
                                    <img src={item.imagen} alt={item.titulo} className=" object-cover inset-0 2 rounded-2xl w-full h-56" />
                                    <h4 className="z-10 absolute flex justify-center items-center text-white font-bold font-roboto w-full text-2xl bg-gray-600/35 h-20">{item.titulo}</h4>
                                </div>
                                <div className="flex w-1/3 gap-10 items-center">
                                    <h5 className="text-4xl font-bold text-center">{item.propCaptadas}k <span className="">Captadas</span></h5>
                                    <p className="text-base">{item.descripcion}</p>
                                </div>
                            </article>
                        )
                    })
                };
            </section>
        </>
    )
}