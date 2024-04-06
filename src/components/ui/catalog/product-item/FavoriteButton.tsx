"use client"

import { useProfile } from "@/hooks/useProfile";
import { UserService } from "@/services/user.service";
import { useMutation, useQueryClient } from "react-query";
import { FC } from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const FavoriteButton: FC<{productId: number}> = ({productId}) =>{
    const {profile} = useProfile()
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['toggle favorite'],
        mutationFn: () => UserService.toggleFavotite(productId),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['get profile'] });
        },
    });
  
    if(!profile) return null
    const isExist = profile.favorites.some(favorite => favorite.id === productId)
    
    return (
        <>
            <button onClick ={(e)=> { e.preventDefault()
                mutate()}}>{isExist ? <AiFillHeart fontSize={20}/>: <AiOutlineHeart fontSize={20}/>}</button>
        </>
    )
}

export default FavoriteButton