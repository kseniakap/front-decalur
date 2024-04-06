'use client'

import { FC } from "react"
import { ADMIN_MENU } from "./admin-menu.data"
import Link from "next/link"
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel"
import { FiLogOut } from 'react-icons/fi';
import st from "./MenuPanelAdmin.module.scss"

const MenuPanelAdmin:FC= () => {
    const {pathname} = useIsAdminPanel()
  return (
    <aside className={st.menu}>
        <ul>
        {
            ADMIN_MENU.map(item=>(
                <li key ={item.label}>
                    <Link href={item.href} style={{fontWeight: pathname === item.href ? 600 : 300 }}>
                        <div>{item.icon && <item.icon />}</div>
                        <span>{item.label}</span>
                    </Link>
                </li>
            ))
        }
        </ul>
        <Link className={st.exit}href="/"> <FiLogOut /> На сайт</Link>
    </aside>
  )
}


export default MenuPanelAdmin