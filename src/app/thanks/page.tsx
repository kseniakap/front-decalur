import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Thanks from './Thanks'
import MainContainer from '../MainContainer'
import Header from '@/ui/header/Header'

export const metadata: Metadata = {
    title: 'Благодарность',
    ...NO_INDEX_PAGE
}

export default function ThanksPage() {
    return (
        <MainContainer>
            <Header/>
            <Thanks/>
        </MainContainer>
    )
}
