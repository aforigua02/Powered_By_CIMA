import {StatsBar} from "@/components/statsbar/StatsBar.jsx"
import {datosInmobiliarios} from "../data/homeData"

export function StatsBarHome() {
  return (
    <section className={`flex flex-col gap-20 my-20 py-15 bg-blue-primaryCima text-white font-roboto font-bold md:flex-row md:justify-center`}>
        {
            datosInmobiliarios.map((datos)=>(
                <StatsBar
                    key={datos.id}
                    titulo={datos.titulo}
                    descripcion={datos.descripcion}
                />
            ))
        }
    </section>
  )
}
