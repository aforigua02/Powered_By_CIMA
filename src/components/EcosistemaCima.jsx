export const EcosistemaCima = ()=>{
    return (
        <section className="flex font-roboto h-auto animate-[inwardsY_1s_ease-out_forwards] ">
            <div className="flex flex-col w-full h-auto  mx-30 justify-center items-center">
                <div className="flex flex-col gap-5 py-10 px-48 2xl:px-96 items-center">
                    <h2 className="text-4xl 2xl:text-5xl text-blue-primaryCima text-center font-medium">Ecosistema diseñado para crecer</h2>
                    <p className="text-lg text-blue-primaryCima text-center">Un ecosistema que une tecnología, operación y acompañamiento para que el agente escale con claridad y sin caos</p>
                    <a href="" className=" text-blue-primaryCima font-medium text-xl px-5 py-2 border-2 border-blue-primaryCima rounded-2xl hover:bg-red-secundaryCima hover:text-white transition-all duration-400 hover:border-red-secundaryCima">Comenzar</a>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 shadow-xl border border-gray-300">
                    <article className="flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center bg-blue-primaryCima text-white  2xl:h-auto ">
                        <img loading="lazy" className="w-22" src="src/assets/icons/simplificar.png" alt="imagen de simplificacion" />
                        <h3 className="text-xl font-bold">Sin complicaciones</h3>
                        <p className="text-center 2xl:w-96">Te lo hacemos fácil. Tú sigues creciendo.</p>
                    </article>
                    <article className="flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center text-blue-primaryCima  bg-white  2xl:h-auto">
                        <img loading="lazy" className="w-22" src="src/assets/icons/business-intelligence.png" alt="" />
                        <h3 className="text-xl font-bold">Gestión inteligente</h3>
                        <p className="text-center 2xl:w-96">Operación clara y ordenada. Decisiones fáciles y precisas.</p>
                    </article>
                    <article className="flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center bg-blue-primaryCima text-white  2xl:h-auto">
                        <img loading="lazy" className="w-22" src="src/assets/icons/aumento.png" alt="" />
                        <h3 className="text-xl font-bold">Maximizar</h3>
                        <p className="text-center 2xl:w-96">Más alcance, más ventas. Menos esfuerzo para ti</p>
                    </article>
                    <article className="flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center  text-blue-primaryCima  bg-white  2xl:h-auto">
                        <img loading="lazy" className="w-22" src="src/assets/icons/visibilidad.png" alt="" />
                        <h3 className="text-xl font-bold">Visibilidad</h3>
                        <p className="text-center 2xl:w-96">Más ojos en tus propiedades. Más posibilidades de vender.</p>
                    </article>
                    <article className="flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center  bg-blue-primaryCima text-white  2xl:h-auto">
                        <img loading="lazy" className="w-22" src="src/assets/icons/megafono.png" alt="" />
                        <h3 className="text-xl font-bold">Marketing</h3>
                        <p className="text-center 2xl:w-96">Tu marca en todas partes. Tus propiedades donde todos las ven.</p>
                    </article>
                    <article className="flex h-auto w-auto p-8 gap-5 flex-col items-center justify-center  text-blue-primaryCima  bg-white  2xl:h-auto">
                        <img loading="lazy" className="w-22" src="src/assets/icons/actuacion.png" alt="" />
                        <h3 className="text-xl font-bold">Optimización</h3>
                        <p className="text-center 2xl:w-96">Todo funciona mejor. Tú trabajas más suave.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}