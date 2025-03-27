import type { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import Link from 'next/link'
import { convertPrice } from '@/utils/convertPrice'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import st from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={st.item}>
			<div className={st.top}>
				<FavoriteButton productId={product.id} />
			</div>
			<Link href={`/product/${product.slug}`}>
				<LazyLoadImage
					className={st.img}
					src={`${process.env.SERVER_UPLOADS}/${product.images[0]}`}
					alt={product.name}
				/>
			</Link>
			<Link href={`/product/${product.slug}`}>
				<h3>{product.name}</h3>
			</Link>
			<p>{convertPrice(product.price)}</p>
			{product.isDiscount && <p className={st.isDiscount}>Акция</p>}
			{!product.isStock ? (
				<div className={st.isNotStock}>Нет в наличии</div>
			) : (
				<AddToCartButton product={product} />
			)}
		</div>
	)
}

export default ProductItem
