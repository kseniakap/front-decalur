import { useTypedSelector } from "./useTypedSelector"

export const useCart = () => {
   const items = useTypedSelector(state => state.cart.items)
   // console.log(items)

   const total = items.reduce((acc, item) => {
      if (!item.product.isStock) { 
          return acc; 
      }
      return acc + (item.price * item.quantity);
  }, 0);
   return { items, total }
}