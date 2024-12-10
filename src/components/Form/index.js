import { useState } from "react";
import User from "../User";
import "../Form/styles.css"
const Form =()=>{
    const [value,setValue]=useState(
        {
            username:"",
            password:"",
        }
    );
    const [user,setUser]=useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevState) => ({ ...prevState, [name]: value }));
      };
    
    const handleSubmit=(e)=>{
        e.preventDefault(e)
        setUser(value.username);
    }
    return(
        user.length>0
        ?<User user={value.username}/>
        :(
        <form onSubmit={(e)=>handleSubmit(e)} >
            <input className="form_element" type="text" name="username" placeholder="User" value={value.username} onChange={(e)=>handleChange(e)} />
            <input className="form_element" type="password" name="password" placeholder="Password" value={value.password} onChange={(e)=>handleChange(e)}/>
            <button className="form_button">Ingresar</button>
        </form>
        )
    )
}
export default Form;