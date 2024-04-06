'use client'

import { TypePaginationProducts } from '@/types/product.interface'
import React, { FC } from 'react'
import { useFilters } from './useFilters'
import { useQuery } from 'react-query'
import { ProductService } from '@/services/product/product.service'
import Heading from '@/ui/heading/Heading'
import Catalog from '@/ui/catalog/Catalog'
import Pagination from './pagination/Pagination'
import SortDropDown from './sort/SortDropDown'
import AllFilters from './filters/AllFilters'
import st from "./ProductExplorer.module.scss"
import MainContainer from '../MainContainer'
 

interface IProductExplorer{
    initialProducts: TypePaginationProducts
}

const ProductExplorer:FC<IProductExplorer>= ({initialProducts}) => {
    const {isFilterUpdated, queryRapams, updateQueryParams} = useFilters()

    const {data, isFetching} = useQuery(
        ['product explorer', queryRapams], 
        ()=> ProductService.getAll(queryRapams),
        {
            initialData: initialProducts, 
            enabled: isFilterUpdated
        }
    )
  return (
    <MainContainer>
        <Heading>
            {queryRapams.searchTerm ? `Поиск по "${queryRapams.searchTerm}"` : "Каталог товаров"}
        </Heading>
        <SortDropDown/>
       
        <section className={st.catalog}>
            <aside>
                <AllFilters/>
            </aside>
           <div className={st.wrapper}>
            <Catalog products={data?.products || []} isLoading={isFetching}/>
                {data && data.length > 0 && (
                    <Pagination
                    changePage={page=> updateQueryParams("page", page.toString())} 
                    currentPage={queryRapams.page} 
                    numberPages={data.length /(queryRapams.perPage ? (+queryRapams.perPage + 1 ): 1)}/>
                    )
                }
           </div>
        </section>
    </MainContainer>
  )
}

export default ProductExplorer