import React, {FC} from 'react'
import Link from 'next/link'
import st from "./CreateSomethingBtn.module.scss"

interface ICreateSmthBtn {
    link: string, 
    descr: string
}

const CreateSomethingBtn:FC<ICreateSmthBtn> = ({link, descr}) => {
  return (
    <Link className={st.link} href={link}>{descr}</Link>
  )
}

export default CreateSomethingBtn
