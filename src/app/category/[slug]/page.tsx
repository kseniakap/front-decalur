import MainContainer from '@/app/MainContainer'
import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'
import { IPageSlugParam, TypeParamsSlug } from '@/types/page-params'
import Catalog from '@/ui/catalog/Catalog'
import Footer from '@/components/footer/Footer'
import Header from '@/ui/header/Header'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
    const categories = await CategoryService.getAll()
    const paths = categories.data.map(category =>{
        return {
            params: {
                slug: category.slug
            }
        }
    })
    return paths
}

async function getProducts(params:TypeParamsSlug) {
    const {data:products} = await ProductService.getByCategory(params?.slug as string) 
    const {data: category} = await CategoryService.getBySlug(params?.slug as string)
    return {products, category}
}


export async function generateMetadata({
  params,
}: IPageSlugParam): Promise<Metadata> {
  const {category, products} = await getProducts(params)

  return {
    title: category.name,
    description: `Description about ${category.name}`,
    openGraph:{
        images: products[0]?.images,
        description:`Description about ${category.name}`,
    }
  }
}



export default async function CategoryPage({params}:IPageSlugParam) {
    const data = await getProducts(params)

  return (
    <>
      <MainContainer>
          <Header/>
          <Catalog products={data.products || []} title={data.category.name}/>
      </MainContainer>
      <Footer/>
    </>
  )
}
