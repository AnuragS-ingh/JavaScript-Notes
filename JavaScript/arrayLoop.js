// const array =["a","b","c","d","e"];

// for(const character in array){
//     console.log(character) // This for in loop will return the key of the array or we can simply say it gives the index of the array element. as we know that in the javaScript every thing is treated as the object so index of the array acts as the key of the object.
// }

// for (const elements of array){
//     console.log(elements);
// }


// const arrayObject = [{name:"Anurag singh",class:"cse",roll:45},{name:"chandan singh",class:"cse",roll:66},{name:"Rahul singh",class:"eee",roll:48},{name:"Ram singh",class:"civil",roll:82}];

// for(const name of arrayObject){
//     console.log(name.name);
// }

// const string ="Divya Jyoti";
// for (const character of string){
//     if(character == " ")continue;
//     console.log(character)
// }


// For of loop donot  directly iterate the object that is we cannot get the key value pair of the object directly using the for of loop lets see the example:

let newObject = {
    name:"Anurag singh",
    class:"Cse",
    Roll: 66,
    Subject: "JavaScript"

}



// for (const key of newObject){
//     console.log(key) // SO this will give us the error because the object cant be iterated directly using the for of loop in the javaScript that is why we use for in loop insted of the for of loop for the iteration of the object...
// }


// for (const key in newObject){
//     console.log(`The key of the object is ${key} and the key pair of the object is ${key}=>${newObject[key]}`)
// }

// Map is Same like the object but the major difference between map and the object is that map remember the order of the insertion and also it donot support the duplicate object that is it ignore the duplicate object but on the other hand the object do not remember the order of the insertion and also it donot ignore the duplicate object 

// In the object the key value pair of the object is seperated by the : but in the map the key value is seperated by the comma(,)


// const map = new Map();
// map.set("eng","England");
// map.set("NE","Nepal");
// map.set("IN","India");
// for(const [key,value] in map){  // Map is not iteratiable using the for in loop but we can iterate it using for of loop.
//     console.log(key,value);
// }

// for(const [key,value] of map){
//     console.log(key,value); // This for of loop can provide us the key and the value of the map..
// }


// *********************************************************************************************************************

// for each() method of the Array:- This method of the array is used to iterate the array it donot return any thing. It takes callback as the parameter and the callback of this method have three parameter :-

//1. element  2.index of the element 3.array..

// let array = ["Ram","Sita","Hari","Gita","Radhe","Krishna"];

// array.forEach((element,index,array)=>{
//     console.log(element,index,array);
// })

// function printElement(Element){
//     // console.log(Element);
//     if(Element == "Radhe"){
//         console.log(Element)
//     }
// }

// array.forEach(printElement);

// array.forEach(function(element){
//     console.log("*-*-*--*-*--*-*-*-*-*-*---*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-**-*-*-*-");
//     console.log(element);
// })


let counter = 0;

let array2 = [1,2,3,4,5,6,5,5,2,3];



function count(array){
    let count={};
    array.forEach((element)=>{
        if(count[element]==true){
            count[element]+=1;
        }else{
            count[element]=1;
        }
    });
    return count
}

console.log(count(array2))


function property(array){
    let newObject = {};
    array.forEach((element)=>{
        newObject[element];
    })
    return newObject
}

property(array2)