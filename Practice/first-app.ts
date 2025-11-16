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


function calculate(a:number, b:number, calcFn: (a:number, b:number)=> number ) {
  calcFn(a,b)
}

calculate(2,5,add)


interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@gmail.com"
}

class AuthCredentials implements Credentials {
  email!: string;
  password!: string;
}

function login(credentials: Credentials){}
login(new AuthCredentials())

type Admin = {
  permissions: string []
};

type AppUser = {
  userName: string;
}

type AppAdmin = Admin & AppUser;

interface Adc {
  permissions: string [];
}

interface AppUs {
  userName: string;
}

interface AppAd extends Adc, AppUs {}

// let role: "admin" | " user" // this stores only either admin or user nothing else
  



  type Role = 'admin' | "user" | "editor";
  let role: Role;

  let roles: Array<Role>
  roles=['admin','editor']



  let CodeList : number[] = [34,45,56] // Array types
 
  //? Generic type arrays : 

  let serialNumber: Array<number> = [2222344,53]

  //? Tuple types allw you to express an array with a fixed number of elements whose types are known
  //?  but need not be the same, 

  //!tipleri belli bir array, sayisi sabit

  let yu: [string, number, string]

  yu= ["imren", 67, "tulin"]

  //! tuple icinde destruction

  let car: [string, number]=["BMW",2023]
 let [brand,model]=car

 //? Tuple icindeki degerlerin degistirilmesini engellemek icin readonly kullanabiliriz:

const settings:readonly[string,number]=["dark", 45]
 settings=["light",2]

 // Otomatik olarak numaralandiriliyorlar enum ile. 0 dan baslar
 enum Color {
  red,
  green,
  blue
 }
 let selectedColor : Color=Color.blue

 //! ANY 
 //Ts de en esnek veri turudur.
 // TS tin siki tur denetimini devre disi birakir
 // Onceden turu bilinmeyen veriler icin kullanilir

 let h:any=45
 h="Merhaba"