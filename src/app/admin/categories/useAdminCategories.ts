import { useMutation, useQuery } from "react-query"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { CategoryService } from "@/services/category.service"

export const useAdminAllCategories = ()=>{
    const {data, isFetching, refetch} = useQuery(['get admin all categories'], 
    ()=> CategoryService.getAll(),
    {
        select: ({data})=> data.map((category):IListItem=>{
            return {
                id: category.id, 
                viewUrl: `/category/${category.slug}`,
                items:[
                    category.name, 
                ],
                image: category.images,
            }
        })
    })

    const {mutate} = useMutation(
        ["delete category"], 
        (id:number) => CategoryService.delete(id), 
        {
            onSuccess(){
                refetch()
            }
        }
    )

    return {data, isFetching, mutate}
}