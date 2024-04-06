import { IAuthResponse, IEmailPassword } from "@/store/user/user.interface"
import Cookies from "js-cookie"
import { getContentType } from "@/api/api.helper"
import { saveToStorage } from "./auth.helper"
import { axiosClassic } from "@/api/api.interceptor"
import { REFRESH_TOKEN } from "@/constants/token.constants"

export const AuthService = {

    //метод для авторизации и регистрации
    async main(type:'login' | 'register', data: IEmailPassword){
        const response = await axiosClassic<IAuthResponse>({
            url:`/auth/${type}`,
            method:"POST",
            data
        })
        if(response.data.accessToken)  
            saveToStorage(response.data)
        return response.data
    },     

    async getNewTokens(){
        const refreshToken = Cookies.get(REFRESH_TOKEN)
        const response = await axiosClassic.post<string, {data: IAuthResponse}>(
             '/auth/login/access-token', 
            {refreshToken}
        )
        if(response.data.accessToken) saveToStorage(response.data)
        return response
    }
}