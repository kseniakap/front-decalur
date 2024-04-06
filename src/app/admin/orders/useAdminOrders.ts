import { useMutation, useQuery } from "react-query"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { OrdersService } from "@/services/order.service"
import { convertPrice } from "@/utils/convertPrice"
import { formatDate } from "@/utils/format-date"

export const useAdminAllOrders = ()=>{

    const {data, isFetching, refetch} = useQuery(['get admin all orders'], 
    ()=> OrdersService.getAll(),
    {
        select: ({data}) => data.map((order):IListItem=>{
            return {
                id: order.id, 
                showOrder: true,
                // editUrl: getAdminUrl(`/products/edit/${order.id}`),
                items:[
                    `# ${order.id}`,
                    convertPrice(order.total),
                    order.user.name,
                    order.user.phone, 
                    formatDate(order.createdAt)
                ],
                ordersArrray: order.items             
            }
        })
    })
    const {mutate} = useMutation(
        ["delete order"], 
        (id:number) => OrdersService.deleteOrder(id), 
        {
            onSuccess(){
                refetch()
            }
        }
    )

    return {data, isFetching, mutate}
}