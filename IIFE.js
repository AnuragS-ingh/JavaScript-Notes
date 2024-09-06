(function greet(greeting){
    console.log(greeting)
})("hello");

((greet)=>{
    console.log(greet);
})("good morning")