import {serviciosNuevosAgentes} from "../data/infoServicios"

export const CardsNuevosAgentes = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center max-w-7xl mx-auto mb-20 px-4">
            {
                serviciosNuevosAgentes.map((datos)=>(
                    <article className="flex flex-col justify-between rounded-md items-center h-110 w-55 p-8 border border-gray-300 shadow-lg" key={datos.id}>
                        <img src={datos.icono} alt="" className="w-20"/>
                        <h4 className="text-2xl text-center font-roboto font-bold text-blue-primaryCima">{datos.titulo}</h4>
                        <div>
                            <p className="font-roboto">
                                {datos.descripcion}
                            </p>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}
