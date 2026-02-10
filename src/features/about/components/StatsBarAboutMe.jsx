import { StatsBar } from "@/components/statsbar/StatsBar"
import {statsDescripcion} from "../data/aboutCima"

export default function StatsBarAboutMe() {
    return (
        <section className="relative h-auto flex flex-col justify-center items-center gap-10 p-16 my-20 bg-[url(src/assets/images/fondo_Stats_about.jpg)] bg-cover bg-center shadow-xl/20">
            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
            {
                statsDescripcion.map((datos)=>(
                    <StatsBar
                        key={datos.id}
                        titulo={datos.titulo}
                    />
                ))
            }
            <a href="" className="text-md md:text-2xl text-white font-semibold font-roboto border-2 rounded-sm border-white px-4 py-2 z-10">Empezar</a>
        </section>
    )
}
