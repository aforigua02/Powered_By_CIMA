export const NuevoAgente_StatsBar = ({descripcion,buttom}) => {
    return (
        <div className="flex flex-col items-center justify-center z-10 gap-10 h-82">
            <h4 className="text-5xl text-white font-roboto font-semibold text-center px-30">{descripcion}</h4>
            <a className="text-xl font-semibold font-roboto text-white p-4 border-2 rounded-md hover:bg-red-secundaryCima hover:border-red-secundaryCima cursor-pointer">{buttom}</a>
        </div>    
    )
}

