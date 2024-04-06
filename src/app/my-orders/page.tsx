import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import MyOrders from './MyOrders'
import MainContainer from '../MainContainer'
import Header from '@/ui/header/Header'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
    title: 'Мои заказы',
    ...NO_INDEX_PAGE
}

export default function MyOrdersPage() {
    return (
        <>
            <MainContainer>
                <Header/>
                <MyOrders/>
            </MainContainer>
            <Footer/>
        </>
    )
}