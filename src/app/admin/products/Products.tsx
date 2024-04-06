'use client'

import type{ FC } from "react"
import { useAdminAllProducts } from "./useAdminProduct"
import Heading from "@/ui/heading/Heading"
import AdminList from "@/ui/admin/admin-list/AdminList"
import CreateSomethingBtn from "@/ui/createSomethingBtn/CreateSomethingBtn"
import st from "./Products.module.scss"


const Products:FC = () => {
  const {data, isFetching, mutateDelete} = useAdminAllProducts()
  
  return (
    <section className={st.products}>
     <Heading>Все товары</Heading> 
     <CreateSomethingBtn link="/admin/createproduct" descr="Создать новый товар"/>
     <AdminList listItems={data} isLoading={isFetching} removeHadler={mutateDelete}  />
    </section>
  )
}

export default Products
