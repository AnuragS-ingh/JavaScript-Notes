function first (){
    console.log(`this is the first function executed ${this}`);
    function second (){
        console.log(`this is the execution of the second function ${this}`);
    }
    second();
}

first();


// function user (name){
//     this.name = name;
// }

// function teacher (Class, roll){
//     user.call(this,'anurag');
//     this.class = Class,
//     this.roll = roll
// };


// let user0 = new teacher("cse",44)
// console.log(user0)


// function user1 (name){
//     this.name = name;
// }

// function teacher (Class, roll){
//     user1('anurag');
//     this.class = Class,
//     this.roll = roll
// };


// let user10 = new teacher("cse",44)
// console.log(user10)