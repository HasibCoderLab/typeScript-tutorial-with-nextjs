//  =========     Basic of Typescript=========

let age: number = 18;
age = 10 + 1;

let user: string = "Hasib Hasan";
user = "Fahim"

let Marks: number[] = [14, 18, 41, 14, 19, 23, 16, 15.81, 0.2];
// marstdMarksks = [85,14,55,78,26,25,544,];

// ==================   Topic => array              =====================

let names: string[] = ["Hasib", "Fahim", "Rifat", "Hasan"];
names = ["Akash", "Shamim", "Mahbub"];
let arr: Array<number>
arr = [15, 15, 1859]
let isOnline: boolean;

// isOnline= "Hi"
isOnline = true;



// ======  Tuple ============

let twoWord: [string, boolean];
twoWord = ["Hasib", true];


enum role {
    "user", "admin"
}
// role = "Hi"

// Personal Type

type hasib = number | boolean

let c: hasib;
c = 18;
c = true


type status = "succes" | "error" | "pending"

let  s:status;
s="succes"
// s= "Hi"// wrong 

// ========== for object  ===========

type user = {
    name :string,
    age:number
}

let id : user

id ={
    name:"Hasib",
    age:18
}

type post ={
    caption:string,
    image:string,
    video:string,
    likes?:number
}

let social:post ={
caption:"gbkjhkr",
image:"wth36t3453dnkvb.com ",
video:"http/wkjuhgteruiiiii.com",
likes:45
}






type mathFn = (a:number , b:number) => number

let add:mathFn = (a,b) =>{
    return a
}