import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICarouselInitialState } from "./carousel.types"


const initialState: ICarouselInitialState= {
    selectedItemIndex:0
}

export const carouseSlice = createSlice({
    name: "carousel",
    initialState,
    reducers:{
        nextSlide: (state, action: PayloadAction<{carouseLength: number}>) =>{
            if(state.selectedItemIndex !== action.payload.carouseLength - 1)
                state.selectedItemIndex += 1
            else state.selectedItemIndex = 0 
        }, 
        prevSlide: state =>{
            if(state.selectedItemIndex > 0) state.selectedItemIndex -= 1
        }, 
        selectSlide: (state, action: PayloadAction<number>) =>{
            state.selectedItemIndex = action.payload
        } 
    }
})