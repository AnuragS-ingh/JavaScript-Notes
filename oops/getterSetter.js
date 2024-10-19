// class User{
//     constructor(name,email,password){
//         this.email = email;
//         this.password = password;
//         this.name = name;
//     }

//     get password(){
//         return this.password.toUpperCase()
//     }

//     set password(value){
//         this.password = value
//     }
// }   
// => This code block will give the error because the constructor is also setting the password and the setter is also setting the password





class User{
    constructor(name,email,password){
        this.email = email;
        this.password = password;
        this.name = name;
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}


const user1 = new User("chandansingh@gmail.com",123456,"anurag singh");
console.log(user1.password);