import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MainContainer from '../MainContainer'
import Header from '@/ui/header/Header'
import Footer from '@/components/footer/Footer'
import Delivery from '@/components/delivery/Delivery'

export const metadata: Metadata = {
    title: 'Доставка и оплата',
    ...NO_INDEX_PAGE
}

export default function DeliveryPage() {
    return (
    <>
        <MainContainer>
            <Header/>
            <Delivery/>          
        </MainContainer>
        <Footer/>
    </>
    )
  
}
