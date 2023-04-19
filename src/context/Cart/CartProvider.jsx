import CartContext from "./CartContext";
import { useReducer } from 'react';
import cartReducer from "./cartReducer";
import { addCartItem, removeCartItem, clearCartItem } from "./CartFunction";

const CartProvider = ({children}) => {

    const initialState = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }

    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, initialState)

    //* Funcion que actualiza los productos en mi reducer del carrito (funcion acumuladora)

    const updateCartItemsReducer = (newCartItems) => {
        // reduce es un metodo de array que sirve para acumular valores
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        console.log("este es update cart items reducer")
        console.log(cartCount)
        console.log(cartTotal)
        console.log(newCartTotal)
        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        })
    }

    const addItemToCart = (productToAdd) => {
        console.log("este es add item to cart")
        console.log(productToAdd)
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
        console.log("estes es new cart items")
        console.log(newCartItems)
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCheckout = () => {
        dispatch({
            type: "CLEAR_CHECKOUT"
        })
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool
        })
    }


  return (
    <CartContext.Provider value={{isCartOpen, cartItems, cartCount, cartTotal, addItemToCart, removeItemToCart, clearItemToCart, clearItemFromCheckout, setIsCartOpen}}>{children}</CartContext.Provider>
  )
}

export default CartProvider