//viet ham chuyen doi 1 chuoi thanh capitalize
function capitalize(string) {
    let result = string[0].toUpperCase();
    for(let i = 1; i < string.length; i++) {
        if(string[i - 1] == " ") {
            result += string[i].toUpperCase();
        }
        else {
            result += string[i];
        }
    }
    return result;
}
capitalize("A hi hi");


//viet ham chuyen doi 1 chuoi thanh paramaterize
function paramateriza(string) {
    let result = string[0].toLowerCase();
    for(let i = 1; i < string.length; i++) {
        if(string[i] == " ") {
            result += "-";
        }
        else if(string[i - 1] == " " || string[i - 1] == "-") {
            result += string[i].toLowerCase();
        }
        else {
            result += string[i];
        }
    }
    return result;
}
paramateriza("Say My Name");


//viet ham loai bo khoang trang
function delspace(string) {
    console.log(string.trim());
}
delspace("    Hello Word !   ");


//viet ham dao nguoc chu thuong va in hoa
function change(string) {
    let str = "";
    for(let i = 0;i < string.length; i++) {
        if(string[i] == string[i].toUpperCase()) {
            str += string[i].toLowerCase();
        }
        else {
            str += string[i].toUpperCase();
        }
    }
    return str;
}
change("ABcdeF");

//viet ham lap chuoi
function rp(string) {
    console.log(string.repeat(3));
}
rp("Hihi");

//chèn chuỗi
function insert(str1,str2,index) {
    let result = "";
    for(let i = 0;i < str1.length;i++) {
        if(i == index) {
            result += str2;
        }
            result += str1[i];
    }
    return result;
}
insert("abcef","d",3);

//rút gon chuỗi
function short(str,a) {
    let result = "";
    for(let i = 0;i < a;i++) {
        result += str[i];
    }
    return result + "...";
}
short("abcdef",2);


//dem so lan xuat hien trong chuoi
function countStr(str1,str2) {
    let count = 0;
    for(let i = 0;i < str1.length;i++) {
        if(str1[i] == str2){
            count ++;
        }
    }
    return count;
}
countStr("abcafa","a");

//cat chuoi theo só tu chi dinh 
function Splits(str,num){
    let res = "";
        symbol = /,/gi;
    res += str.split(" ",num);
    newRes = res.replace(symbol," ");
    console.log(newRes);
}
Splits("My name is Hung",3);

//tao chuoi GUID ngau nhien 32 ky tu
function randomsym() {
    let GUID = "";
    for(let i = 0; i<= 32;i++){
        let n = Math.floor(Math.random() * (122));
        GUID += String.fromCodePoint(n);
    }
    return GUID;
}
randomsym();


//Viet ham thay the cac ky tu trong chuoi thanh ky tu lien ke trong Unicode
function replace(str) {
    let result = "";
    for(let i = 0;i < str.length;i++){
        result += String.fromCodePoint(str.charCodeAt(i) + 1);
    }
    return result;
}
replace("ae");



//arr._concat(arr2) gop phan tu mang arr2 vao arr1 
let arr2 = [423432,"5r5423r5"]
arr._concat = function (arr2) {
    let result = [];
    for (let i = 0;i < this.length;i++) {
        result[result.length] = this[i];
    }
    for (let i = 0;i < arr2.length; i++) {
        result[result.length] = arr2[i];
    }
    return result;
}
arr._concat(arr2);




//arr._push(value) them gia tri vao cuoi mang
let arr = [1,2];
arr._push = function (value) {
    this[this.length] = value;
    return this;
}
arr._push("gfdgd");




//arr._pop() xoa phan tu cuoi mang, dong thoi tra ve gia tri cua phan tu bi xoa
let arr = [1,2];
arr._pop = function() {
    let popedElem = this[this.length - 1];
    length -= 1;
    return popedElem;
}
arr._pop(1);





//arr._indexOf() tim va tra ve index cua phan tu, neu khong co tra ve -1
let arr = [1,2];
arr._indexOf = function(value) {
    let idx = -1 ;
    for(let i = 0; i < this.length;i++) {
        if(value == this[i])
        return i;
    }
    return idx;
}
arr._indexOf(0);



//arr._reverse() dao nguoc gia tri mang
let arr = [1,2,3,4];
arr._reverse = function () {
    for(let i = 0,j = this.length - 1;i < j; i++ , j--) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}
arr._reverse();


//forEach
let arr = [1,2,3,4];
arr._forEach = function () {
    for(let i = 0;i < arr.length;i++) {
        console.log(i);
    }
}
arr._forEach();


//filter
let arr = [
    {name: "Ba",age:26},
    {name: "Bon",age:5}
]
arr._filter = function () {
let result=[];
for(let i = 0;i < arr.length;i++) {
    if(arr[i].age<20){
        result.push(arr[i])
    }
}
return result;
}
arr._filter()



//map
let arr = [1,2,3,4,5,6]
arr._map = function() {
    let newmap = [];
    for(let i = 0;i < this.length;i++) {
        newmap.push(this[i])
    }
    return newmap;
}
arr._map()




//reduce
let arr = [
    {name: "Ba",age:26},
    {name: "Bon",age:5}
];
arr.reduce = function(callback,initial) {
    let accu = initial;
    for(let i = 0;i < this.length;i++) {
        accu = callback(accu,this[i]);
    }
    return accu;
}
arr.reduce((sum,i) => (sum += i.age),0)