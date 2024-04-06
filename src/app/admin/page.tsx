import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Dashboard from './Dashboard'
import MainContainer from '../MainContainer'

export const metadata: Metadata = {
    title: 'Панель админа',
    ...NO_INDEX_PAGE
}

export default function DashboardPage() {
    return (
        <MainContainer>
            <Dashboard/>
        </MainContainer>
    )
   
}
