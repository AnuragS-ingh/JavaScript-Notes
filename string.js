/*
String : =>  String is the sequence of the character. It is written in the single quote ('String') or in the double quote ("String"). So in the string we can perform multiple operation and function on the string...

 Now let's see how can we decleare the string :-

let string1 = 'Anurag singh' // initializing the string using the singhle quote..

let string2 = "Shitesh jha"; // initializing the string using the double quote...

console.log(`here we will get string type when we check the type of the variable string2 we will get @ ${typeof(string2)}`); // This way of writing the string is called the string intepolation and this method help us to direct inject the variable in the string it is same and the concatination of the string..

So above is the simple method of declearing and the initializing the string.. but on the other hand we have one more method for declearing and initilizing the string and that is by using the constructor..

let string3 = new String('this is the string initialize using the constructor'); // the point to be noted is that this method of initializing the string return us the String object..

console.log(string3);
console.log(typeof(string3)); // So when ever we decleare the string using the constructor then we get string object in the return..


Now lets us see the concatination of the string :- Concatination of the string means adding two or more string together, lets see some of the example...

Above we have two variable that store the string and we want to concatinate these two string the we can do it in the two ways:-


console.log(string1 + string2); // This will add the two string of the two variable together..
console.log("Anurag singh " + "Shitesh jha "); // This will also add the two string together..

***************************************************************************************************************************************

String interpolation :- String interpolation is the technique that allows us to dyanamically adding strings into the existing string, whether the string is stored in the variable or as the property of the object..

let stringObject = {
     name : "Anurag singh"
}

console.log(typeof(stringObject.name)); // This will return the output as string.
console.log(`we are testing the string interpolaton ${stringObject.name} and ${string1}`) // This will concatinate the the name property of the stringObject and the variable containing the string together and return the string..

************************************************************************************************************************************************

Various method of the string

There are various method of the string, and they are listed below:-


anchor:ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt:ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt:ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor:ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase:ƒ toLocaleLowerCase()
toLocaleUpperCase:ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()


Above are the various type of method of the string, let's discuss some of the important method of the string:-

******************************************************************************************************************************************************************************************************************************************************************************************************

1: .length :- This is the property of the string which is used to find the length of the string.
syntax :- name_of_variable or string.length; 

let string4 = "version";
console.log(string4.length);

******************************************************************************************************************************************************************************************************************************************************************************************************

2: .toUpperCase() :- This method of the string is used to change the string to the uppercase..
syntax :- nameOfVariable or string.toUpperCase();

console.log(string4.toUpperCase());
console.log("vishal".toUpperCase());

******************************************************************************************************************************************************************************************************************************************************************************************************

3: toLowerCase() :- This method of the string is used to convert the entire string to the LowerCase.
Syntax :- nameOfVariable or string.toLowerCase();

let string5 = "VISHAL";
console.log(string5.toLowerCase()); // This will convert the string inside the variable string5 to the lowerCase..
console.log('SHITESH'.toLowerCase());// This will convert the string 'SHITESH' to the lowerCase.

******************************************************************************************************************************************************************************************************************************************************************************************************

4: .indexOf('character or word of the string',start) :- This method is used to find the index of the specific character or word of the string, but this will only return the first occurance of the word or the character of the string.. let's see the example..

let string6 = "Pooja";
Now we want to find the index of "j" in the string 'Pooja'
console.log(string6.indexOf('j'));
console.log(string6.indexOf('o')); // although we have two "o" in the string Pooja but it is only giving the index of the first 'o', so this indexOf() method only returns the first occurance of the character or the word of the string...
console.log(string6.indexOf('l'))// since in the string "Pooja" the character 'l' donot exist it will return us -1

let longString = 'The quick brown fox jump over the lazy dog, the quick brown dog jump over the lazy Dog';
console.log(longString.indexOf("brown")); // In the case of the word the method return the index from where the word starts
=> This method of the string contain two parameter first is the word or the character that we want to  known the index of and second parameter is the starting point form where we want to begin our search..

console.log(longString.indexOf("dog",20)) // in this case the search will start from the 20th index..

******************************************************************************************************************************************************************************************************************************************************************************************************
 
5: charAt(Index):- This method of the string is used to find the character at the passed index and if the index is not found in the string it simply return the empty string.
lets see the example of it

let string7 = "hello world"
console.log(string7.charAt(4)) //=>the out put of this will be 'o';
console.log(string7.charAt(40)) // => The output of this will be I("") empty string..

***************************************************************************************************************************************************
***************************************************************************************************************************************************


6: slice(start-index,end-index):- This method of the string is used to extract the part or the section of the string with out modifying the original string.

In this method we have two parameter: 

start-index:- This is the index from where we want to slice the string.
End index:- This is the index up to which we want to slice the string....

## Point to be noted is that the start index is included and the end index is excluded..
lets see the example

let string7 = "slicingStringExample";
let newStringSlice = string7.slice(2,8);
console.log(newStringSlice) =>The output will be "icingS"

=> This string method also take the negative indexing but in the specific manner like:-


let string7 = "slicingStringExample";
console.log(string7.slice(-6,-2)); => THe output will be xamp

*/

let string7 = "slicingStringExample";
console.log(string7.slice(-1,-4)) => This will give the empty string because this is not the correct format for passing the index