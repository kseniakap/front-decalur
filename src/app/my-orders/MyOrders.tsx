'use client'

import { OrdersService } from "@/services/order.service";
import Heading from "@/ui/heading/Heading";
import { convertPrice } from "@/utils/convertPrice";
import { useQuery } from "react-query";

interface IMyOrders {}

export default function MyOrders({}: IMyOrders) {
    const {data: orders} = useQuery({
        queryKey: ['my order'],
        queryFn: ()  => OrdersService.getByUserId(),
        select: ({ data }) => data
      });

    return(
        <>
            <Heading>Моя корзина</Heading>     
            <section>
                {orders?.length ? orders.map(order=>(
                    <div className="" key ={order.id} style={{display: "flex", gap:"20px"}} >
                        <span>#{order.id}</span>
                        <span>{order.status}</span>
                        <span>{new Date(order.createdAt).toLocaleDateString("ru-Ru")}</span>
                        <span>{convertPrice(order.total)}</span>
                    </div>
                    )) : (<div>Заказов нет</div>)
                }
            </section> 
        </>   
    )
}
