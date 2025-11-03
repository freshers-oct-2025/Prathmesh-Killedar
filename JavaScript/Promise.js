const myPromise = new Promise((resolve,reject)=>{
    let success = false

    setTimeout(()=>{
        if (success) {
            resolve("Promise fulfilled")
        }else{
            reject("Promise rejected")
        }
    },2000)
})
console.log(myPromise);


myPromise
    .then((msg)=>{
        console.log(msg);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("Promise finised");
        
    })