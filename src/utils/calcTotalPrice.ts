import {CartItemT} from "../store/redux/cart/types";

export const calcTotalPrice = (items: CartItemT[]) => {
 return  items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}