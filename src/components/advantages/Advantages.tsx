import type { FC } from 'react'
import Block from './Block'
import MainContainer from '@/app/MainContainer'
import { advantagesData } from './advantages.data'
import Heading from '@/ui/heading/Heading'

import st from './Advantages.module.scss'

const Advantages: FC = () => {
	return (
		<section className={st.advantages}>
			<div className={st.img}></div>
			<MainContainer>
				<Heading>Наши преимущества</Heading>
				<div className={st.row}>
					{advantagesData.map((item, i) => (
						<Block key={i} title={item.title} icon={item.icon} />
					))}
				</div>
			</MainContainer>
		</section>
	)
}

export default Advantages
