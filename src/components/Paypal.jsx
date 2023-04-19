import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartContext from "../context/Cart/CartContext";
import { useContext } from "react";
import ProductContext from "../context/Product/ProductContext";

export default function Paypal() {

    const {cartTotal, clearItemFromCheckout, cartItems} = useContext(CartContext)
    const {reduceStock} = useContext(ProductContext)

    console.log(cartTotal)
    return (
        <PayPalScriptProvider options={{ "client-id": "AZToAjR-EhTSPxIIgE7TMJkfmeYgsyilN5WC5otxrGvjnph4RzkW7JTt4XGhoUSQRoYKHg5lHIp8bn9M" }}>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "CLP"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemFromCheckout()
                    })
                }}
            />
        </PayPalScriptProvider>
    );
}
