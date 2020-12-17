/*
//bai 1: chu vi dien tich hinh chu nhat
let a = +prompt("Nhap chieu dai");
let b = +prompt("Nhap chieu rong");
console.log("Dien tich hinh chu nhat S=", a * b);
console.log("Chu vi hinh chu nhat P=", (a + b) *2);
*/

/* 
//bai 2: chu vi dien tich hinh tron
let r = +prompt("Nhap ban kinh");
let pi = 3.14;
console.log("Dien tich hinh tron S=", (r ** 2) * pi);
console.log("Chu vi hinh tron C=", 2 * r * pi);
*/

/*
//bai 3: nghiem phuong trinh ax+b=0
let a = +prompt("Nhap a");
let b = +prompt("Nhap b");
console.log("Nghiem cua phuong trinh ax\+b là, x=", -b / a);
*/

/*
//bai 4: nhap cm ra mm, m, km
let a = +prompt("Nhap so do cm");
console.log("mm =", a * 10);
console.log("m =", a / 100);
console.log("km =", a / 100000);
*/

/*
//bai 5: nhap do C ra do F do K
let a = +prompt("Nhap do C");
console.log("Nhiet do F =", (a * 1.8) + 32);
console.log("Nhiet do K =", a + 273.15);
*/

/*
//bai 6: hien gio phut 
let a = +prompt("Nhap so phut");
var m = a % 60;
var h = (a - m)/60; 
console.log("Bay h la :",h + "h" + m + "m");
*/

/*
//bai 7: so lon nhat 
let a = +prompt("Nhap so thu nhat: ");
let b = +prompt("Nhap so thu hai: ");
let c = +prompt("Nhap so thu ba: ");
if (a > b && a > c) {
  console.log("So lon nhat la:", a);
}
else if (b > a && b > c) {
  console.log("So lon nhat la:", b);
}
else if (c > a && c > b) {
  console.log("So lon nhat la:", c);
}
else if (a == b && a > c) {
    console.log("So lon nhat la:",a);
}
else if (a == c && a > b) {
  console.log("So lon nhat la:", a);
}
else if (b == c && b > a) {
    console.log("So lon nhat la:", b);
}
else if (a == b && a == c) {
    console.log("So lon nhat la:", a);
}
*/

/*
//bai 8: so chia het cho 5 va 11 
let a = +prompt("Nhap so:");
if (a % 5 == 0 & a % 11 == 0) {
  console.log("So nay chia het cho ca 5 va 11");
} 
else if (a % 5 == 0 & a % 11 !== 0) {
  console.log("So nay chia het cho 5 khong chia het cho 11");
}
else if (a % 5 !== 0 & a % 11 == 0) {
  console.log("So nay chia het cho 11 khong chia het cho 5");
}
else {
  console.log("So nay khong chia het cho ca 5 va 11")
}
*/

/*
// bai 9: tinh nam nhuan
let a = +prompt("Nhap nam");
if (a % 4 == 0) {
  console.log("Day la nam nhuan");
}
else {
  console.log("Day khong phai la nam nhuan");
}
*/

/*
//bai 10: ktra ky tu thuoc alphabet
let a = prompt("Nhap ky tu");
let b = (a.charCodeAt(0)); //đặt giá trị ASCii của kí tự là b
if (b >= 65 && b <= 90) { 
    console.log("Ky tu vua nhap thuoc alphabet");
} else if (b >= 97 && b <= 122) { 
    console.log("Ky tu vua nhap thuoc alphabet");
} else {
    console.log("Ky tu vua nhap thuoc alphabet");
}
*/

/*
//bai 11: ktra nguyen am phu am tieng anh 
let a = prompt("Nhap ky tu");
let b = (a.charCodeAt(0));
if (b == 65) {
  console.log("Day la nguyen am");
}
else if (b == 69){
  console.log("Day la nguyen am");
}
else if (b == 73){
  console.log("Day la nguyen am");
}
else if (b == 79){
  console.log("Day la nguyen am");
}
else if (b == 85){
  console.log("Day la nguyen am");
}
else if (b == 97){
  console.log("Day la nguyen am");
}
else if (b == 101){
  console.log("Day la nguyen am");
}
else if (b == 105){
  console.log("Day la nguyen am");
}
else if (b == 111){
  console.log("Day la nguyen am");
}
else if (b == 117){
  console.log("Day la nguyen am");
}
else {
  console.log("Day la phu am");
}
*/

/*
//bai 12: ktra ky tu viet thuong hay viet hoa
let a = prompt("Nhap ky tu");
let b = (a.charCodeAt(0));
if (b >= 65 && b <= 90) {
  console.log("Day la chu in hoa");
}
else if (b >= 97 && b <= 122) {
  console.log("Day la chu in thuong");
}
else {
  console.log("Ong lua toi a. Day khonng phai chu");
}
*/

/*
//bai 13: tinh nghiem phuong trinh bac 2 ax^2+bx+c=0
let a = +prompt("Nhap a");
let b = +prompt("Nhap b");
let c = +prompt("Nhap c");
let d = b** - (4 * a * c);
let e = Math.sqrt(d);
if (a + b + c == 0) {
  console.log("Phuong trinh co nghiem: x1 = 1 ,x2 =", c / a);
}
else if (a - b + c ==0) {
  console.log("Phuong trinh co nghiem la: x1 = -1 , x2 =", -c / a);
}
else if (d == 0) {
  console.log("Phuong trinh co nghiem kep: x1 = x2 =", - (b / (2 * a)));
}
else if (d > 0) {
  console.log("Phuong trinh co nghiem: x1 =", (- b + e) / (2 * a));
  console.log("Phuong trinh co nghiem: x2 =", (- b - e) / (2 * a));
}
else {
  console.log("Phuong trinh vo nghiem");
}
*/

/*
//bai 14: quy doi diem he so 10 sang chu
let a = +prompt("Nhap diem");
if (a > 8.5 && a == 10) {
  console.log("Diem A");
}
else if (a > 7 && a <= 8.5) {
  console.log("Diem B");
}
else if (a > 5.5 && a <= 7) {
  console.log("Diem C");
}
else if (a > 4 && a <= 5.5) {
  console.log("Diem D");
}
else if (a >= 0 && a <= 4) {
  console.log("Diem F");
}
else {
  console.log("Diem nay moi ra nuoc ngoai choi");
}
*/