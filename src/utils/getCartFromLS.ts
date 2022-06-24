import {calcTotalPrice} from "./calcTotalPrice";
import {CartItemT} from "../store/redux/cart/types";

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)

    return {
        items : items  as CartItemT[],
        totalPrice,
    }
}