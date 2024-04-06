import React, { FC } from 'react'
import st from "./HoverImg.module.scss" 
interface IHoverText{
    text: string,
    active: boolean
}
const HoverText:FC<IHoverText> = ({text, active}) => {
  return (
    <p  className={`${st.text} ${active && st.activeText}`}>
      {text}
    </p>
  )
}

export default HoverText
