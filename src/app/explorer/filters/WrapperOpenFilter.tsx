import { FC, PropsWithChildren, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import st from "./AllFilters.module.scss"

interface IWrapperFilters {
    title: string
}

const WrapperOpenFilter:FC<PropsWithChildren<IWrapperFilters>> = ({title, children})=> {
    const [isOpenFilter, setOpenFilter] = useState(false)
  return (
    <div className={st.wrapper}>
        <div className={st.top} onClick = {()=>setOpenFilter(!isOpenFilter)}>
            <p>{title}</p>
            <MdKeyboardArrowDown />
        </div>
        {
           isOpenFilter && <div className={st.bottom}>{children}</div> 
        }
    </div>
  )
}
export default WrapperOpenFilter