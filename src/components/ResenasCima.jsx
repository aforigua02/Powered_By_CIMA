import resena1 from "../assets/images/hombre-en-camisa-y-corbata-de-pie.jpg"
import resena2 from "../assets/images/agenteReseña.jpg"
import resena3 from "../assets/images/sonriente-apuesto-hombre-de-negocios-apoyado-en-las-rodillas.jpg"

export const ResenaCima = () =>{
    return(
        <section className="bg-blue-primaryCima mt-48 pt-20 w-full h-auto px-8 2xl:px-20">
            <div className="flex justify-around text-white font-roboto gap-16 pb-8 border-b-2 border-gray-30 ">
                <article className="flex flex-col h-full w-80 gap-4">
                    <img className="w-full h-56" src={resena1} alt="" />
                    <h4 className="text-xl">Felipe Forigua</h4>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className="text-start w-full">CIMA me dio una estructura que nunca tuve en otras inmobiliarias. Hoy puedo enfocarme en vender mientras la operación fluye sin caos</p>
                </article>
                <article className="flex flex-col h-full w-80 gap-4">
                    <img className="w-full h-56" src={resena2} alt="" />
                    <h4 className="text-xl">Julian Martinez</h4>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className="text-start w-full">El acompañamiento y las herramientas son otro nivel. Pasé de trabajar solo y desordenado a sentirme parte de un equipo que realmente impulsa mi crecimiento.</p>
                </article>
                <article className="flex flex-col h-full w-80 gap-4">
                    <img className="w-full h-56" src={resena2} alt="" />
                    <h4 className="text-xl">Jorge Torres</h4>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className="text-start w-full">Lo que más valoro de CIMA es la claridad. Siento respaldo, procesos claros y una comunidad que te sostiene en los momentos difíciles.</p>
                </article>
                <article className="flex flex-col h-full w-80 gap-4">
                    <img className="w-full h-56" src={resena3} alt="" />
                    <h4 className="text-xl">Ricardo Orjuela</h4>
                    <span>⭐⭐⭐⭐⭐</span>
                    <p className="text-start w-full">Entré buscando capacitación y terminé encontrando un sistema completo. Todo está pensado para que puedas producir más sin quemarte.</p>
                </article>
            </div>
        </section>
    )
}