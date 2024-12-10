import Footer from "../components/Footer";
import Header from "../components/Header";
import tienda from "../assets/tienda.jpg"
import excelencia from "../assets/excelencia.png";
import equipo from "../assets/equipo.png";
import clientes from "../assets/clientes.png";
import "../pages/styles.css"

const About=()=>{
    return(
        <>
        <Header/>
         <section className="aboutImg_container">
            <img src={tienda} alt="Tienda"/>
         </section>
        <section className="aboutUs_main">
            <h1>Nuestra historia</h1>
            <p>
                C&A es una marca europea de moda, establecida durante1841 en Holanda por los hermanos Clemens y August Brenninkmeijer. Tiene presencia en 21 países alrededor del mundo, con más de 2500 tiendas y mas de 40 mil colaboradores.<br/> 
                Su operación en México inició en 1999 y actualmente tiene más de 80 sucursales en toda la República, así como una tienda en línea. Cuenta con cerca de 3,500 colaboradores, quienes suman a un modelo de negocio sustentable que tiene como misión la mejor opción de moda casual, accesible y de manera responsable a las familias mexicanas. <br/>
                En 2023, C&A México se incorpora al portafolio de Grupo Alfar, ampliando así su oferta y desponibilidad de producto, e iniciando una etapa de evolución que apunta al crecimiento acelerado. 
            </p>
        </section>  
        <section>
            <section className="aboutUs_secondary">
                <div className="secondary_container">
                    <h2>Misión</h2>
                    <p>
                        Diseñamos y ofrecemos la mejor opción de moda casual, accesible y de manera responsable, con la mejor experiencia. 
                    </p>
                </div>
                <div className="secondary_container">
                    <h2>Visión</h2>
                    <p>
                        Ser la marca europea más amada de moda casual en México, con una cultura orientada al cliente de manera transversal, ágil y sostenible.
                    </p>
                </div>
            </section>
            <section className="valuesMain_container">
                <h2>Nuestros valores</h2>
                <section className="values_container">
                    <div className="values_element">
                        <div className="valuesImg_container">
                            <img src={excelencia} alt="excelencia valores"/>
                        </div>
                        <h3>Excelencia</h3>
                    </div>
                    <div className="values_element">
                        <div className="valuesImg_container">
                            <img src={clientes} alt="clientes"/>
                        </div>
                        <h3>Clientes</h3>
                    </div>
                    <div className="values_element">
                        <div className="valuesImg_container">
                            <img src={equipo} alt="equipo"/>
                        </div>
                        <h3>Equipo</h3>
                    </div>
                </section>
            </section>
        </section>
        <Footer/>
        </>
    )
}
export default About;