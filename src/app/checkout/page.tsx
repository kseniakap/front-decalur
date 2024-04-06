import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Checkout from './CheckOut'
import MainContainer from '../MainContainer'
import Header from '@/ui/header/Header'
import Footer from '@/components/footer/Footer'
import { getProducts } from './getAllProduct'

export const revalidate = 60

export default async function CheckOutPage() {
    const data = await getProducts()
    return (
        <>
        <MainContainer>
            <Header/>
            <Checkout products={data?.products}/>  
        </MainContainer>
        <Footer/>  
        </>     
    )
}
