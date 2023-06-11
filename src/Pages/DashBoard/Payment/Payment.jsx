import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const data = useLoaderData();
    const total = data.price;
    const price = parseFloat(total)
    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm data={data} price={price} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;