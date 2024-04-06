import  { FC } from 'react'
import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convertPrice'
import CartChangeAmount from './CartChangeAmount'

import st from "./CartItem.module.scss"

const CartItem:FC<{item: ICartItem}> = ({item}) => {
  console.log(item)
  return (
    <div className={st.item}>
      <div className={st.top}>
        <img src={`${process.env.SERVER_UPLOADS}/${item.product.images[0]}`} width={80} height={60} alt ={item.product.name}/>
        <div>
          <div className={st.name}>{item.product.name}</div>
          <p>{convertPrice(item.product.price)} / м³</p>
        </div>
      </div>
      {!item.product.isStock ? <div className={st.isNotStock}>Нет в наличии</div> :   <CartChangeAmount item={item}/>}    
    </div>
  )
}

export default CartItem
