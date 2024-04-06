import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import cn from "classnames"
import "./Button.scss"


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: "gray" | "blue",
  size?: "small" | "medium" | "large"
}

const Button: FC<PropsWithChildren<IButton>> = ({children, className, variant = "gray", size="medium", ...rest})=>{
  return <button {...rest}
   className={cn("btn", {
    "btn-gray": variant ==="gray",
    "btn-blue": variant==="blue",
    "btn-small": size ==="small",
    "btn-md": size==="medium", 
    "btn-lg": size==="large"  
  },
  className)}>{children}</button>;
}

export default Button