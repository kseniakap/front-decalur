import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Products from './Categories'
import "./../../../assets/styles/style.scss"
import MainContainer from '@/app/MainContainer'

export const metadata: Metadata = {
    title: 'Категории товаров',
    ...NO_INDEX_PAGE
}

export default function CategoriesPage() {
    return (
        <MainContainer>
            <Products/>
        </MainContainer>
    )
}
