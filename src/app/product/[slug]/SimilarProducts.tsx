import { IProduct } from "@/types/product.interface"
import Heading from "@/ui/heading/Heading"
import ProductItem from "@/ui/catalog/product-item/ProductItem"
import st from "./Product.module.scss"
import CatalogSlider from "@/ui/catalog/catalogSlider/CatalogSlider"

interface ISimilarProducts{
   similarProduct:IProduct[]
}

export default function SimilarProduct ({similarProduct}:ISimilarProducts){
  return (
    <>
     <CatalogSlider title ="Похожие товары" products={similarProduct || []}  />
    </>
  )
}

