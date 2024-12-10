import React from "react";
import ProductsContainer from "../ProductsContainer";
import useAxios from "../../hooks/useAxios";
const ProductsFlex=()=>{
    const {data}=useAxios("https://fakestoreapi.com/products");

    return(
        <>

            <section className="product_container">
                {
                    data.map(product=>{
                        const {id,image,title,price}=product
                        return <ProductsContainer key={id} image={image} title={title} price={price}/>
                    })
                }
            </section>
        </>
    )
}
export default ProductsFlex;