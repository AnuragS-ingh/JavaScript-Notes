// in this page we will see the detail discussion about the this key word 

// This behave differentely in the different case:-

// 1. when this is used in the function which is the method of the object in that case this refers to the object.. for example:

let obj = {
    name:"Anurag singh",
    class: "Cse",
    print(){
        console.log(this) // In this case the function will print the obj..
    }
}

// obj.print()

// // 2. when the function is not the method of the object in that case this refers to the global object.. for example:-

// let name = "Anurag singh"
// function print(){
//     console.log(this); // In this case the function will print the global object
// }

// print()

console.log(this)