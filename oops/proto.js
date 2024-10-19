// function creator (name){
//     this.name = name;
//     return this.name
   
// }

// // creator.prototype.print= function(){
// //     return this.name;
// // }
// // let object1 = creator("Anurag singh", 45, "math");
// // let object2 = new  creator("Sachin",44,"english");

// // console.log(object2);
// // // console.log(object2.print())
// // // console.log(object1)

// creator.prototype.trueLength = function(){
//     let length = 0;
//     for(let i = 0 ; i<= this.name.length ; i++){
//         if(this.name.charAt(i)=== " "){
//             continue;
//         }else{
//             length += 1
//         }
//     }
//     return length;
// }


// let name =  new creator("anurag singh   ");
// console.log(name.name.length)
// console.log(name.trueLength())


// function arrayCreator (...arrayElement){
//     this.array=arrayElement;
//     console.log(typeof(this.array))
// }


// arrayCreator.prototype.modify = function(){
//     let indexArray =[];
//     this.array.forEach((element,index)=>{
//         if(index%2 == 0 && index!=0){
//             indexArray.push(index)
//         }
//     });
//     return indexArray;
// }

// let first = new arrayCreator(12,14,13,16,15,15,17,18,12,75);
// console.log(first)
// console.log(first.modify())




// function objectConstructor (Name,Class, roll){
//     this.Name = Name,
//     this.Class = Class,
//     this.Roll = roll
//     return this
// }

// objectConstructor.prototype.valuePrinter = function(){
//     for(let property in this ){
//        if(this.hasOwnProperty(property)){
//         console.log(`${property}: ${this[property]}`)
//        }
//     }
// }

// let firstObject =  new objectConstructor("Anurag singh","CSE",66);
// firstObject.valuePrinter()



// let Name = "Anurag   singh";

// String.prototype.trueLength = function(){
//     let counter = 0
//     for(let property in this){
//         if(this.hasOwnProperty(property) && this[property]!== " " ){
//             counter +=1
//         }
//     }
//     console.log(`The true length is ${counter}`);
// };

// Name.trueLength();

// "Chandan singh  ".trueLength()
// "Shitesh    jha".trueLength()
// console.log(Name.length)


// Inheritance 

// let user = {
//     name: "Anurag",
//     Class : "CSE",
    
// }

// let address = {
//     city : "Dhankaul",
//     ward : 2,
//     // __proto__:user // This line attached the user with the address 
// }



// // This is the prototypal inheritance that this will allow to inherit the properties of the other object....But this is the out dated syntax we have the another syntax...

// Object.setPrototypeOf(address,user) // This is the better and the modern way to set or attach the properties one object to another

// console.log(address.name) 


