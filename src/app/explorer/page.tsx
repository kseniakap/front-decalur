import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { TypeParamsFilters } from '@/services/product/product.types'
import ProductExplorer from './ProductExplorer'
import MainContainer from '../MainContainer'
import Header from '@/ui/header/Header'
import Footer from '@/components/footer/Footer'
import { getProducts } from './getAllProduct'

export const metadata: Metadata = {
    title: 'Каталог',
    ...NO_INDEX_PAGE
}

export const revalidate = 60

export default async function ExplorerPage({searchParams}: TypeParamsFilters) {
    const data = await getProducts(searchParams)
    return (
        <>
        <MainContainer>
            <Header/>
            <ProductExplorer initialProducts={data}/>
        </MainContainer>
        <Footer/>
        </>
    )  
}
