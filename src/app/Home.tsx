import type { FC } from "react"
import { TypePaginationProducts } from "@/types/product.interface"
import Category from "@/ui/category/Category"
import { carouselItems } from "@/ui/carousel/carousel.data";
import Carousel from "@/ui/carousel/Carousel";
import Search from "@/ui/search/Search";
import CatalogSlider from "@/ui/catalog/catalogSlider/CatalogSlider";
import MainContainer from "./MainContainer";
import Header from "@/ui/header/Header";
import Footer from "@/components/footer/Footer";
import Advantages from "@/components/advantages/Advantages";

import "./../assets/styles/style.scss"


const Home: FC<TypePaginationProducts> = ({ products, discountProducts }) => {
	return (
		<>
			<MainContainer>
				<Header />
			</MainContainer>
			<Carousel items={carouselItems} />
			<MainContainer>
				<Search />
				<Category />
				<CatalogSlider title='Новый товар' products={products || []} />
			</MainContainer>
			<Advantages />
			<MainContainer>
				<CatalogSlider title='Акции' products={discountProducts || []} />
			</MainContainer>
			<Footer />
		</>
	)
}

export default Home