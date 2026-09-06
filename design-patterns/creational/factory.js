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

class UpiPayment {
    payment() {
        console.log("Processing UPI payment...");
    }
}

class CreditCardPayment {
    payment() {
        console.log("Processing Credit Card payment...");
    }
}

class PaymentFactory {
    static createPayment(type){
        switch (type) {
            case "upi":
                return new UpiPayment();
            case "creditcard":
                return new CreditCardPayment();
            default:
                throw new Error("Unsupported payment type");
        }
    }
}

const paymentType = "upi";
const payment = PaymentFactory.createPayment(paymentType);
payment.payment();