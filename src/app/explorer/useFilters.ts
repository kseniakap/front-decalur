'use client'

import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import { TypeProductDataFilters } from "@/services/product/product.types"
import { usePathname, useSearchParams, useRouter} from "next/navigation"
import { useEffect } from "react"

export const useFilters = ()=>{
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const {updateQueryParam} = useActions()
    const {replace} = useRouter()

    const {queryRapams, isFilterUpdated} = useTypedSelector(
        state => state.filters
    )
    
    useEffect(()=>{
        searchParams.forEach((value, key)=>{
            updateQueryParam({
                key: key as keyof TypeProductDataFilters,
                value
            })
        })
    }, [])

    const updateQueryParams = (key: keyof TypeProductDataFilters, value: string)=>{
        const newParams = new URLSearchParams(searchParams.toString())

        if(value){
            newParams.set(key, String(value) )
        }else{
            newParams.delete(key)
        }
        replace(pathname + `?${newParams.toString().replace(/%7C/g,'|')}`)
        updateQueryParam({key, value})
    }

    return {
        updateQueryParams, 
        queryRapams, 
        isFilterUpdated
    }

}