import { FC } from 'react'
import { useFilters } from '../useFilters'
import WrapperOpenFilter from './WrapperOpenFilter'
import CheckBox from '@/ui/checkbox/CheckBox'
import Spinner from 'react-bootstrap/Spinner'
import { useCategories } from '@/hooks/useCategories'
import st from './AllFilters.module.scss'

const CategoryGroup: FC = () => {
	const { queryRapams, updateQueryParams } = useFilters()
	const { data, isLoading } = useCategories()
	return (
		<WrapperOpenFilter title='Категории'>
			{isLoading ? (
				<Spinner />
			) : data?.length ? (
				<div className={st.categoryGroup}>
					{data.map(category => {
						const isChecked = queryRapams.categoryId === category.id.toString()
						return (
							<CheckBox
								key={category.id}
								isChecked={isChecked}
								onClick={() =>
									updateQueryParams(
										'categoryId',
										isChecked ? '' : category.id.toString()
									)
								}
							>
								{category.name}
							</CheckBox>
						)
					})}
				</div>
			) : (
				<p>Категория не найдена</p>
			)}
		</WrapperOpenFilter>
	)
}

export default CategoryGroup
