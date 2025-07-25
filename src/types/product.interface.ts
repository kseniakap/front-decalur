import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug?: string
	description: string
	price: number
	measure: string
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
	categoryId?: number
	isDiscount: boolean
	isStock: boolean
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
	discountProducts: IProduct[]
}
