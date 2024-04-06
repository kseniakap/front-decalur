'use client'

import type{ FC } from "react";
import { IProduct } from "@/types/product.interface";
import ProductItem from "../product-item/ProductItem";
import { Spinner } from 'react-bootstrap'
import Heading from "@/ui/heading/Heading";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import st from "./CatalogSlider.module.scss";
import "./../../../../assets/styles/style.scss"


interface ICatalog {
    products: IProduct[], 
    isLoading?: boolean,
    title?: string, 
    isPagination?: boolean,
}
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1200, min:993 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 993, min: 576 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1
  }
};

//Каталог для главной страницы (слайдер)
const CatalogSlider: FC<ICatalog> = ({products, isLoading, title}) =>{
    if (isLoading) return <Spinner/>
    return (
        <section className={st.catalog}>
            {title && <Heading>{title}</Heading>}
            {products?.length ? 
                (
                <div className={st.wrapper}>
                  <Carousel responsive={responsive} >
                    {
                      products.map(product =>
                       <ProductItem key ={product.id} product={product}/>)
                    }
                  </Carousel>
								</div>
								)    
                : <p  style={{marginBottom:"10px"}}>Товаров нет</p>}
        </section>
    )
}

export default CatalogSlider