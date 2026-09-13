class MongoDB {
    connect() {
        console.log("Connecting to MongoDB...");
    }
}

class MySQL {
    connect() {
        console.log("Connecting to MySQL...");
    }
}

class DatabaseFactory {
    static createDatabase(type) {
        switch (type) {
            case "mongodb":
                return new MongoDB();
            case "mysql":
                return new MySQL();
            default:
                throw new Error("Unsupported database type");
        }
    }
}

const dbType = "mongodb";
const database = DatabaseFactory.createDatabase(dbType);
database.connect();

// This code demonstrates the Factory design pattern, which provides a way to create objects without specifying the exact class of object that will be created. The `DatabaseFactory` class has a static method `createDatabase` that takes a type parameter and returns an instance of the corresponding database class (either `MongoDB` or `MySQL`). The client code can use this factory method to create database instances without needing to know the details of their implementation.

// --------------------------------------------------------


class Payment{
    payment(){
        throw new Error("createPayment() must be implemented");
    }
}

class UpiPayment extends Payment {
    payment() {
        console.log("Processing UPI payment...");
    }
}

class CreditCard extends Payment {
    payment() {
        console.log("Processing Credit Card payment...");
    }
}

class PaymentFactory {
    createPayment(){
        throw new Error("createPayment() must be implemented");
    }
}

class UpiPaymentFactory extends PaymentFactory{
    createPayment(){
        return new UpiPayment() 
    }
}

class CreditCardPaymentFactory extends PaymentFactory{
    createPayment(){
        return new CreditCard() 
    }
}


class Application{
    paymntProcess(factory){
        const payment = factory.createPayment()
        return payment.payment()
    }
}

const app = new Application()
const creditFactory = new CreditCardPaymentFactory()
app.paymntProcess(creditFactory)
