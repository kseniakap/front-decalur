import { EnumProductSort } from '@/services/product/product.types'
import { Dispatch, FC, SetStateAction } from 'react'
import { useFilters } from '../useFilters'
import Select from '@/ui/select/Select'
import { SORT_SELECT_DATA } from './sort-select.data'

interface ISortDropdown {
  sortType: EnumProductSort, 
  setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropDown:FC = () => {
  const{updateQueryParams, queryRapams} = useFilters()

  return (
    <Select<EnumProductSort>
      data={SORT_SELECT_DATA} 
      onChange={value => updateQueryParams("sort", value.key.toString())}
      value={SORT_SELECT_DATA.find(value=> value.key === queryRapams.sort)}
      title= "Сортировать по..."
      />
  )
}

export default SortDropDown
