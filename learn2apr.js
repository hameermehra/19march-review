

/*  switch conditional
if one sanario
2 and more sanario else if

let a=10
let b= "20"
let d=String(a)  //explicite
console.log("d is",typeof d)
let c=d*b  //implicite
console.log(typeof c, c)

let cgpa=9.5
let yop=2019
if(cgpa>=8.5&&(yop===2020||yop===22021)){
console.log("the student is eligible")
}
else if(cgpa>=9.0&& yop<=2020){
console.log("relaxation catagory-elgible")
}
else{
    console.log("the student is not eligible")
}
*/


let age =25
let bp =false
let sugar=false
let mc=false
if(age>=18&&age<=75){
    if(bp===false&&sugar===false){
    if (mc){
        console.log("medical condition-not eligible")
    }
     else{
         console.log("please register for vaccination drive-eligible")
     }
}
else{
    console.log("bp/sugar - not eligible")
}

}









