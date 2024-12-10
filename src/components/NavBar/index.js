import { Link } from "react-router-dom"
import "../NavBar/styles.css"
const NavBar=()=>{
    return(
        <nav className="header_nav">
            <Link to='/' className="header_link">Home</Link>
            <Link to="/about" className="header_link">about</Link>
        </nav>
    )
}
export default NavBar;