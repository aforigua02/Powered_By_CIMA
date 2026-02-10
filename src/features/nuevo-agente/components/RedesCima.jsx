import { redesCima } from "@/data/infoServicios";
import RedesSociales from "@/components/common/IconoRedSociales";
function RedesCima() {
    return (
        <section className="flex flex-col gap-10 mb-20">
        <h4 className="text-3xl w-full text-center font-semibold font-roboto">
            Conozca CIMA
        </h4>
        <ul className="flex w-full items-center justify-center gap-5">
            <RedesSociales size="h-10"/>
        </ul>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-auto">
            {redesCima.map((item) => {
            return (
                <li key={item.id} className="w-auto h-auto">
                    <a href="" className="relative">
                        <figure className="relative">
                            <img
                                src="src/assets/icons/icons_redSocial/logotipo-de-instagram.png"
                                alt=""
                                className="absolute h-6 m-5 z-10 "
                            />
                            <img
                                src={item.imagen}
                                alt=""
                                className="h-80 w-80 rounded-2xl object-cover"
                            />
                        </figure>
                        <figcaption className="flex items-center justify-center absolute bottom-0 w-full text-center font-semibold text-white text-xl font-roboto bg-gray-300/25 h-16">
                        {item.titulo}
                        </figcaption>
                    </a>
                </li>
            );
            })}
        </ul>
        </section>
    );
}

export default RedesCima;
