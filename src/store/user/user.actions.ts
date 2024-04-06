import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interface";
import { AuthService } from "@/services/auth/auth.service";
import { removeFromStorage } from "@/services/auth/auth.helper";
import { errrorCatch } from "@/api/api.helper";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    "auth/register", 
    async(data, {rejectWithValue})=>{
        try{
            const response = await AuthService.main("register", data)
            return response
        }catch(error){
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
    "auth/login", 
    async(data, {rejectWithValue})=>{
        try{
            const response = await AuthService.main("login", data)
            return response
        }catch(error){
            return rejectWithValue(error)
            
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout", 
    async()=>{
        removeFromStorage()
        window.location.reload();
        
    }
)

export const checkAuth = createAsyncThunk<IAuthResponse>(
    "auth/check-auth", 
    async(_, thunkApi)=>{
        try{
            const response = await AuthService.getNewTokens()
            return response.data
        }catch(error){
           if(errrorCatch(error) === "jwt expired"){
            thunkApi.dispatch(logout())
           }
           return thunkApi.rejectWithValue(error)
        }
        
    }
)