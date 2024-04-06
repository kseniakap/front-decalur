import { forwardRef } from "react";
import { ITextArea } from "./Textarea.interface";
import cn from "clsx"
import st from "./Textarea.module.scss"

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({placeholder, error, className, style, Icon, ...rest}, ref) => {
        return (
            <div className={cn(st.area, className)} style={style}>
                <label>
                    <span>
                    {
                    Icon &&  <Icon className=""/>
                    }
                    {placeholder}</span>
                    <textarea ref={ref} {...rest}/>
                </label>
                {error && <div className="">{error}</div>}
            </div>
        )
    }
)

Textarea.displayName = "Field"
export default Textarea