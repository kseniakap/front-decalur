import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import CreateCategory from './CreateCategory'
import MainContainer from '@/app/MainContainer'


export const metadata: Metadata = {
    title: 'Создание категории',
    ...NO_INDEX_PAGE
}

export default function CreateProductPage() {
    return (
        <MainContainer>
            <CreateCategory/>
        </MainContainer>
    )
}
