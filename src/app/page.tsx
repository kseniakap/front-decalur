import Home from '@/app/Home'
import type { Metadata } from 'next'
import { getProducts } from './getAllProducts'


export const metadata: Metadata = {
    description:"Добро пожаловать! Магазин Декалюр. Декоративный кирпич. 3d панели. "
}

export const revalidate = 60

export default async function HomePage() {
    const data = await getProducts()
    // const dataDiscount = await ProductService.getAllDiscount()
    return (
        <Home products ={data.products} length={data.length}/>  
    )
}
