import type{ FC } from "react";
import { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convertPrice";

import st from "./CheckOutItem.module.scss"

const CheckOutItem:FC<{product: IProduct, quantity: number}>=({product, quantity}) =>{

   return (
    <div className={st.item}>
        <img src={`${process.env.SERVER_UPLOADS}/${product.images[0]}`} alt={product.name}/>
        <p className={st.name}>{product.name}</p>   
        <p>{convertPrice(product.price)}</p>
        <p>{quantity} {product.measure}</p>
        <p>{+quantity * +product.price} ₽</p>
    </div>
   )
}

export default CheckOutItem