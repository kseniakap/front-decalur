'use client'

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { FaUser } from "react-icons/fa6";
import Cart from "../cart/HeaderCart";
import HeaderFavorite from "../HeaderFavorite";
import LogOutUser from "../LogOutUser";
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import { useAuth } from "@/hooks/useAuth";
import st from "./Header.module.scss"
import Menu from "../menu/Menu";


const Header: FC = () => {
  const {isAdminPanel} = useIsAdminPanel()
  const {user} = useAuth()

    return  (
      <>
        {!isAdminPanel &&
        (
          <header className={st.header}>
            {/* <Menu isOpen={true} /> */}
          <div className={st.left}>
            <Link className={st.logo} href="/">
              <Image priority width={155} height={55} src="/images/logoDecalur.jpg" alt="логотип магазина Декалюр"/>
           </Link>
            <div className={st.links}>
              <Link href='/explorer'>
                Каталог
              </Link>
              <Link href='/delivery'>
                Доставка и оплата
              </Link>
            </div>
          </div>
         
          <div className={st.right}>
            {/* Переход на админ панель */}
            {
              user?.isAdmin && !isAdminPanel && (
                <Link className={st.links} href="/admin">Админ панель</Link>
              )
            }
          
            <LogOutUser/>
            {
              user?.email && ( <Link href='/favorites'><HeaderFavorite/></Link>)
            }
            {
              !user?.email && (   
                <Link href='/auth'>
                  <FaUser />
                </Link>)
            }
            <Cart/>
            <Menu/>
          </div>
        </header>
        )
        }
      </>
   
    )
}

export default Header