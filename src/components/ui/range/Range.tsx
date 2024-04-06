import { useDebounce } from '@/hooks/useDebounce'
import React, { FC, useEffect, useState } from 'react'
import st from "./Range.module.scss"

interface IRange{
    min?: number, 
    max: number, 
    fromInitialValue?:string, 
    toInitialValue?: string,
   onChangeFromValue: (value:string) => void, 
   onChangeToValue: (value:string) => void, 
}

const Range: FC<IRange> = ({min = 0, max, fromInitialValue, toInitialValue, onChangeFromValue, onChangeToValue}) => {
    const[fromValue, setFromValue] = useState(fromInitialValue || "")
    const[toValue, setToValue] = useState(toInitialValue || "")

    const debFromVal = useDebounce(fromValue, 500)
    const debToVal = useDebounce(toValue, 500)

    useEffect(()=>{
        onChangeFromValue(debFromVal)
    }, [debFromVal])

    useEffect(()=>{
        onChangeToValue(debToVal)
    }, [debToVal])


  return (
    <div className={st.range}>
        <input min= {min} max={max} type='number' placeholder='от' value={fromValue}
        onChange={e => setFromValue(e.target.value)}/>
        <input  min= {min} max={max} type='number' placeholder='до' value={toValue}
        onChange={e => setToValue(e.target.value)}/>
    </div>
  )
}

export default Range