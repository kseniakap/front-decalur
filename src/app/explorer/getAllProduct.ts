import { ProductService } from "@/services/product/product.service"
import { TypeProductDataFilters } from "@/services/product/product.types"

export async function getProducts(searchParams: TypeProductDataFilters) {
    const data = await ProductService.getAll(searchParams)
    return data
}
