import {statsBarNuevoAgente} from "../data/nuevoAgentedata"
const StatsBar = ({descripcionDesktop,descripcionMobile ,buttom}) => (
    <div className="flex flex-col items-center justify-center z-10 gap-10 h-auto">
        <h4 className="text-center text-3xl md:text-4xl text-white font-roboto font-semibold md:px-30">
            <span className="md:hidden">{descripcionMobile}</span>
            <span className="hidden md:inline">{descripcionDesktop}</span>
        </h4>
        <a href="/" className="text-sm md:text-lg font-semibold font-roboto text-white p-2 md:p-4 border-2 rounded-md md:hover:bg-red-secundaryCima md:hover:border-red-secundaryCima md:cursor-pointer">{buttom}</a>
    </div>    
)

export const NuevoAgente_StatsBar = () =>(
    <article className="relative h-auto flex flex-col justify-center items-center gap-10 p-16 my-20 bg-[url(src/assets/images/fondo_Stats_about.jpg)] bg-cover bg-center shadow-xl/20">
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
        {
            statsBarNuevoAgente.map((item)=>(
                <StatsBar
                    key={item.id}
                    descripcionMobile={item.descripcionMobile}
                    descripcionDesktop={item.descripcionDesktop}
                    buttom={item.buttom}
                />
            ))
        }
    </article>
)

