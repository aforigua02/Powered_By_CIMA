import logo from "@/assets/images/logosCima/logo_BYCIMA.jpg";
import RedesSociales from "./common/IconoRedSociales";

const Footer = () => {
  return (
    <footer className="bg-blue-primaryCima text-white px-8 2xl:px-20 py-5 font-roboto">
      <div className="grid grid-cols-4 gap-16 content-center">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} className="w-20 rounded-full" alt="Logo de cima" />
          <RedesSociales size="h-7"/>
        </div>
        <div className="flex justify-center items-center text-center col-span-2 text-base font-bold px-8">
          <p>
            Impulsamos lera prosperidad del agente inmobiliario a través de
            formación, comunidad y tecnología diseñada para escalar sin
            fricción.
          </p>
        </div>
        <div className="flex justify-center items-center  rounded-2xl h-auto w-full">
          <div className="flex justify-between px-5 bg-white h-12 w-full rounded-2xl">
            <input
              type="email"
              name="emailfooter"
              id="emailfooter"
              placeholder="Correo electronico"
              className="bg-transparent placeholder-gray-400 text-black flex-1 text-sm font-bold outline-none"
            />
            <button type="submit">
              <img
                src="src/assets/icons/flecha-correcta.png"
                className="w-6 cursor-pointer"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 border-t-2 pt-2">
        <p>© Copyright 2025. All Rights Reserved</p>
        <ul className="flex justify-end gap-4">
          <li>
            <a href="">Política de Privacidad</a>
          </li>
          <li>
            <a href="">Descarga de Responsabilidad</a>
          </li>
          <li>
            <a href="">Poiltica de denuncia de irregularidades</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
