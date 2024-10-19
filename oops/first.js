function thistester(){
    console.log(this);
}

function changer (userName,Class,roll){
    this.userName = userName;
    this.Class = Class;
    this.roll = roll;
    return this;

}

 let first =  new changer("anurag singh","cse",45);
 let second = new changer("Chandan singh ","CSE",66);

 console.log(first);
 console.log(second)
