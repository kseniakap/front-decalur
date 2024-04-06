"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

//Если пользователь кликнул вне области, то она закрывается
type TypeOut ={
    ref: any, 
    isShow:boolean, 
    setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutsise = (initialIsVisible: boolean): TypeOut =>{
    const [isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef<HTMLElement>(null)

    const handleClickOutside = (event: any) =>{
        if(ref.current && !ref.current.contains(event.target)){
            setIsShow(false)
        }
    }
    useEffect(()=>{
        document.addEventListener("click", handleClickOutside, true)
        return ()=>{
            document.removeEventListener("click", handleClickOutside, true)
        }
    })

    return {ref, isShow, setIsShow}

}