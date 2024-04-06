'use client'
import { useCart } from "@/hooks/useCart";
import { useOutsise } from "@/hooks/useOutsise";
import { FC } from "react";
import SquareButton from "../button/SquareButton";
import { IoCartOutline } from "react-icons/io5";
import { convertPrice } from "@/utils/convertPrice";
import CartItem from "./cart-item/CartItem";
import Link from "next/link";
import { useProfile } from "@/hooks/useProfile"

import st from "./HeaderCart.module.scss"

const Cart:FC = () =>{
    const {isShow, setIsShow, ref}= useOutsise(false)
    const{items, total} = useCart()
    const {profile} = useProfile()

    // const {reset} = useActions()
    // const {push} = useRouter()  

    // const { mutate } = useMutation({
    //     mutationKey: ['create order'],
    //     mutationFn: () => OrdersService.placeOrder({
    //         items: items.map(item =>({
    //             price:item.price,
    //             quantity: item.quantity,
    //             productId: item.product.id
    //         })),
    //     }),
    //     onSuccess: ({data}) => {
    //       console.log('onSuccess');
    //       reset()
    //      push(data.comfirmation.comfirmation_url)
    //     },
    // });

    return (
        <div className={st.headerCart}
         ref = {ref}
          >
            <SquareButton Icon = {IoCartOutline} onClick={()=>{
                setIsShow(!isShow)
            }}  number ={items.length}/>
          {
            isShow && (
                <div  className={st.wrapper}>
                    <h2>Корзина</h2>
                    <div className="">
                        {
                            items?.length ? (
                             <>
                                {
                                   <div className={st.content}>
                                    {
                                        items.map(item =>( <CartItem item ={item} key={item.id}/>))
                                    }
                                   </div>
                                }
                                <div className={st.footer}>
                                    <div>Общая стоимость:</div>
                                    <p>{convertPrice(total)}</p>
                                     {/* <Button onClick ={()=> mutate()} variant="yellow">Перейти к заказу</Button> */}
                                    {
                                        profile ? <Link href="/checkout" className={st.checkOut}onClick= {()=>setIsShow(false)}>Перейти к заказу</Link> :  <Link href="/auth" className={st.checkOut} onClick= {()=>setIsShow(false)}>Необходимо авторизоваться
                                    </Link>
                                    }

                                </div>
                             </>
                            ) :(
                                <div className=""> Ваша корзина пуста</div>
                            )
                        }
                    </div>
                 </div>
            )
          }
        </div>
    )
}

export default Cart