'use client'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/types/cart.interface'
import { FC } from 'react'
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"
import { FaTrashAlt } from "react-icons/fa";
import st from "./CartItem.module.scss"
import { IProduct } from '@/types/product.interface'

const CartChangeAmount: FC<{item: ICartItem}>= ({item}) => {
    const {removeFromCart, changeQuantity } = useActions()
    const {items} = useCart()
    const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity
  return (
    <div className={st.changeAmount}>
      <div>
        <div className={st.block}>
            <button onClick={()=> changeQuantity({id: item.id, value:-1})} disabled={quantity === 1}>
              <FiMinusCircle  fontSize={20} />
            </button>
            <span>{quantity}</span>
            <button onClick={()=> changeQuantity({id: item.id, value: 1})} >
              <FiPlusCircle fontSize={20} />
            </button>
            <button className={st.addTen} onClick={() => changeQuantity({id: item.id, value: 10})}>
            + 10
            </button>
        </div>
      </div>
        <button onClick={()=> removeFromCart({id: item.id})}>
            <FaTrashAlt />
        </button>
    </div>
  )
}

export default CartChangeAmount
