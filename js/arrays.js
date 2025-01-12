


// let user1 = "Eyyub"
// let user2 = "Mehemmed"
// let user3 = "Hesen"
// let user4 = "Saleh"
// let user5 = "Suleyman"



// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(user4)
// console.log(user5)


// () - Function
// [] - Array// Massiv
// {} - Object



// let users = ["Eyyub", "Mehemmed", "Hesen", "Saleh", "Suleyman"]

// console.log(users[4][0])

// console.log(`Menim adim ${users[4]}dir.`)
// document.write(`Menim adim ${users[0]}dur.`)
// document.getElementById('demo').innerHTML = `Menim adim ${users[0]}dur.`

// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])
// console.log(users[4])

// associate array [[]]

// let tour = [
//     ["Eyyub", "Mehemmed", "Hesen", "Saleh", "Suleyman"],
//     ["Aygun", "Sabina", "Ayten", "Nigar", "Mehriban", "Gultac", "Aytac"],
//     ["Quba", "Lenkeran", "Qebele"],
//     ["Turkey", "Almaniya", "Italiya","Ispaniya"],
//     ["149", "150",["HTML", "CSS"]]
// ]

// console.log(tour[4][2][1])

// let cars = ["BWM", "Mercedes", "Jaguar"]

// console.log(tour[0][1]+"in masini "+cars[2]+"dir.")
// console.log(tour[0][1]+"in masini "+cars[2]+"dir.")
// console.log(`${tour[0][0]} ile ${tour[1][3]} ${tour[2][2]}ye tura ${tour[4][0]} nomreli ${cars[1]} markali avtobus ile yola duwduler.`)

// =============== Homework =======================================

// let tour = [
//     ["Eyyub", "Mehemmed", "Hesen", "Saleh", "Suleyman"],
//     ["Aygun", "Sabina", "Ayten", "Nigar", "Mehriban", "Gultac", "Aytac"],
//     ["Quba", "Lenkeran", "Qebele"],
//     ["Turkey", "Almaniya", "Italiya","Ispaniya"],
//     ["149", "150",["HTML", "CSS"],"Rza"]
// ]

// H => Hesen
// e => Mehriban
// s => Ispaniya
// e => Suleyman
// n => Aygun

// Menim adim Hesendir
// console.log()
// =============== Homework =======================================



// [] ve ya Array()
// let cars1 = new Array("BWM", "Mercedes", "Jaguar")
// let cars2 = ["BWM", "Mercedes", "Jaguar"]


// console.log(cars1) 
// console.log(cars2) 


// document.body.style.backgroundImage = "url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47166A2DCA6E85A1D74A9D7A6FA2B6EB6069B613D9C8E3DB4E998AA78461B530/scale?width=1200&aspectRatio=1.78&format=webp')"
// document.getElementsByTagName("body")[0].style.backgroundImage = "url('https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47166A2DCA6E85A1D74A9D7A6FA2B6EB6069B613D9C8E3DB4E998AA78461B530/scale?width=1200&aspectRatio=1.78&format=webp')"


// let cars = []
// console.log(cars)

// cars[0] = "Toyota"
// cars[1] = "Mercedes"

// console.log(cars)



// let cars2 = ["BWM", "Mercedes", "Jaguar"]
// let masin =  cars2[0]

// console.log(masin)


// function test(){
//     alert("Function active")
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango", test];

// let starts = fruits[4]

// starts()



// let result = fruits.toString();
// console.log(typeof result)


// document.getElementById("demo").innerHTML = fruits.toString();



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.push("Armud")
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
// fruits[6] = ["Demo","nemo"];
// fruits[5] = "Potato";
// console.log(fruits)
// let length = fruits[fruits.length - 3];
// console.log(length)

// console.log(fruits)
// console.log(fruits.sort())


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;
// console.log(fruits.toString())


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);

// document.getElementById("demo").innerHTML = fruit;
// console.log(fruit)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" [-] ");
// console.log(fruits.join(" [-] "))


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)

// fruits[5] = "Tester"
// console.log(fruits)
// fruits[10] = "Eyyub"
// console.log(fruits)
// fruits[8] = "Suleyman"
// console.log(fruits)
// fruits[9] = "Saleh"
// console.log(fruits)

// fruits.push("Kiwi")       // axirdan elave edir
// fruits.unshift("Lemon");  // evvelden elave edir

// let data = fruits.pop()   // axirdan silir
//let data = fruits.shift()  // evvelden silir

// document.getElementById("demo").innerHTML = fruits;
// console.log(fruits)


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myBoys.concat(myGirls);

// document.getElementById("demo").innerHTML = myChildren;



// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array3, array2); 

// document.getElementById("demo").innerHTML = myChildren;


// const myArray = ["Emil", "Tobias", "Linus"];
// const myChildren = myArray.concat("Peter"); 
// document.getElementById("demo").innerHTML = myChildren;


// const myArr = [[1,2],[3,4],[5,6]];
// console.log(myArr)

// const newArr = myArr.flat();

// document.getElementById("demo").innerHTML = newArr;
// console.log(newArr)





// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;

// fruits.splice(2, 0, "Suleyman", "Saleh");
// document.getElementById("demo2").innerHTML = fruits;



// const fruits = ["Apples", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Mango");
// console.log(fruits)
// console.log(position+1)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let data = fruits.includes("Oranges"); // is true
// console.log(data)




// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// document.getElementById("demo").innerHTML = "First number over 18 is " + first;

// function myFunction(value, index, array) {
//       return value > 8;
// }


// const numbers = [4, 9,  16, 25, 29, 31];
// let first = numbers.findLast(myFunction);

// document.getElementById("demo").innerHTML = "First number over 18 is " + first;

// function myFunction(value, index, array) {
//       return value > 8;
// }



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)

// console.log(fruits.reverse())

// console.log(fruits.sort())
console.log(fruits.toSorted())