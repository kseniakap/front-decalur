import type { FC } from 'react'
import Link from "next/link" 
import st from "./Link.module.scss"

interface ILinkBlack{
  text: string, 
  link: string
}
const LinkBlack:FC<ILinkBlack>= ({text, link}) => {
  return (
    <Link className={st.link} href ={link}>{text}</Link>
  )
}

export default LinkBlack
