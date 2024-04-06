import { EnumProductSort } from "@/services/product/product.types";
import { IFilterState, IFiltersActionsPayload } from "./filtrs.types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IFilterState= {
    isFilterUpdated: false, 
    queryRapams:{
        sort: EnumProductSort.NEWEST,
        searchTerm: '',
        page: 1, 
        perPage: 9, 
        ratings:""
    }
}

export const filtersSlice = createSlice({
    name: "filters",
    initialState, 
    reducers:{
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) =>{
            const {key, value}  = action.payload
            state.queryRapams[key] = value
            state.isFilterUpdated = true
        }, 
        resetFilterUpdate: state => {
            state.isFilterUpdated = false
        }
    }
})