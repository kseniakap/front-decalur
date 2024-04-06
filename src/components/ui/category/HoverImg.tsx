import React, { FC } from 'react'
import st from "./HoverImg.module.scss"

interface IHoverImg{
    url:string, 
    active: boolean
}
const HoverImg:FC<IHoverImg> = ({url, active}) => {
  return (
   <img  className={`${st.img} ${active && st.activeImg}`} src={url} alt="картинка при наведении" />
  )
}

export default HoverImg
