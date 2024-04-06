import { useMutation, useQuery } from "react-query"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { getAdminUrl } from "@/config/url.config"
import { ReviewService } from "@/services/review.service"

export const useAdminReviews = ()=>{

    const {data, isFetching, refetch} = useQuery(['get admin all reviews'], 
    ()=> ReviewService.getAll(),
    {
        select: ({data})=> data.map((review):IListItem=>{
            return {
                id: review.id, 
                items:[
                    `${review.rating} ☆` , 
                    review.createdAt,       
                    review.text, 
                                
                ]
            }
        })
    })
    const {mutate} = useMutation(
        ["delete product"], 
        (id:number) => ReviewService.delete(id), 
        {
            onSuccess(){
                refetch()
            }
        }
    )

    return {data, isFetching, mutate}
}