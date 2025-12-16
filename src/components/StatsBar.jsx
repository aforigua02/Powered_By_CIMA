export const StatsBar = ()=>{
    return(
        <section className="flex justify-center gap-28 h-35  mt-20 bg-blue-primaryCima text-white font-roboto font-bold">
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-5xl ">+1000</h4>
                <p>Casos de exito</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-5xl ">2500</h4>
                <p>Propiedades vendidas</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-5xl ">$20.3B</h4>
                <p>Vendidos en negocios</p>
            </div>
        </section>
    )
}