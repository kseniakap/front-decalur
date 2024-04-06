import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Orders from './Oders'
import "./../../../assets/styles/style.scss"
import MainContainer from '@/app/MainContainer'

export const metadata: Metadata = {
    title: 'Заказы',
    ...NO_INDEX_PAGE
}

export default function ProductPage() {
    return(
        <MainContainer>
             <Orders/>
        </MainContainer>
    )
}
