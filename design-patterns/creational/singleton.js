import mongoose from "mongoose";

const DB_NAME = "my_database";
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";

class Database {
  static instance;

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async connect() {
    return mongoose.connect(`${MONGO_URL}/${DB_NAME}`);
  }
}

export default Database.getInstance();


// IMPORTANT NOTE: Node.js already caches modules after the first import, so this behaves like a singleton without adding extra class complexity.

// or real applications, your original code is preferred:

// const connectDB = async () => {
//   await mongoose.connect(...);
// };

// export default connectDB;



// NOTE: This implementation of the Singleton pattern ensures that only one instance of the Database class is created. The `getInstance` method checks if an instance already exists; if not, it creates a new one. The `connect` method establishes a connection to the MongoDB database using Mongoose.

// Usage example:
// import Database from './singleton.js';
// const db = Database.getInstance();
// db.connect().then(() => console.log("Connected to the database!")).catch(err => console.error(err));

