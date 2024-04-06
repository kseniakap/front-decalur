import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Favorites from './Favorites'
import MainContainer from '../MainContainer'
import Header from '@/ui/header/Header'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
    title: 'Избранное',
    ...NO_INDEX_PAGE
}

export default function FavoritesPage() {
    return (
    <>
        <MainContainer>
            <Header/>
            <Favorites/>
          
        </MainContainer>
        <Footer/>
    </>
    )
  
}
