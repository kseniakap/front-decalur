import { FC } from "react"
import PriceGroupFilter from "./PriceGroupFilter"
import CategoryGroup from "./CategoryGroup"

const AllFilters: FC = () => {
  return (
    <>
        <PriceGroupFilter/>
        <CategoryGroup/>
    </>
  )
}

export default AllFilters