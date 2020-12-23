/*
let a = prompt("Nhap so");

let sum = 0;

while (!isNaN(a) && a != null) {
    sum += +a;
    a = prompt("Nhap so");
}
console.log(sum);
*/

/*
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum +=i;
}
console.log(sum);
*/

/*
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(` i = ${i}, j = ${j}`);
}
*/

/*
//tinh tong 0 den 1000
let sum = 0;

for (let i = 1; i <= 1000; i++) {
    sum += i;
}
console.log(sum);
*/

/*
//tinh tong cac so le tu 0 den 1000
let sum = 0;
for (let i = 1; i <= 1000; i += 2) {
    sum +=i;
}
console.log(sum);
*/

/*
//tinh tong so chia het cho 3
let sum = 0;
for (let i = 3; i <= 1000; i+=3) {
    sum +=i;
}
console.log(sum);
*/

/*
//tinh tong chia cho 3 5 7
let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 ==0)
    sum +=i;
}
console.log(sum);
*/


//tinh tong binh phuong chia cho 3 hoac 5 hoac 7

/*so lon nhat
function maxOfThree() {
    let a = +prompt("Nhap so");
    let b = +prompt("Nhap so");
    let c = +prompt("Nhap so");
    let max = a;
    if (max < b) {
        max = b ;
    }
    
    if (max < c) {
        max = c;
    }
    console.log(max);
}
//maxOfThree()
*/

/*nhap nhieu so in ra so lon nhat
function Max() {
    let a = prompt("Nhap so");
    let max = a;
    while (!isNaN(a) && a != null) {
        if (max < a) {
            max = +a;
        }
        a = prompt("Nhap so");
    }
    console.log(max);
}
*/

/*
function isPrime() {
    let a = prompt("Nhap so");
    let test = 0;
    for (let i = 2; i < a; i++) {
        if (a%i ===0) {
            test =1;
            break;
        }
    }
    if (test===0) {
        console.log("La so nguyen to");
    }
    else {
        console.log("Khong phai so nguyen to ");
    }
}
*/

/* in ra so nguyen to tu 0->n, n=100
function prime(n) {
    let check = true;
    for (let i =2; i < n; i++){
        if (n % i ==0) {
            check = false;
        }
    }
    check
     ?console.log(n + " la so nguyen to");
     :console.log(n + " khong phai la so nguyen to");
}
function printPrime(n = 100) {
    for (let i = 0; i <= n; i++) {
        prime(i);
    }
}
*/


