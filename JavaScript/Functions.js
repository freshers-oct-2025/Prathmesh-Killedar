// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }

function addNum(num1, num2){
    return num1+num2
}

const result=addNum(5,"8")
console.log(result);

function userLogin(name){
    if(!name){
        console.log("please Enter name");
        return
    }
    return `${name} loged in`
}

console.log(userLogin("abc"));
console.log(userLogin());

function items(...num1){   //Rest operator
    return num1
}
console.log(items(20,50,84));


const arr = [1,5,6,8,4,3]
function returnThirdvalue(getvalue){
    return getvalue[3]
}
console.log(returnThirdvalue(arr));
console.log(returnThirdvalue([2,6,4,3]));


empObj ={
    id:100,
    name:"xyz"
}

function empdata(info){
    console.log(`Emp id is ${info.id} and name is ${info.name}`);
}
empdata(empObj)




const item ={
    name:"mobile",
    price: 100,

    message: function(){
        console.log(`${this.name}, purchesed`);
        //console.log(this);
    }
}

item.message()
item.name="laptop"
item.message()
//console.log(this);


const greet = () => {
    let name = "abc"
    console.log(this);
}
greet()

// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
//If we use braces then we have to use return keyword else use parenthasis
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(5,7))