// sThe Adapter Design Pattern is used when you already have a class, but its interface doesn't match what your application expects.

// It is called an adapter because it adapts one interface to another, just like a mobile charger adapter converts one plug type into another.

class PaymentGateway{
    pay(){
        throw new Error("Pay() must be implement")
    }
}

class Razorpay extends PaymentGateway {
    pay(amount){
        console.log(`Paid ₹${amount} using Razorpay`);
    }
}

class Stripe extends PaymentGateway{
    makPayment(amount){
        console.log(`Paid ₹${amount} using Stripe`);
    }
}

class StripeAdapter extends PaymentGateway{
    constructor(stripe){
        super()
        this.stripe = stripe
    }

    pay(amount){
        this.stripe.makPayment(amount)
    }
}



class Application{
    checkout(paymentGateway){
        paymentGateway.pay(500);
    }
}

const stripe = new Stripe();
const adapter = new StripeAdapter(stripe)


const razorpay = new Razorpay();
const app = new Application()
app.checkout(razorpay)
app.checkout(adapter)