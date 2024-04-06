import React, { FC } from 'react'
import { useFilters } from '../useFilters'
import Range from '@/ui/range/Range'
import WrapperOpenFilter from './WrapperOpenFilter';


const PriceGroupFilter:FC = () => {
    const {queryRapams, updateQueryParams} = useFilters()
  return (
    <WrapperOpenFilter title ="Цена">
        <Range max={200} 
            fromInitialValue= {queryRapams.minPrice} 
            toInitialValue={queryRapams.maxPrice} 
            onChangeFromValue= {(value) => updateQueryParams("minPrice", value)} 
            onChangeToValue= {(value) => updateQueryParams("maxPrice", value)}/>
   </WrapperOpenFilter>
  )
}

export default PriceGroupFilter