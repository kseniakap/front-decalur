import Home from '@/app/Home'
import type { Metadata } from 'next'
import { getProducts } from './getAllProducts'
import { ProductService } from '@/services/product/product.service'

export const metadata: Metadata = {
	description:
		'Добро пожаловать! Магазин Декалюр. Декоративный кирпич. 3d панели. '
}

export const revalidate = 60

export default async function HomePage() {
	const data = await getProducts()
	const discountData = await ProductService.getAllDiscount()
	return (
		<Home
			products={data.products}
			discountProducts={discountData.products}
			length={data.length}
		/>
	)
}
