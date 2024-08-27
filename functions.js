// let addition = function add(num1,num2){
//     return(num1+num2);
// }

// console.log(addition(1,3))


// console.log(add(4,5))


// function add(num1,num2){
//     console.log(7,8)
// }

// let addition = add(4,5);

// console.log(addition)


// function addCart(...price){
//     return price;

// }

// console.log(addCart(400,200,5222,55,44,88))

addtwo(4) // This will throw an error because the it is used befor the decleration of the function ....
const addtwo = function (num){
    return num+2
}


// but we have another case where we can exucute the function where the function is decleared after the execution and this concept is called the hoisting ..


add(5) // THis will be executed because this follow the concept of the hoisting

function add (num){
    return num+5
}

