import type { FC, PropsWithChildren } from 'react'
import cn from "clsx"
import st from "./CheckBox.module.scss"

interface ICheckBox{
    isChecked: boolean,
    onClick: ()=> void, 
    className?: string
}

const CheckBox:FC <PropsWithChildren<ICheckBox>>= ({isChecked, onClick, className, children}) => {
  return (
    <button className={cn(st.checkbox, className)} onClick={onClick}>
        <span className={cn(st.notChecked, {
            [st.active] : isChecked
        })}/>
        <span>{children}</span>
    </button>
  )
}

export default CheckBox