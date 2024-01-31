"use client"

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event:any) => {
 
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
   
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
   
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
  
    return (
      <form className="w-96 mx-auto bg-green-200 p-10" onSubmit={handleSubmit}>
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

        
        <button className="bg-rose-400 w-32 h-8 border-0 rounded mt-5" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  };