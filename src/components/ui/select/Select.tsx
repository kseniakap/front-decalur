import { useState } from "react"
import { ISelect } from "./select.interface"
import cn from "clsx"
import st from "./Select.module.scss"

function Select<K>({data, onChange, value, title}:ISelect<K>){
    const[isOpen, setIsOpen] = useState(false)

  return (
    <div className={st.select}>
        <button  className={st.top} onClick={()=> setIsOpen(!isOpen)}>
          {
            isOpen ? "Скрыть" : "Сортировать"
          }
        </button>
        {
            isOpen && (
            <ul>
                {
                    data.map((item,i) =>(
                        <li key={i} className={cn({
                            [st.active]: item.key === value?.key
                        })}>
                            <button onClick={()=>{
                                onChange(item)
                                setIsOpen(false)
                            }}
                            disabled={item.key === value?.key}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))
                }
            </ul>)
        }
    </div>
  )
}

export default Select