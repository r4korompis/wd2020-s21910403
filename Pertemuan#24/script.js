//Array in JavaScript
// let nilai = [1,2,3,4,5, "hello", false, true];
// console.log(nilai);

// //toString
// console.log(nilai.toString());

// //join
// console.log(nilai.join(" - "));

// //pop
// nilai.pop();
// console.log(nilai);

// //push
// nilai.push("selamat malam");
// console.log(nilai);

// //shift
// nilai.shift();
// console.log(nilai);

// //unshift
// nilai.unshift("selamat pagi");
// console.log(nilai);

// //splice
// // let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
// // buah.splice(2, 0, "Lemon", "Kiwi");
// // console.log(buah);

// //concat
// // let buah = ["pisang", "apel", "jeruk"];
// // let sayur = ["tomat", "bayam", "wortel"];
// // let biji = ["kedelai", "kacang tanah", "kacang polong"];
// // let makanan = buah.concat(sayur, biji);
// // console.log(makanan);

// //slice
// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);
// console.log(cemilanGurih);
// console.log(cemilanManis);

//sort
//contoh dengan tipe data string
// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
// buah.sort();
// console.log(buah);

// //contoh dengan tipe data number
// let bilangan = [30, 1, 2, 3.5, 10, 100];
// bilangan.sort();
// console.log(bilangan);

// let bilangan = [30, 1, 2, 3.5, 10, 100];
// let urutDariTerkecil = function(a, b) {
//   return a - b;
// };
// let urutDariTerbesar = function(a, b) {
//   return b - a;
// };
// console.log(bilangan.sort(urutDariTerkecil));
// console.log(bilangan.sort(urutDariTerbesar));

//reverse
// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
// buah.reverse();
// console.log(buah);

//gabungan antara sort & reverse
// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
// buah.sort().reverse();
// console.log(buah);