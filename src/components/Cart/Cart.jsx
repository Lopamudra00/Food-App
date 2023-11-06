import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
const Cart = () => {
    //subscribing to a specific portion so that the whole store wont get re-render.
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h2>Cart Items - {cartItems.length}</h2>
            <button
                className="bg-green-100 p-2 m-5"
                onClick={() => handleClearCart()}
            >Clear Cart</button>

        </div>
    )
}
export default Cart