'use client'

import { ProductService } from "@/services/product/product.service"
import { IProduct } from "@/types/product.interface"
import Heading from "@/ui/heading/Heading"
import { useQuery } from "react-query"
import ProductGallery from "./productGallery/ProductGallery"
import ProductInformation from "./product-information/ProductInformation"
import AddToCart from "./product-information/AddToCart"
import FavoriteButton from "@/ui/catalog/product-item/FavoriteButton"
import SimilarProduct from "./SimilarProducts"
import ProductReviews from "./product-reviews/productReviewForm/ProductReviewForm"
import { useAuth } from "@/hooks/useAuth"
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel"
import ChangeProduct from "@/ui/button/ChangeProduct"

import st from "./Product.module.scss"

interface IProductPage{
    initialProduct: IProduct, 
    similarProducts: IProduct[],
    slug?: string
}

export default function Product ({initialProduct,similarProducts, slug=""}:IProductPage){
  const {isAdminPanel} = useIsAdminPanel()
  const {user} = useAuth() 

  const {data:product} = useQuery(['get product', initialProduct.id],
      () => ProductService.getBySlug(slug),
      {
        initialData: initialProduct,
        enabled: !!slug
      }
  )
    
  return (
    <>
      <div className={st.wrapper}>
        <ProductGallery images={product?.images || []} isDiscount={product?.isDiscount}/>
        <div className={st.content}>

            <Heading>{product?.name}</Heading>
            {
              product && (
             <>
                <div className={st.favorite}>
                  <FavoriteButton  productId={product?.id}/>
                </div>
                <ProductInformation product={product}/>
                {!product.isStock ? <div className={st.isNotStock}>Нет в наличии</div> : <AddToCart product={product}/>}   
              </>
              )
            }
            {
              user?.isAdmin && !isAdminPanel && product && (
                <ChangeProduct product={product}/>
              )
            }
        </div>
      </div>
      {
        product && (
          <>
            <div className={st.review}>
              <ProductReviews reviews={product?.reviews} productId={product?.id}/>
            </div>
            <div className={st.similar}>
              <SimilarProduct similarProduct={similarProducts}/>
            </div>
          </>
        )
      }
     
    </>
  )
}

