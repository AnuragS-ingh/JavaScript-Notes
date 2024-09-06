// Now lets study about the arrow function 


// syntax of the arrow function 

let arrow = (a,b)=>{
    return a+b;
}

console.log(arrow(4,5))  // This is the simple arrow function 

// There are some other way to write the arrow function in this contex we have one concept called inplicit return it means we donot have to use 
// return key word 

let arrow2 = (a,b)=>a+b;
console.log(arrow2);

let arrow3 = (a,b)=>(a-b);
console.log(arrow3(4,2));


let arrow4 = ()=>({username:"Anurag singh",gmail:"chandansinghrock143@gmail.com"});
console.log(arrow4())

let arrow5 = ()=>{username:"Anurag singh",gmail:"chandansinghrock143@gmail.com"}; // THis is the wrong syntax ;
console.log(arrow5())



// Note :- When we use curly braces then in that case we have to use the return keyword and if we use the parenthesis then we donot have to use the return keyword 

