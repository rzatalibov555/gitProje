// 'use strict'


// var, let, const




// a = 5
// console.log(a)



// a = 9
// console.log(a)



// var a     +
// let a     +
// const a   -
// console.log(a)


// var a = 2
// console.log(a)

// var a = 5
// console.log(a)




// let a = 2
// console.log(a)

// let a = 5
// console.log(a)




// const a = 2
// console.log(a)

// const a = 5
// console.log(a)


// -------------------------------------------


// var a = 2
// console.log(a)

// a = 5
// console.log(a)




// let a = 2
// console.log(a)

// a = 5
// console.log(a)




// const a = 2
// console.log(a)

// a = 5
// console.log(a)


// ==========================================

// array []    // massiv
// object {}   //
// function () // 

// const a = ["BMW", "MERCEDES","TOYOTA"]
// console.log(a)

// a[2] = "Lexus"
// console.log(a)

// ==========================================



// let student = "Mahammad"
// console.log(student)

// {
//     let student = "Murtuz"
//     console.log(student)
// }

// {
//     let student = "Maqa"
//     console.log(student)
// }

// console.log(student)


// ==========================================




// const student = "Mahammad"
// console.log(student)

// {
//     const student = "Murtuz"
//     console.log(student)
// }

// console.log(student)


// {
//     const student = "Maqa"
//     console.log(student)
// }

// console.log(student)



// const carName = "Saab";

// console.log(carName)


// function demo(){
//     if(5 == 3){
//         alert("ela")
//     }else{
//         alert("olmadi")
//     }
// }

// demo()















// let a = 17.7
// let b = 11

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a**b);
// console.log(a/b);
// console.log(a%b);

// let a = 2
// console.log(a);

// a--
// console.log(a);


// let a = 5 // menimsetme
// console.log(a);

// let b = 10
// console.log(b);

// // a = a+b

// a += b

// console.log(a)


// let istediyim = "Fantan"

// let magazada_olan = "Fanta"
// let diger_olan = "Sirab"

// if(istediyim == magazada_olan){
//     console.log("Fanta aldim");
// }else if(istediyim == diger_olan){
//     console.log("Fanta aldim");
// }else{
//     console.log("Getdim eve");

// }

// console.log("Hello");


// ! deyilse (ƏKS)
// = menimsetme


// == braberdirse True al, (Tipini yoxlamir)
// != braber deyilse True al, (Tipini yoxlamir)




// === braberdirse True al, (Tipinide yoxlayir)
// !== braber deyilse True al, (Tipinide yoxlayir)


// let a = "5"  // str
// let b = 10    // num
// let c = 10

// if(b > c){
//     console.log("Batman")
// }else{
//     console.log("Superman")
// }



// let a = 10
// let b = 5

// a < b ? console.log("Batman") : console.log("Superman")

// if(a > b){console.log("Batman")}else{console.log("Superman")}


// function checkUser() {


//     let username = document.getElementById('username').value
//     let password = 1234

//     if (username == "Admin") {
//         console.log("Welcome " + username);
//     } else {
//         console.log("Username is invalid");
//     }
// }


// let username = "Admin"
// let password = 1234

// if (username == "Admin") {
    
//     if(password == 12345){
//         console.log("Welcome " + username);
//     }else{
//         console.log("Username or password is invalid");
//     }

// } else {
//     console.log("Username or password is invalid");
// }




// let username = "Admin"
// let password = "Demo123"
// // ---------------------------
// let db_username = "Admin"
// let db_password = "Demo123"


// if(username == db_username && password == db_password){
//     console.log("Welcome "+username);
// }else{
//     console.log("Username or password is invalid");
// }

// if(username == "Admin" || password == 1234){
//     console.log("Welcome "+username);
// }else{
//     console.log("Username or password is invalid");
// }

// console.log(typeof password)

// if(!username){
//     console.log("demo");
// }else{
//     console.log("nemo");
// }






// [] - array // massiv
// {} - object
// () - function

// function melumat(){
//     console.log("Game over!")
// }

// function a(){
//     document.write("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum laborum ipsa eum accusantium vel natus earum esse possimus error eius cumque autem odio quis quas consequuntur minus, ex quo repellat. <br>")
// }


function student(ad, soyad){
    console.log("Menim adim "+ad+" "+soyad+"dir.")
}

// student("Samir", "Quliyev")
// student("Sabir", "Aliyev")

// let a = "5"
// let b = 17
// let d = 10

// let c = a+(b+d)
// console.log(c)

// function topla(a, b){
//     // document.getElementById("result").innerHTML = a + b
//     document.body.style.background = "green"
// }


// function fail(){
//     document.body.style.background = "red"
// }



// function demo(a,b){
//     console.log(a*b)
// }

// demo(10,2)


// function demo(a,b){
//     return a*b
// }

// // console.log(demo(10,2))
// // alert(demo(10,2))
// // document.write(demo(10,2))

// let cavab = demo(10,2)

// console.log(cavab)
// document.write(cavab)

// function tester(){
//     document.getElementById('demo').innerHTML=Date()
// }

// function demo(){
//     console.log("Soltan")
// }

// function ustuneGelende(){
//     document.getElementById('demo').style.background = "purple"
// }

// function ustundenCixanda(){
//     document.getElementById('demo').style.background = "green"
// }

// function bodyRengle(){
//     document.body.style.background = "red"
// }


// ----Events----
// https://www.w3schools.com/jsref/dom_obj_event.asp All events

// onclick
// ondblclick
// onmouseover - ustune gelende
// onmouseout  - ustunden cek
// onload      - sehife yuklendikden sonra function isleyir
// onchange    - select option deiwende iwleyir (oxlarla)


function gamer(){
    let game = document.getElementById("game").value
    console.log(game)

    
}

function subzero(){
    document.getElementById("user").src = "img/subzero.gif"
}