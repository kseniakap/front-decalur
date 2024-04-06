'use client'

import type{ FC } from "react";
import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import st from "./ProductItem.module.scss"

const AddToCartButton: FC<{product: IProduct}> = ({product}) =>{
    const {addToCart, removeFromCart} = useActions()
    const {items} = useCart()
    
    const currentElement = items.find(cartItem => cartItem.product.id === product.id)

    return (
        <button className={st.addBtn} style={{backgroundColor: currentElement ? " #CDCDCD" : "#299EF4"}} onClick ={(e)=> {
            e.preventDefault();
            currentElement ? removeFromCart({id: currentElement.id}) : addToCart({
                product, 
                quantity: 1, 
                price: product.price
            })
        }}>
            {
               <Image width={36} height={20} src="/images/addItemInBasket.svg" alt="корзина"/> 
            }
          
        </button>
    )
}

export default AddToCartButton