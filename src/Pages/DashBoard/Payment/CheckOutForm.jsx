import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useParams } from "react-router-dom";


const CheckOutForm = ({ data, price }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const {_id} = useParams();


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log(paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: data.length,
                picture: data.picture,
                classItems: data.classesId,
                status: 'service pending',
                name: data.name
            }
            axiosSecure.post(`/payments/${_id}`, payment)
                .then((result) => {
                    console.log(result.data);
                    if (result.insertedId) {
                        // display confirm
                    }
                })
        }

    }


    return (
        <>
            <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 p-10 mt-20">
                <div>
                    <h1>Payment System</h1>
                </div>
                <form className="w-96 mt-10 " onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-warning btn-sm w-full mt-14" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay Now: ${price}
                    </button>
                    {cardError && <p className="text-red-600 ml-8 mt-5">{cardError}</p>}
                    {transactionId && <p className="text-green-500 mt-5">Transaction complete with transactionId: {transactionId}</p>}

                </form>
                <div className="mt-8">
                    <Link to='/dashboard/mySelected'>
                        <button className="btn btn-ghost px-8">Go Back</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CheckOutForm;