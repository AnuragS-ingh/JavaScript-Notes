// we have a property of the object that is called "getOwnPropertyDescriptor()";


// const description = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(description)


const user = {
    email: "anurag@gmail.com",
    password : 123456788,
    Address : "Dhankaul",
    District : "Sarlahi",
    Ward : 2,
    Zone : "janakpur"
}


// console.log(Object.getOwnPropertyDescriptor(user,"email"));
Object.defineProperty(user,"email",{
    writable:false,
    enumerable:true,
    configurable:false
});


// for(let [key,value] of Object.entries(user)){ // This is the another method for the iteration of the object and this should be remembered.....
//     if(typeof(value)!="function"){
//         console.log(`${key}:${value}`)
//     }
// }

console.log(Object.getOwnPropertyDescriptor(user,'email'));
user["email"]= "chandan";
console.log(user)