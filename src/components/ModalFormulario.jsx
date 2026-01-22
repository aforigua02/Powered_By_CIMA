export default function ModalFormulario({onClose}) {
    return (
        <div className="fixed inset-0 z-100 bg-transparent flex  justify-end animate-fad">
            <div className="flex items-center justify-center relative bg-blue-primaryCima w-110 px-10 animate-slide">
                <button onClick={onClose} className="absolute left-5 top-4 text-xl text-white">X</button>
                <div className="relative text-black font-roboto inset-0 bg-white p-5 rounded-xl w-full max-w-md scroll-">
                    <div className="">
                        <h2 className="text-2xl mb-8 text-blue-primaryCima font-semibold text-center">SE PARTE DE NUESTRO ECOSISTEMA</h2>
                        <form action="" className="flex flex-col gap-5">
                            <div className="flex flex-col py-1">
                                <label htmlFor="" className="font-medium font-roboto text-gray-500">Nombre Completo</label>
                                <div className="flex gap-2 items-center">
                                    <span><img src="src/assets/icons/icons_forms/usuario (1).png" alt="icono de usuario" className="w-5"/></span> <input type="text" className="bg-white rounded border-b-2 focus:outline-none border-gray-300 w-full" placeholder='Ej: Felipe'/>
                                </div>
                            </div>
                            <div className="flex flex-col py-1">
                                <label htmlFor="" className="font-medium font-roboto text-gray-500">Correo electronico</label>
                                <div className="flex gap-2 items-center">
                                    <span><img src="src/assets/icons/icons_forms/correo.png"  alt="Icono de email" className="w-5" /></span><input type="Email" className="bg-white rounded border-b-2 focus:outline-none border-gray-300 w-full" placeholder='Ej: ejemplo@email.com'/>
                                </div>
                            </div>
                            <div className="flex flex-col py-1">
                                <label htmlFor="" className="font-medium font-roboto text-gray-500">Numero de celular</label>
                                <div className="flex gap-2 items-center">
                                    <span><img src="src/assets/icons/icons_forms/llamar.png" alt="icono de movil"  className="w-5"/></span><input type="text" className="bg-white rounded border-b-2 focus:outline-none border-gray-300 w-full" placeholder='Ej: +57 3001234567'/>
                                </div>
                            </div>
                            <div className="flex flex-col py-1">
                                <label htmlFor="" className="font-medium font-roboto text-gray-500">Ubicación</label>
                                <input type="text" className="bg-white rounded border-b-2 focus:outline-none border-gray-300" placeholder='Ej: Cajicá, Cundinamarca'/>
                            </div>
                            <button type="submit" className="font-bold bg-red-secundaryCima text-white p-2 ">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
)
}
