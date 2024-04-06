import type { FC } from 'react'
import st from "./Block.module.scss"
import Image from 'next/image'
 
export interface IBlock{
    title: string, 
    icon: string
}
const Block:FC<IBlock>= ({title, icon}) => {
  return (
    <div className={st.block}>
        <div>
            <img src={icon} alt={title}/>
            <h3>{title}</h3>
            <p></p>
        </div>
    </div>
  )
}

export default Block
