export const StatsBar = ({titulo,descripcion})=>{
    return(
        <div className="flex flex-col items-center justify-center z-10">
            <h4 className="text-5xl text-white font-roboto font-semibold">{titulo}</h4>
            <p>{descripcion}</p>
        </div>    
        )
}