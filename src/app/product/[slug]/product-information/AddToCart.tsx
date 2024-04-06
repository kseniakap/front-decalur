'use client'
import { FC } from "react"
import { useActions } from "@/hooks/useActions"
import { useCart } from "@/hooks/useCart"
import { IProduct } from "@/types/product.interface"
import st from "./ProductInformation.module.scss"
import Button from "@/ui/button/Button"


const AddToCart: FC<{product: IProduct}> = ({product}) =>{
    const {addToCart, removeFromCart} = useActions()
    const {items} = useCart()
    
    const currentElement = items.find(cartItem => cartItem.product.id === product.id)

    return (
        <Button  style={{marginBottom:"5px", marginRight:"5px"}} variant="blue" className={st.addBtn}onClick ={()=>currentElement ? removeFromCart({id: currentElement.id}) : addToCart({
            product, 
            quantity: 1, 
            price: product.price
        })}>
            {currentElement ?  "Убрать товар" : "Добавить в корзину" }
        </Button>
    )
}

export default AddToCart