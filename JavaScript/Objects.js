//If we declare an obj through costructor then it will treat as singleton
//Object.create  //-->singleton

//object literals
const user =  {
    name : "prathamesh",
    email: "p@think.com",
    role : "dev",
}

console.log(user.email);
console.log(user["email"]);

user.name = "abc"
//Object.freeze(user)
user.name = "xyz"
console.log(user);


user.greet = function(){
    console.log("Hello user");
}

user.greet1 = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(user.greet());
console.log(user.greet1());


//const singObj ={}
const singObj = new Object()

singObj.id="123"
singObj.name="abc"

console.log(singObj);


const userObj = {
    fullname:{
        first: "abc",
        last: "xyz"
    }
}

console.log(userObj.fullname.first);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}  //spread operator
console.log(obj3);

console.log(obj1);


console.log(Object.keys(user));
console.log(Object.values(user));

console.log(user.hasOwnProperty("name"));


//destructing array
const{name:fname} = user
console.log(fname);



