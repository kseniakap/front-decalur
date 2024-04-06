'use client'

import { useProfile } from '@/hooks/useProfile'
import { FC } from 'react'

const HeaderProfile: FC = () => {
    const {profile} = useProfile()
  return (
    <div >
        {
          profile?.avatarPath && (
              <img src = {profile.avatarPath} alt = "Фото пользователя" width={30} height={30} style={{ borderRadius: "100%"}}/>
          )
        }
    </div>
  )
}

export default HeaderProfile
