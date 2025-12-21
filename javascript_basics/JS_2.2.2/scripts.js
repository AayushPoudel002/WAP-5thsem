const delay = 4000 //miliseconds 

//callback hell
/* 1.very complex
// 2.difficult to understand
 3.Nesting and redundancy
*/

/*
setTimeout(()=>{
    console.log("Hello world") //4sec
    
    setTimeout(()=>{
    console.log("Hello world again") //8 sec
    },delay)

},delay)
*/

//making function for callback hell
function getdata(data, getmoredata)
{
    setTimeout(()=>{
        console.log("data : ", data)
        getmoredata()
    }, delay)
}

getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{})
    })
})

/*

//PROMOISE
//"I promise to give you a value in future , either expected value or an error"
let promise = new Promise((resolve, reject)=>{ //promise is an object and Promise is a class resolve and reject are functions
    resolve("resolved") //resolve is a function which takes one argument, cannot use both resolve and reject together
    //cannot name them anything else, to call resolve or reject use these exact names, using .then and .catch methods
    //reject("rejected") //reject is a function which takes one argument
})


promise.then((res)=>{console.log(res)}) //then is a method which takes one argument a function which is called when promise is resolved
//.then is used to handle resolved promise, res is the value passed to resolve function, it can be named anything and value can be of any type given by resolve function
promise.catch((err)=>{console.log(err)}) //.catch is used to handle rejected promise, err is the value passed to reject function, it can be named anything and value can be of any type given by reject function
//err and res are just variable names, you can name them anything you want

*/


/*
//Async/Await
//async function always returns a promise
//await is used to wait for a promise to resolve or reject
*/
function getdata(data)
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("data : ",data)
            resolve("Sucess")
        }, 1000)
    })
}

//must use async, if inside the function
async function main() { //here async is used to use await inside the function , without async it will give error, async is used to declare a function as asynchronous
    await getdata(1)
    await getdata(2) 
    await getdata(3)
}

main()