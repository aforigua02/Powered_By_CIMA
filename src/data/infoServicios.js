//imports de la vista home
import imgservices1 from "../assets/images/imagen_card1.jpg"
import imgservices2 from "../assets/images/imagen_card2.jpg"
import imgservices3 from "../assets/images/imagen_card3.jpg"
import imgservices4 from "../assets/images/imagen_card4.jpg"

//imports para iconos en la vista nuevos agentes
import iconmaximiarGanancias from "../assets/icons/icons_Vista_NuevosAgentes/maximizarGanancias.png"
import iconganancia from "../assets/icons/icons_Vista_NuevosAgentes/trending_up.png"
import iconmanos from "../assets/icons/icons_Vista_NuevosAgentes/manos.png"
import iconcrecimiento from "../assets/icons/icons_Vista_NuevosAgentes/desarrollo-de-habilidades.png"
import iconexperto from "../assets/icons/icons_Vista_NuevosAgentes/experto.png"
import icontecnologia from "../assets/icons/icons_Vista_NuevosAgentes/tecnologia-en-la-nube.png"
import iconcomunidad from "../assets/icons/icons_Vista_NuevosAgentes/comunidad.png"
import iconvisibilidad from "../assets/icons/icons_Vista_NuevosAgentes/visibilidad-web.png"

//importd de iconos redes sociales CIMA
import iconFacebook from "../assets/icons/facebook.png"
import iconWhatsApp from "../assets/icons/whatsapp.png"
import iconInstagram from "../assets/icons/instagram.png"
import iconInstagram_opaco from "../assets/icons/logotipo-de-instagram.png"

//-----Array de los iconos
export const iconosRedesociales = [
    {
        id:1,
        imagen:iconFacebook,
        titulo:"Icono de facebook"
    },
    {
        id:2,
        imagen:iconWhatsApp,
        titulo:"Icono de whatsapp"
    },
    {
        id:3,
        imagen:iconInstagram,
        titulo:"Icono de Instagram"
    },
]

//-----------------DATOS HOME-------

export const datosInmobiliarios = [ //Datos del StatsBar del home
        {
            id:1,
            titulo:"+1000",
            descripcion:"Casos de exito"
        },
        {
            id:2,
            titulo:"2500",
            descripcion:"Propiedades vendidas"
        },
        {
            id:3,
            titulo:"$20.3B",
            descripcion:"Vendidos en negocios"
        }
    ]
//cardServicios

export const serviciosCard = [ //Paginas y servicios que ofrece el home
        {
            id:1,
            imagen: imgservices1,
            titulo:"ENCONTRAR INMUEBLE"
        },
        {
            id:2,
            imagen: imgservices2,
            titulo:"UNIRME A CIMA"
        },
        {
            id:3,
            imagen: imgservices3,
            titulo:"ASESORIA"
        },
        {
            id:4,
            imagen: imgservices4,
            titulo:"ENCUENTRA UN AGENTE"
        }
    ]


//-----------DATOS ABOUT ME -------------------------

export const contenedorSuperioresCards = [ //Datos de el aboutme de cards superiores
        {
            id:1,
            imagen:"",
            titulo:"CIMA esta cambiando el futuro inmobiliario en latino america",
            descripcion:"Estamos construyendo un modelo donde la tecnología, la mentoría y la comunidad permiten que cualquier agente crezca sin límites ni desgaste. Un ecosistema diseñado para que la industria evolucione y el profesional prospere.",
            boton:"SEGUIR EL FUTURO",
            ruta:""
        },
        {
            id:2,
            imagen:"",
            titulo:"Creando un equipo dedicado y líder en el mercado ",
            descripcion:"Nuestro equipo reúne talento, disciplina y propósito. Formamos líderes que dominan su mercado con estructura, acompañamiento estratégico y herramientas que multiplican resultados sin perder humanidad.",
            boton:"CONOCE NUESTROS LIDERES",
            ruta:""
        },
        {
            id:3,
            imagen:"",
            titulo:"Se parte de nuestro ecosistema innovaodor",
            descripcion:"Si quieres una carrera donde la innovación, el aprendizaje continuo y la oportunidad real de crecimiento convergen, este es tu lugar. Aquí no caminas solo: escalas con guía, comunidad y claridad.",
            boton:"COMIENZA TU CARRERA",
            ruta:""
        }
    ]
export const statsDescripcion = [ //Statsbar de Aboutme para separar cards superior e inferior
        {
            id:1,
            titulo:"Explora el poder de Bycima"
        }
    ]
export const contenedorInferioresCards = [ //Datos de el aboutme de cards inferiores
        {
            id:4,
            imagen:"",
            titulo:"La compañía inmobiliaria más robusta del mercado",
            descripcion:"Operamos con una estructura que garantiza estabilidad, respaldo legal, tecnología integrada y acompañamiento real para que cada agente construya un negocio sólido y rentable.",
            boton:"CONOCE NUESTRA ESTRUCTURA",
            ruta:""
        },
        {
            id:5,
            imagen:"",
            titulo:"Dando presencia en el futuro inmobiliario",
            descripcion:"Impulsamos a cada agente a posicionarse en un mercado que evoluciona rápido. Les damos visibilidad, tecnología y un ecosistema que potencia su marca personal y sus resultados.",
            boton:"IMPULSA TU PRESENCIA",
            ruta:""
        },
        {
            id:6,
            imagen:"",
            titulo:"Un modelo creado para escalar contigo",
            descripcion:"Diseñamos un sistema donde la formación, la comunidad y la automatización se integran para que escales tu negocio sin fragmentarte. Un camino claro, medible y sostenible.",
            boton:"DESCUBRE CÓMO ESCALAR",
            ruta:""
        }
    ]

//--------------------- DATOS DE VISTA DE NUEVOS AGENTES

export const serviciosNuevosAgentes =[
    {
        id:1,
        icono:iconganancia,
        titulo:"Maximice sus ganancias",
        descripcion:"Aumente sus ingresos mientras nosotros asumimos la operación. Usted se enfoca en clientes y cierres."
    },
    {
        id:2,
        icono:iconmaximiarGanancias,
        titulo:"Eficiencia total",
        descripcion:"Todo fluye sin fricción: seguimiento claro, procesos simples y herramientas que trabajan por usted."
    },
    {
        id:3,
        icono:iconmanos,
        titulo:"Impacto Real",
        descripcion:"Genere relaciones que perduran. Usted aporta el talento; nosotros le damos estructura para crecer."
    },
    {
        id:4,
        icono:iconcrecimiento,
        titulo:"Crecimiento sin desgaste",
        descripcion:"Avance con un sistema que ordena su negocio, reduce carga y potencia cada oportunidad."
    },
    {
        id:5,
        icono:iconexperto,
        titulo:"Acompañamiento experto",
        descripcion:"No trabaja solo. Recibe guía clara, soporte diario y un equipo que lo impulsa a avanzar con seguridad."
    },
    {
        id:6,
        icono:icontecnologia,
        titulo:"Tecnología que simplifica",
        descripcion:"Herramientas inteligentes que hacen el trabajo pesado: automatización, seguimiento y control en un solo lugar."
    },
    {
        id:7,
        icono:iconcomunidad,
        titulo:"Comunidad que impulsa",
        descripcion:"Conecte con agentes que comparten metas, buenas prácticas y oportunidades reales para crecer juntos."
    },
    {
        id:8,
        icono:iconvisibilidad,
        titulo:"Visibilidad garantizada",
        descripcion:"Sus propiedades llegan donde deben estar: portales, campañas y difusión profesional sin esfuerzo adicional."
    },
]

//---------StastBar de Nuevos agentes
export const statsBarNuevoAgente = [
    {
        id:1,
        descripcion:"¿Te gustaría conversar con el equipo de Talento de CIMA para explorar oportunidades?",
        buttom:"¡COMIENZA AHORA!"
    }
]

// ----------Img de seccion de redes en Pestaña nuevos agentes
export const redesCima = [
    {
        id:1,
        imagen:imgservices3,
        titulo:"Powered By Cima",
        url:""
    },
    {
        id:2,
        imagen:imgservices3,
        titulo:"Powered By Cima",
        url:""
    },
    {
        id:3,
        imagen:imgservices3,
        titulo:"Powered By Cima",
        url:""
    },
    {
        id:4,
        imagen:imgservices3,
        titulo:"Powered By Cima",
        url:""
    },
    {
        id:5,
        imagen:imgservices3,
        titulo:"Powered By Cima",
        url:""
    },
    {
        id:6,
        imagen:imgservices3,
        titulo:"Powered By Cima",
        url:""
    },
]

