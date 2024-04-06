import type{ FC, PropsWithChildren } from "react"
import { useOutsise } from "@/hooks/useOutsise"
import SquareButton from "../button/SquareButton"
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link"
import st from "./Menu.module.scss"
import { useAuth } from "@/hooks/useAuth";
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import LogOutUser from "../LogOutUser";

const Menu:FC = () => {
    const {isShow, setIsShow, ref}= useOutsise(false)
    const {isAdminPanel} = useIsAdminPanel()
    const {user} = useAuth()

  return(
  
      <div className={st.menu}
         ref = {ref}
          >
           {
            !isShow && (
                <div className={st.hamburger} onClick={()=>{
                    setIsShow(!isShow)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )
           }
          {
            isShow && (
                <div className={st.overlay}>
                    <div  className={st.wrapper}>
                        <button className={st.closeBtn} onClick={()=>{
                            setIsShow(!isShow)
                        }}>
                            <span>&times;</span>
                        </button>
                                <div className={st.links}>
                            <Link href='/explorer'>
                                Каталог
                            </Link>
                            <Link href='/delivery'>
                                Доставка и оплата
                            </Link>
                            {
                                user?.isAdmin && !isAdminPanel && (
                                    <Link className={st.links} href="/admin">Админ панель</Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
          }
        </div>

  )
}

export default Menu