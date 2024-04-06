'use client'

import React, { FC } from 'react'
import { ICarouselItem } from './carousel.interface'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import CarouselNavigation from './CarouselNavigation'
import { TransitionGroup } from 'react-transition-group'
import CSSTransition from '../CSSTransitionGroup'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LinkBlack from '../link/LinkBlack'

import st from "./Carousel.module.scss"
import "./../../../assets/styles/style.scss"
interface ICarousel {
    items: ICarouselItem[], 
    className?: string
}

const Carousel:FC<ICarousel> = ({items}) => {
    const {selectedItemIndex} = useTypedSelector(state=> state.carousel)
    const selectedItem = items[selectedItemIndex]
  return (
    <section className={st.carousel}> 
        <TransitionGroup className={st.transition}>
          <CSSTransition key={selectedItem.title} timeout={500} classNames={{
            enter: st['item-enter'],
            enterActive: st['item-enter-active'],
            exit: st['item-exit'],
            exitActive: st['item-exit-active']
          }} unmountOnExit mountOnEnter>
            <div className={st.item}>
            <CarouselNavigation/>
            <div className={st.content}>
                <h2>{selectedItem.title}</h2>
                {
                  selectedItem.description && <p>{selectedItem.description}</p>
                }
                
                  {
                    selectedItem.link ? (
                      <LinkBlack link={selectedItem.link} text="Перейти к каталогу"/>
                    ) : null
                  }
              </div>
              {
                selectedItem.image && <LazyLoadImage src = {selectedItem.image} alt="картинка слайда"/>
              }
             </div>
          </CSSTransition>
        </TransitionGroup>
    </section>
  )
}
export default Carousel