export {};

let userName = "Max";


//userName=34;
userName= "Max"

let userAge = 34;

let isValid = true
// string, number , boolean mostly we will use those

let userID: string | number = "abc1"
userID = 123;


let user: object;

 

user={
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc"
}



// let hobbies : Array<string>;
let hobbies: string[]; //same as above array of strings


//{namne:string; age:number}[]

hobbies = ['Sports', 'Cooking', 'Reading'];
// hobbies = [1,2,3]


function add(a:number, b: number) {
const result = a+ b;
return result;
}