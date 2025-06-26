
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio rápidamente con una web lista en un día y soporte continuo." cta1="Empieza Ya" />
<How step1Title="Contáctanos ahora" step1Desc="Dinos sobre tu negocio y objetivos." step2Title="Creación exprés" step2Desc="Tu web lista en menos de 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar tus ventas online." />
<Aboutus headline="WebGo: Digitaliza y Crece Ya" subheadline="Conviértete en un líder online sin complicaciones ni tiempo extra." beneficiotitulo1="Implementación Rápida" beneficio1="Transforma tu negocio en días." beneficiotitulo2="Gestión Completa" beneficio2="Olvídate del estrés digital." />
<Services heading="Transforma Tu Negocio en 24 Horas" description="Rapidez, compromiso, innovación. La solución para digitalizar tus ventas de inmediato." services={[{"name":"Diseño Web Rápido","icon":"rocket","description":"Lanza tu sitio en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Mejora tu visibilidad y atrae más clientes."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia continua para tu tranquilidad."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido atractivo que genera interés."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras y rápidas."},{"name":"Análisis de Ventas","icon":"chart-bar","description":"Datos precisos para decisiones efectivas."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en soluciones web impresionantes y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ayuda a pasar del boca a boca a las ventas online de manera rápida y sin complicaciones. Nos encargamos de crear un sitio web atractivo y fácil de usar para que no tengas que preocuparte por nada. Así, puedes concentrarte en lo que mejor haces: manejar tu negocio."},{"pregunta":"¿Cuánto tiempo toma WebGo en implementar una tienda online?","respuesta":"En WebGo, sabemos que el tiempo es oro. Por eso, trabajamos rápido y con compromiso para lanzar tu tienda online lo antes posible. En solo unas semanas, estarás listo para vender por Internet."},{"pregunta":"¿Qué beneficios obtengo al elegir los servicios de WebGo?","respuesta":"Con WebGo, obtienes innovación, rapidez y compromiso. Transformamos tu negocio para que vendas online, aumentando tu alcance y tus ingresos. Además, te liberamos del trabajo de gestionar un sitio web tú mismo."},{"pregunta":"No tengo experiencia en ventas online, ¿cómo me ayudará WebGo?","respuesta":"No te preocupes si no tienes experiencia. En WebGo, creamos un sitio web fácil de usar y te guiamos en cada paso para que empieces a vender online sin complicaciones. Así, puedes centrarte en lo que mejor haces, que es crecer tu negocio."},{"pregunta":"¿Es caro digitalizar mi negocio con WebGo?","respuesta":"Con WebGo, obtienes un servicio de calidad por solo 120. Es una inversión que te permitirá expandir tu negocio al mundo digital, aumentando tus oportunidades de venta y haciéndolo mucho más rentable."}]} />
<BookAppointment 
                      heading="Digitaliza tu negocio ahora y multiplica tus ventas" 
                      description="En WebGo, transformamos tus recomendaciones en ventas online rápidas y efectivas. ¡Innovación y compromiso garantizados por solo 120! Contáctanos y empieza hoy."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
