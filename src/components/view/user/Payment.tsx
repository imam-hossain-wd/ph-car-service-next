
"use client"
import { CheckoutForm } from "@/components/Forms/checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentPage = () => {

  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
 
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
