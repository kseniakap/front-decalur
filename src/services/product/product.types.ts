export const PRODUCTS = "products"

export type TypeProductData = {
    id: number,
    name: string, 
    price: number, 
    measure: string, 
    description?: string, 
    slug?: string, 
    images: string[], 
    categoryId: number,
    isDiscount: boolean, 
    isStock: boolean
}

export type TypeProductDataFilters={
    sort?:EnumProductSort | string, 
    searchTerm?: string,
    page?: string | number, 
    perPage?: string | number,
    ratings?: string,
    minPrice?: string,
    maxPrice?: string,
    categoryId?: string
}

export enum EnumProductSort{
    HIGH_PRICE = "high-price", 
    LOW_PRICE="low-price", 
    NEWEST = "newest", 
    OLDEST = "oldest"
}


export type TypeParamsFilters = {
    searchParams: TypeProductDataFilters
}