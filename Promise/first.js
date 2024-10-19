// const promise1 = new Promise(function(resolve,reject){
//     // Do an async task
//     //DB calls , cryprography, network etc

//     setTimeout(function(){
//         console.log('hello')
//     },3000 );
//     resolve()
// });

// promise1.then(function(){
//     console.log("task 1 resolved");
// });

// //******************************************************************************************************** */

// new Promise(function(resolve,reject){
//     console.log("hello");
//     resolve();
// }).then(function(){
//     console.log('task2 resolved');
// })

// // //********************************************************************************************************* */


// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "hello",email: "anuragsinghrock143@gmail.com"})
//     },1000);
// });


// promise3.then(function(user){
//     console.log(user)
// });


// new Promise(function(resolve, reject){
//     resolve({hello:"this is the fourth promise "})
// }).then(function(data){
//     console.log(data)
// })

// // //********************************************************************************************************* */

// // Promise 4


// const promise4 = new Promise(function(resolve, reject){
//     let error = false;
//     if(!error){
//         resolve({user:"hello",message:"world"});
//     }else{
//         reject("this is the error something went wrong");
//     }
// });

// promise4.then(function(user){
//     return user.user;

// }).then(function(userName){
//     console.log(userName)
// })
// .catch(function(message){
//     console.log(message)
// });

// // //********************************************************************************************************** */

// // //Promise 5

// new Promise(function(resolve, reject){
//     let condition = true;
//     if(!condition){
//         resolve({userName: 'Anurag singh', gmail: 'anuragsinghrock143@gamil.com'})
//     }else
//     {
//         reject("some error")
//     }
// }).then(function(user){
//     console.log (user);
//     return user.userName;
// }).then(function(name){
//     console.log(name)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){ //this will execute if the promise is either resolved or get rejected.....
//     console.log("the promise is either resolved or rejected")
// })

// // //******************************************************************************************************* */

// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve("promise is resolved ")
//         }
//         else
//         {
//             reject('promise is rejected')
//         }
//     }, 2000)
// })


// async function consumePromise5(){
//    try{
//     const response = await promise5;
//    console.log(response)
//    }catch(error){
//     console.log(error)
//    }
// }

// consumePromise5()

// //********************************************************************************************************* */


// async function users(){
//     try{
//         let url = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await url.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// users();


// // ***********************************************************************************************************




// function hlo(){
//     let url = fetch('https://jsonplaceholder.typicode.com/users');
//     url.then(function(response){
//         let data = response.json()
//         return data
//     })
//     .then(function(data){
//         console.log(data);
//     }).catch(function(error){
//         console.log(error)
//     })
// };
// hlo()

//********************************************************************************************************* */

// const promise = new Promise((resolve,reject)=>{
//     resolve({userName:"Anurag singh",gmail:"anuragsinghrock143@gmail.com"})
// });

// promise.then((user)=>{
//     let data = user;
// }).then((userData)=>{
//     console.log(`The require data of the user is ${data}`)
// })

// http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no

//  function weather(){
//     let apiKey ='038c18695e184ec2a9091722242109'
//     let rawData =  fetch('http://api.weatherapi.com/v1/current.json?key=038c18695e184ec2a9091722242109&q=Kathmandu');
//     rawData.then((processData)=>{
//         let data =  processData.json();
//         return data;
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// weather()