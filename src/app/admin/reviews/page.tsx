import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import "./../../../assets/styles/style.scss"
import Review from './Reviews'
import MainContainer from '@/app/MainContainer'

export const metadata: Metadata = {
    title: 'Отзывы',
    ...NO_INDEX_PAGE
}

export default function ReviewsPage() {
    return (
        <MainContainer>
            <Review/>
        </MainContainer>
    )
}
