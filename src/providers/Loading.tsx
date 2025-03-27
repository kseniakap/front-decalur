import { useEffect, useState } from 'react'
import suspenseImg from './suspense.gif'
import './../assets/styles/style.scss'

const Loading = () => {
	const [showFallback, setShowFallback] = useState(true)

	useEffect(() => {
		const delayTimeout = setTimeout(() => {
			setShowFallback(false)
		}, 10000)

		return () => clearTimeout(delayTimeout)
	}, [])
	return showFallback ? (
		<div className='fallback'>
			<img src={suspenseImg.src} className='img' alt='загрузка' />
			{/* <p>Загрузка...</p> */}
		</div>
	) : null
}

export default Loading
