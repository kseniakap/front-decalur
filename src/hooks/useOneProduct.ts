import { ProductService } from "@/services/product/product.service"
import { useQuery } from "react-query"


export const useOneProduct = (id: string | number) => {
    const {data: product, isLoading} = useQuery(
        ['get one product'],
        () => ProductService.getById(id),
        {
            select: ({data}) => data
        }
      )
  return {product, isLoading}
}


