// lets start the new topic that is object 


let object1 = {
    name: "Anurag",
    Details: {
        fullName: "Anurag singh",
        contact : 225555555,
        address : {
            country: "Nepal",
            district: "Sarlahi",
            village: "Dhankaul"
        }
    }
}

// console.log(object1["name"]);
// console.log(object1["Details"]["address"]["country"]);


let object2 = {
    1:"a",
    2:"b",
    
}
let object3 = {
    3:"a",
    4:"b",
}


// let newObject = Object.assign({},object2,object3)
// console.log(newObject);

// const object4 =Object.assign ({},object1,object2,object3)

// console.log(object4);
// console.log("HIIIIII",object1);
// console.log("HIIIIII",object2);
// console.log("HIIIIII",object3);


const {1:one}=object2
console.log(one)


let a = 1;
console.log(a)
let b = a++;
console.log(a)
console.log(b)