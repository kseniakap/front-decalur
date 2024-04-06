import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { userSlice } from "./user/user.slice";
import { cartSlice } from "./cart/cart.slice";
import { carouseSlice } from "./carousel/carousel.slice";
import { filtersSlice } from "./filters/filters.slice";


const isClient = typeof window !== 'undefined'

const rootReducers = combineReducers({
    cart: cartSlice.reducer, 
    carousel: carouseSlice.reducer, 
    user: userSlice.reducer, 
    filters: filtersSlice.reducer
})

let mainReducer = rootReducers

if(isClient){
    const {persistReducer} = require("redux-persist")
    const storage = require("redux-persist/lib/storage").default
    
    const persistConfig = {
        key:"decalur", 
        storage, 
        whitelist:["cart"]
    }

    mainReducer = persistReducer(persistConfig, rootReducers )
}

export const store = configureStore({
    reducer: mainReducer, 
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE, REGISTER]
            }
        }
    )
})

export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof mainReducer>