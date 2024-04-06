import type{ FC, PropsWithChildren} from "react"
import st from "./Heading.module.scss"

interface IHeading {
    className?: string
}


const Heading: FC<PropsWithChildren<IHeading>> = ({className, children}) => {
    return (
        <h1 className={st.heading}>{children}</h1>
    )
    
}

export default Heading