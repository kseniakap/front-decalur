import { forwardRef } from "react";
import { IField } from "./Field.interface";
import cn from "clsx"
import st from "./Field.module.scss"


const Field = forwardRef<HTMLInputElement, IField>(
    ({placeholder, error, className, type="text",
    style, Icon, ...rest}, ref)=>{
        return (
            <div className={cn(st.field, className)} style={style}>
                <label>
                    <span>
                    {
                    Icon &&  <Icon className=""/>
                    }
                    {placeholder}</span>
                    <input ref={ref} type={type} {...rest}/>
                </label>
                {error && <div className={st.error}><span>*</span>{error}</div>}

            </div>
        )
    }
)

Field.displayName ="Field"
export default Field