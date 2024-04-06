import { instance } from "@/api/api.interceptor"
import { IOrder } from "@/types/order.interface"

const ORDERS = "orders"

enum EnumOrderStatus {
    PENDING = "PENDING", 
    PAYED = "PAYED",
    SHIPPED =  "SHIPPED", 
    DELIVERED = "DELIVERED"
}

type TypeData = {
    status?: EnumOrderStatus, 
    items:{
        quantity: number
        productId: number
        price: number
    }[]
}

export const  OrdersService = {
    async getAll(){
        return instance<IOrder[]>({
            url: ORDERS,
            method:"GET"
        })
    },  

    async getById(id: string | number){
        return instance<IOrder[]>({
            url:`${ORDERS}/${id}`,
            method:"GET"
        })
    },   

    async getByUserId(){
        return instance<IOrder[]>({
            url:`${ORDERS}/by-user`,
            method:"GET"
        })
    },

    async deleteOrder(id: string | number){
        return instance<IOrder[]>({
            url:`${ORDERS}/${id}`,
            method:"DELETE"
        })
    },


    
    async placeOrder(data: TypeData){
        //если реализуешь оплату
        // return instance<{comfirmation:{comfirmationUrl: string}}>({
        //     url: ORDERS,
        //     method: "POST",
        //     data
        // })

        return instance<{comfirmation:{comfirmation_url: string}}>({
            url: ORDERS,
            method: "POST",
            data
        })
    }
}