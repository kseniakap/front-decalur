import { useMutation, useQuery } from "react-query"
import { ProductService } from "@/services/product/product.service"
import { IListItem } from "@/ui/admin/admin-list/admin-list.interface"
import { convertPrice } from "@/utils/convertPrice"

//получение всех товаров на странице админа
//refetch для того, чтобы в случае изменений данных(удаление), 
//произоишло изменение без перезагрузки страницы
export const useAdminAllProducts = ()=>{
    const {data, isFetching, refetch} = useQuery(['get admin all products'], 
    ()=> ProductService.getAll(),
    {
        select: data=> data.products.map((product):IListItem=>{
            return {
                id: product.id, 
                viewUrl: `/product/${product.slug}`,
                // editUrl: getAdminUrl(`/createproduct`),
                items:[
                    `# ${product.id}`,
                    product.name, 
                    convertPrice(product.price),
                    product?.category?.name,                     
                              
                ],
                image: `${process.env.SERVER_UPLOADS}/${product?.images[0]}`,
                isDiscount: product.isDiscount, 
                isStock: product.isStock 
            }
        })
    })

    const { mutate: mutateDelete } = useMutation(
        ["delete product"],
        (id: number) => ProductService.delete(id),
        {
            onSuccess() {
                refetch()
            },
            onError(err) {
                console.error(err);
            }
        }
    )
    return { data, isFetching, mutateDelete }
}