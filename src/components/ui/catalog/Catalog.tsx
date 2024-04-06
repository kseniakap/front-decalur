'use client'

import { IProduct } from "@/types/product.interface";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";;
import Heading from "@/ui/heading/Heading";

import st from "./Catalog.module.scss";
import LinkBlack from "../link/LinkBlack";

interface ICatalog {
    products: IProduct[], 
    isLoading?: boolean,
    title?: string, 
    isPagination?: boolean
}

//Каталог для главной страницы (слайдер)
const Catalog: FC<ICatalog> = ({products, isLoading, title}) =>{
    if (isLoading) return <div>Загрузка товаров...</div>


    return (
        <section className={st.catalog}>
            {title && <Heading>{title}</Heading>}
            {products.length ? 
                (
                <div className={st.allGoods}>
                  {
                    products.map(product =>
                      <ProductItem key ={product.id} product={product}/>)
                  }
                </div>			
								)    
                : (
                  <>
                    <p className={st.notExist}>Товаров данной категории нет</p>
                    <LinkBlack  link='/explorer' text="Перейти к каталогу"/>
                  </>
                )
                }
        </section>
    )
}

export default Catalog