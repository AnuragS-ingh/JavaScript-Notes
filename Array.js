// There are two ways to decleare the array:

// let array = [1,2,3,5,4,8];
// const array2 = new Array(1,2,3,5,8,9); // This array is initialized using the array constructor...

// console.log(array)
// console.log(array2)



// The various method of the Array 

// 1: Array.Push():-

// let array1 =[1,2,3,4,5];
// array1.push(5);
// console.log(array1);

// 2: Array.Pop():- This is the parameter less method of the array and this method is used to remove the last Element from the Array and return that element..

// let removedElement = array1.pop();
// console.log(array1);
// console.log(removedElement);

// 3: Array.Unshift(Element):- This method of the array is used to add the specified element at the 0th index of the array that is why this method is considered less efficient in the context of time and the space as it take long time if the element of the array number is High because it add the element at the 0th index so it shift all the element and this process is time taking...

// let array3 = [1,2,5,4,8,6,9];
// array3.unshift(45,12,18,14,15,17);
// console.log(array3)

// let array4 =[1,2,3,[1,5,8,[2,5,8,6]],[2,5,9,8]]
// let arrray5 =[12,14,15,17,18,1,9];
// console.log(array3.concat(array4));
// console.log(array3.concat(arrray5))


//4: concat 

let array1 =["Ram","Sita","Hari"];
let array2 = [1,2,3,4];
let array3 = [1,2,['a','b'],3];
let array4 = ['a','b',[5,6,7],'c'];


let merge1 = array1.concat(array2);
let merge2 = array2.concat(array3,array4);
let string = "vishal";
let spread__ = string.split('',3)
console.log(spread__)

let spread_ = [...array3,...array4];

console.log(spread_)

// let new_ = merge2.flat(2);
// console.log(`flatted array @ ${new_} and type of  ${typeof(new_)}`)

// console.log(merge1)
// console.log(merge2)



