'use client'

import { useProfile } from "@/hooks/useProfile";
import Catalog from "@/ui/catalog/Catalog";



interface IFavorites{}

export default function Favorites({}: IFavorites){
    const {profile} = useProfile()
    return (
        <>
            <Catalog products={profile?.favorites || [] } title="Избранное"/>      
        </> 
    )

}
