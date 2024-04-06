import { FC } from 'react'
import SquareButton from './button/SquareButton'
import { AiOutlineHeart } from "react-icons/ai"
import { useProfile } from '@/hooks/useProfile'

const HeaderFavorite:FC = () => {
  const {profile} = useProfile();
  return (
    <>
        <SquareButton Icon ={AiOutlineHeart} number={profile?.favorites.length} />      
    </>
  )
}

export default HeaderFavorite
