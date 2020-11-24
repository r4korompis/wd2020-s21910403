// Object
// const person = {
//     nama: "John",
//     age: 24,
//     job: "Programmer",
//     isMarried: true,
//     sayHello: function(){
//         console.log("Hello, world!");
//     }
// };

// person.age = 25;
// person.address = "manado";

// console.log(person.nama);
// console.log(person["age"]);

// delete person.address;

// person.sayHello();

// Javascript DOM
let title = document.getElementsByTagName("h1") [0].innerText;

// title = document.getElementById("header2").innerText;

console.log(title);

let umur = document.getElementById("umur").value;
console.log(umur);

function tes(){
    let nilai = document.getElementById("umur").value;
    alert(nilai);
}