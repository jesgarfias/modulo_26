import React from "react"
import NavBar from "../NavBar"
import Logo from "../../icon/Logo"
import Cart from "../../icon/Cart"
import Favorites from "../../icon/Favorites"
import Form from "../Form"
import "../Header/styless.css"
const Header =()=>{
    return(
        <header className="header">
            <section>
                <Logo/>
            </section>
           <NavBar/> 
           <section className="header_info">
                <Cart/>
                <Favorites/>
           </section>
           <section className="headerUser_loging">
             <Form/>
           </section>
        </header>
    )
}
export default Header