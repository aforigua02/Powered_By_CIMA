export const CajasAcercade = ({titulo,imagen,descripcion,boton,esInverso}) => {
    return (
        <div className={`flex flex-col gap-10 my-10 md:justify-around md:p-5 md:gap-20 md:items-center ${esInverso ? 'md:flex-row-reverse ':'md:flex-row'}`}>
            <div className="flex items-center justify-center border h-50 md:w-1/2 md:h-96">
                <img className="w-50" src={imagen}></img>
            </div>
            <div className="flex flex-col gap-8 md:w-1/2 h-auto items-start">
                <h2 className="text-3xl md:text-4xl text-blue-primaryCima font-roboto font-semibold text-start md:w-96">{titulo}</h2>
                <p className="font-roboto text-blue-primaryCima">{descripcion}</p>
                <a href="" className="bg-blue-primaryCima text-white font-semibold px-4 py-2 rounded-sm w-fit text-center transition-all hover:scale-105">{boton}</a>
            </div>
        </div>
    )
}
