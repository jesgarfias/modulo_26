import "../ProductsContainer/styles.css"
import Favorites from "../../icon/Favorites";
const ProductsContainer=({id,image,title,price})=>{
    return(
        <section className="products_container">
            <section id={id} className="product_img">
                <img src={image}/>
            </section>
            <p>{title}</p>
            <span>${price}</span>
            <div className="addToCart">
                <span>Compra rapida</span>
                <Favorites/>
            </div>
        </section>
    )
}
export default ProductsContainer;