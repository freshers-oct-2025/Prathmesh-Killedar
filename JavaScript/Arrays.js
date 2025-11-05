// const arr = [1,2,3,4]
// console.log(arr);
// console.log(arr[1]);

// arr.push(5)
// console.log(arr);

// arr.unshift(8)
// console.log(arr);
// arr.shift()
// console.log(arr);

// console.log(arr.includes(4));

// const newArr = arr.join()
// console.log(arr);
// console.log(newArr);
// console.log(typeof(newArr));

// //Slice does not manipulate original array
// const arr1 = arr.slice(1,3)
// console.log(arr1);
// console.log(arr);

// //Splice manipulate original array
// const arr2 = arr.splice(1,3)
// console.log(arr2);
// console.log(arr);

// const mhCity = ["pune", "mumbai"]
// const oCity = ["delhi"]

// const city = mhCity.concat(oCity)
// const city1 = [...mhCity, ...oCity]
// console.log(city1);



// console.log("Hello", a);
// var a =null;
// console.log(a);
// a=5;
// console.log(a);




setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
  console.log("Timeout 2");
  
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

console.log("End");