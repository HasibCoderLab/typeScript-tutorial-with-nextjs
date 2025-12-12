// ======== type  inference ====== 
let b = 78;

// ======== type  annotation ====== 
let a : number ;
a =40;


interface User {
    name:string,
    age:number,
    email?:string,
    readonly role: string;

}



// =========== combain for Type => use  = >&



type A = {
    a:number,
   
}

type B ={
     b:string;
}

// let obj:A = {
//     a:48,  /=> Not combain
//     b:"GS"
// }

type AB = A & B


// =========== combain for interface => extends

interface X{
    x:number
}

interface Z extends X{
    z:string
}

let obj1:Z ={
    x:48,
    z:"Hasib"
}