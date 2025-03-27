'use client'

import { FC, useState } from 'react'
import ProductItem from './product-item/ProductItem'
import Heading from '@/ui/heading/Heading'
import Button from '@/ui/button/Button'
import { EnumProductSort } from '@/services/product/product.types'
import { useQuery } from 'react-query'
import { ProductService } from '@/services/product/product.service'
import Spinner from 'react-bootstrap/Spinner'

interface ICataloAllProducts {
	title?: string
}

const CatalogAllProducts: FC<ICataloAllProducts> = ({ title }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const [page, setPage] = useState(1)
	const numberProductShow = 6

	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			ProductService.getAll({
				page,
				perPage: numberProductShow,
				sort: sortType
			})
	})

	if (isLoading) return <Spinner />

	return (
		<section>
			{title && <Heading>{title}</Heading>}
			{response?.products.length ? (
				<>
					<div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
						{response?.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='' style={{ display: 'flex', gap: '30px' }}>
						{Array.from({
							length: response.length / numberProductShow + 1
						}).map((_, i) => {
							const pageNumber = i + 1
							return (
								<Button key={pageNumber} onClick={() => setPage(pageNumber)}>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<p style={{ marginBottom: '10px' }}>Товаров нет</p>
			)}
		</section>
	)
}

export default CatalogAllProducts
