import type { Metadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ProductService } from '@/services/product/product.service'
import { IPageSlugParam, TypeParamsSlug } from '@/types/page-params'
import Product from './Product'
import MainContainer from '@/app/MainContainer'
import Header from '@/ui/header/Header'
import Footer from '@/components/footer/Footer'

export const revalidate = 60

export async function generateStaticParams() {
    const res = await ProductService.getAll()
    const paths =res.products.map(product =>{
        return {
            params: {slug: product.slug}
        }
    })
    return paths
}

async function getProducts(params:TypeParamsSlug) {
    const product = await ProductService.getBySlug(params?.slug as string) 
    const {data: similarProducts} = await ProductService.getSimilar(product.id)

    return {product, similarProducts}
}


export async function generateMetadata({
  params,
}: IPageSlugParam) : Promise<Metadata>{
    const {product} = await getProducts(params)
      return { 
        title: product.name, 
        description: product.description, 
        category: product?.category?.name,
        openGraph:{
            images: product?.images || [],
            description: product.description
        }
    }
}


export default async function ProductPage({params}:IPageSlugParam) {
    const {product, similarProducts} = await getProducts(params)

  return (
    <>
        <MainContainer>
            <Header/>
            <Product initialProduct={product} similarProducts={similarProducts} slug={params.slug} />
        </MainContainer>
        <Footer/>
    </>
  )
}
