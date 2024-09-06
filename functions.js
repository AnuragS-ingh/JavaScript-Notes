// lets study the function :

/*
********************Function****************************************

Function is the block of the code that perform a specific task and can be called when ever we need.

lets see the syntax of the function decleration 

function function_name(parameters ){
    function body or the code to be executed...
}

lets see the example:
*/


function greeting(Greet){
    console.log(Greet)
}

greeting("Morning") // THis line will print morning in the console...

// we can also store the function in the variable :-

let functionVar = function(a,b){
    return a+b // In this function we have used the return keyword and this keyword is used to return the specific value from the function infact we can say that return keyword is used to return the single value...
}

console.log(functionVar(4,5))