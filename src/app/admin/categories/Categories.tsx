'use client'
import type{ FC } from "react"
import Heading from "@/ui/heading/Heading"
import AdminList from "@/ui/admin/admin-list/AdminList"
import { useAdminAllCategories } from "./useAdminCategories"
import CreateSomethingBtn from "@/ui/createSomethingBtn/CreateSomethingBtn"


const Products:FC = () => {
  const {data, isFetching, mutate} = useAdminAllCategories()

  return (
    <div>
     <Heading>Категории</Heading> 
     <CreateSomethingBtn link="/admin/createCategory" descr="Создать новую категорию"/>
     <AdminList
      listItems={data}
      isLoading={isFetching}
      removeHadler={mutate}
      />
    </div>
  )
}

export default Products
