export const CajasAcercade = ({imagen,titulo,descripcion,boton,esInverso}) =>{
    return(
        <section className="h-auto my-30 px-20">
        <div className={`flex justify-around p-5 gap-20 items-center ${esInverso ? 'flex-row-reverse ':'flex-row'}`}>
            <div className="border w-1/2 h-96">
                <img className="w-50" src={imagen}></img>
            </div>
            <div className="flex flex-col gap-8 w-1/2 h-auto items-start">
                <h2 className="text-4xl text-blue-primaryCima font-roboto font-semibold text-start w-96">{titulo}</h2>
                <p className="font-roboto text-blue-primaryCima">{descripcion}</p>
                <a href="" className="bg-blue-primaryCima text-white font-semibold px-4 py-2 rounded-sm w-fit text-center transition-all hover:scale-105">{boton}</a>
            </div>
        </div>
        </section>
    )
}
    
