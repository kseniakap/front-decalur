import { ProductService } from "@/services/product/product.service"

export async function getProducts() {
    const data = await ProductService.getAll({
        page:1, 
        perPage:6,
        ratings: ""
    })
    return data
}