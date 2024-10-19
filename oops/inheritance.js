// class user {
//     constructor(userName){
//         this.user =userName
//     }

//     logme(){
//         console.log(this.user)
//     } // This method of the user class is also inheraited by the class teacher as we have created the class teacher with the help of the user class ie we have inherited the user class so when we inherited the user class and formed the another class that is teacher class its all the properties and the method is inherited by the teacher class this is called the inheritance in the object oriented programming and this is the beauty of the oops.
// }

// class teacher extends user{
//     constructor(user,email,password){
//         super(user);
//         this.email= email;
//         this.password = password;
//     }

//     addcourse(){
//         console.log(`entended the userName ${this.user}`)
//     }
// }

// let teacher1 = new teacher("Anurag singh", "anurag@gmail.com",12345); // New course is compulsory to be used..
// console.log(teacher1);
// teacher1.addcourse()
// teacher1.logme()


// // so in order to check whether the teacher1 is the instance of the teacher or not we have a keyword called the "instanceOf" lets see the example:---

// console.log(teacher1 instanceof teacher) // This check whether the teacher1 is the instance of teacher or not and in this case it is the instance of the teacher because it is created using the blue print teacher...



class User {
    constructor(Name,email){
        this.name = Name;
        this.Email = email;
    }
}

class Admin extends User{
    constructor(Name, email,password,phone,Address){
        super(Name,email);
        this.Password = password;
        this.phone = phone;
        this.Address = Address;
    }
}

let admin = new Admin("Anurag", "singh@gmail.com",1234567789,555555,"Dhankaul");

console.log(admin)