import { useActions } from '@/hooks/useActions'
import {FC, useEffect } from 'react'

import st from "./Carousel.module.scss"

const CarouselNavigation:FC = () => {
    const {nextSlide, prevSlide} = useActions()
    useEffect(() => {
      const interval = setInterval(() => {
      nextSlide({carouseLength: 3});
      }, 5000);
      return () => clearInterval(interval);
      }, [nextSlide]);

  return (
    <div className={st.nav}>
        <button onClick={()=>prevSlide()} className={st.prev}>
          <svg width="16" height="33" viewBox="0 0 16 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.9673 16.625L14.9422 2.41367C15.2613 2.06416 15.2613 1.50362 14.9422 1.1541C14.6231 0.804589 14.1113 0.804589 13.7922 1.1541L0.239328 15.9985C-0.0797759 16.348 -0.0797759 16.9086 0.239328 17.2581L13.7922 32.0959C13.9487 32.2674 14.1595 32.3597 14.3642 32.3597C14.5689 32.3597 14.7796 32.274 14.9362 32.0959C15.2553 31.7464 15.2553 31.1859 14.9362 30.8364L1.9673 16.625Z" fill="white"/>
          </svg>
        </button>
        <button onClick={()=>nextSlide({carouseLength:3})} className={st.next}>
          <svg width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8936 16.0038L2.33608 1.15419C2.01686 0.804559 1.50491 0.804559 1.1857 1.15419C0.866485 1.50383 0.866485 2.06456 1.1857 2.4142L14.1651 16.6305L1.1857 30.8467C0.866485 31.1964 0.866485 31.7571 1.1857 32.1067C1.3423 32.2783 1.5531 32.3706 1.75788 32.3706C1.96266 32.3706 2.17346 32.2849 2.33005 32.1067L15.8876 17.2572C16.2068 16.9141 16.2068 16.3468 15.8936 16.0038Z" fill="white"/>
          </svg>
        </button>
    </div>
  )
}

export default CarouselNavigation