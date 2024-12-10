import Mail from "../../icon/Mail";
import Phone from "../../icon/Phone";
import { Link } from "react-router-dom"
import "../Footer/style.css"
import Facebook from "../../icon/Facebook";
import Instagram from "../../icon/Instagram";
import Tictok from "../../icon/TiKtok";
const Footer=()=>{
    return(
        <section className="footer_mainContainer">
            <section className="footer_info">
                <h2>Información</h2>
                <div className="footerInfo_element">
                        <Mail/>    
                        <p>contacto@ecomerce.com.mx</p>
                </div>
                <div className="footerInfo_element">
                    <Phone/>
                    <p>55- 76-56-84-79</p>
                </div>
            </section>
            <section className="footer_us">
                <h2>Nosotros</h2>
                <div className="footerUs_element">
                    <Link to="/about" className="footer_link">about</Link>
                    <span className="footer_link">Facturación</span>
                    <span className="footer_link">Tiendas</span>
                </div>
            </section>
            <section className="footer_social">
                <h2>Siguenos</h2>
                <div>
                    <Facebook/>
                    <Instagram/>
                    <Tictok/>
                </div>
            </section>
        </section>
    )
}
export default Footer;