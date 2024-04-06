import * as userActions from "./user/user.actions"
import { cartSlice } from "./cart/cart.slice"
import { carouseSlice } from "./carousel/carousel.slice"
import { filtersSlice } from "./filters/filters.slice"

export const rootActios = {
    ...userActions, 
    ...carouseSlice.actions,
    ...cartSlice.actions,
    ...filtersSlice.actions
}