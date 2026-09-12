// The Builder Design Pattern is a creational design pattern that helps construct complex objects step by step. Instead of having a constructor with many parameters or multiple constructors, the Builder pattern lets you build an object in a readable and flexible way.

//Bad example

class User {
    constructor(name, age, email, phone, address, country, city, zipCode) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.city = city;
        this.zipCode = zipCode;
    }
}

// Good example

class UserBilder{
    setName(name){
        this.name = name
        return this
    }
    setUsername(username){
        this.username = username
        return this
    }
    setAge(age){
        this.age = age
        return this
    }
    userBuild(){
        return this
    }

}

const user = new UserBilder().setName("dileep").setUsername("dileep2malviya")

console.log("user :: ",user)

// One more example

class Request {
    constructor() {
        this.method = "GET";
        this.url = "";
        this.headers = {};
        this.body = null;
    }
}

class RequestBuilder{
    constructor(){
        this.request = new Request();
    }

    setMethod(method){
        this.request.method = method;
        return this;
    }

    setUrl(url){
        this.request.url = url;
        return this;
    }

    setHeader(key, value){
        this.request.headers[key] = value;
        return this;
    }

    setBody(body){
        this.request.body = body;
        return this;
    }

    build(){
        return this.request;
    }
}

const req = new RequestBuilder()
    .setMethod("POST")
    .setUrl("/users")
    .setHeader("Authorization", "Bearer token")
    .setBody({ name: "John" })
    .build();

console.log(req)