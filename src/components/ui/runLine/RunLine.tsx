import React, { FC } from 'react'
import st from "./RunLine.module.scss"

interface IRunLine{
    text: string, 
    link?: string, 
    linkText?: string
}
const RunLine:FC<IRunLine> = ({text, link, linkText}) => {
  return (
    <div className={st.line}>
     <div>
       <h3>{text}<a href={link} target='_blank'> {linkText}</a></h3>
       <h3>{text}<a href={link} target='_blank'> {linkText}</a></h3>
     </div>
    </div>
  )
}

export default RunLine
