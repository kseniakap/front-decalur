
import { axiosClassic, instance } from "@/api/api.interceptor"
import { IProduct, TypePaginationProducts } from "@/types/product.interface"
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types"

export const ProductService = {

    async getAll(queryData = {} as TypeProductDataFilters){
        const {data} = await axiosClassic<TypePaginationProducts>({
            url: PRODUCTS,
            method:"GET", 
            params: queryData
        })
        return data
    },

    async getAllDiscount(){
        const {data} = await axiosClassic({
            url: PRODUCTS,
            method:"GET", 
        })
        return data
    },


    
    async getSimilar(id: string | number){
        return axiosClassic<IProduct[]>({
            url: `${PRODUCTS}/similar/${id}`,
            method:"GET",
        })
    }, 

    async getBySlug(slug: string){
        const {data} = await axiosClassic<IProduct>({
            url: `${PRODUCTS}/by-slug/${slug}`,
            method:"GET",
        })

        return data
    }, 

    async getByCategory(categorySlug: string){
        return axiosClassic<IProduct[]>({
            url: `${PRODUCTS}/by-category/${categorySlug}`,
            method:"GET",
        })
    }, 

    async getById(id: string | number){
        return instance<IProduct>({
            url: `${PRODUCTS}/${id}`,
            method:"GET",
        })
    }, 

    //Создание нового товара
    async create (data: IProduct){
          return axiosClassic<IProduct>({
            url: PRODUCTS,
            method:"POST", 
            data
        })
    }, 
 
    //Обновление товара
    async update(id: string | number, data: TypeProductData){
        return instance<IProduct>({
            url:`${PRODUCTS}/${id}`,
            method:"PUT", 
            data
        })
    }, 

    async delete(id: string | number){
        return instance<IProduct>({
            url:`${PRODUCTS}/${id}`,
            method:"DELETE", 
        })
    }, 
}