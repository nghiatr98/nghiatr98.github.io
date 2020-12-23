/*b1: tra so ngau nhien trong khoang a,b
function random(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
random(1,60)
*/

/*
let random = (a,b) => {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
*/



/*b2: ktra tam giac
function isTriangle(a,b,c) {
    if(a + b > c && a + c > b && b + c > a) {
        return "Day la tam giac";
    }
    else {
        return "Day khong phai la tam giac";
    }
}
//isTriangle(5,6,9)
//isTriangle(5,2,7)
*/

/* let isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a ? "Day la tam giac" : "Day khong phai la tam giac"; */




/*b3: doan so
function guessNumber() {
    let random = Math.floor(Math.random() * 10)+1;
    console.log("Con so gi ra con so gi ra: "+random);
    let count = 0;
    let n = +prompt("Moi ban doan mot so tu 0 den 10");
    while (count <= 2 && n != false && !isNaN(n)) {
        if (n == random) {
            alert("O may zing, gut chop ban");
            break;
        } else {
            count++;
            n = +prompt("Khong khop, moi ban nhap lai");
        } 
    }
}
guessNumber()
*/

/* 
let guessNumber = () => {
    let random = Math.floor(Math.random() *10)+1;
    console.log("Con so gi ra con so gi ra: "+random);
    let count = 0;
    let n = +prompt("Moi ban doan mot so tu 0 den 10");
    while (count <= 2 && n != false && !isNaN(n)) {
        if (n == random) {
            alert("O may zing, gut chop ban");
            break;
        } else {
            count++;
            n = +prompt("Khong khop, moi ban nhap lai");
        } 
    }
}
*/



/*bai4: tra ve so gan 100 nhat
function nearest(a,b) {
    let countA = 0;
    let countB = 0;
    let printA = a;
    let printB = b;
    if (a > 100) {
        while (a != 100) {
            countA++;
            a--;
        }
    } else {
        while (a != 100) {
            countA++;
            a++;
        }
    }
    if (b > 100) {
        while (b != 100) {
            countB++;
            b--;
        }
    } else {
        while (b != 100) {
            countB++;
            b++;
        }
    }
    if(countA > countB) {
        return "So gan voi 100 la: " + printB;
    }
    else {
        return "So gan voi 100 la: " + printA;
    }
}
//nearest(98,228)
//nearest(8,103)
*/

/* let nearest = (a,b) => {
    let countA = 0;
    let countB = 0;
    let printA = a;
    let printB = b;
    if (a > 100) {
        while (a != 100) {
            countA++;
            a--;
        }
    } else {
        while (a != 100) {
            countA++;
            a++;
        }
    }
    if (b > 100) {
        while (b != 100) {
            countB++;
            b--;
        }
    } else {
        while (b != 100) {
            countB++;
            b++;
        }
    }
    countA > countB ? console.log("So gan voi 100 la: "+printB) : console.log("So gan voi 100 la: "+printA)
}
*/



/*bai5: ktra a,b,c phai tang dan hay k
function sequence(a,b,c) {
    if(a >= b && b >= c && a != c) {
        return "Day la so giam dan";
    }
    else if(a <= b && b <= c && a != c) {
        return "Day la so tang dan";
    }
    else {
        return "Day khong phai so tang dan hay giam dan";
    }
}
//sequence(1,2,3)
//sequence(3,2,1)
//sequence(1,1,1)
*/

/* let sequence = (a,b,c) => a >= b && b >= c && a != c ? "Day la so giam dan" : a <= b && b <= c && a != c ? "Day la so tang dan" : "Day khong phai la so tang dan hay giam dan"; */




/*bai6: dem so chu so sau phay
function countDecimal(number) {
    let decimal = (number + "").split(".")[1];
    return decimal.length;
} 
*/

/* let countDecimal = (number) => ((number + "").split(".")[1]).length; */



/*bai7: ktra so phai tang dan hay k
function isAscending(number) {
    let numberStr = String(number);
    for (let i = 0; i < numberStr.length-1; i++){
        if (numberStr[i] > numberStr[i + 1]) {
            return false;
        }
    } return true;
}
//isAscending(123)
//isAscending(321)
*/

/*
let isAscending = (number) => {
    let numberStr = String(number);
    for (let i = 0; i < numberStr.length-1; i++){
        if (numberStr[i] > numberStr[i + 1]) {
            return false;
        }
    } return true;
}
*/



/*bai8: tra ve so chu so chan
function countEven(number) {
    let str = number + "",
        count = 0;
    for (let i = 0; i < str.length; i++) {
        if (+str[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}
//countEven(123456)
*/

/*
let countEven = (number) => {
    let str = number + "",
        count = 0;
    for (let i = 0; i < str.length; i++) {
        if (+str[i] % 2 == 0) {
            count++;
        }
    }
    return count;
} 
*/




/*bai9: tra ve n sao cho 1+2+..+n <= number
function find(number) {
    let sum = 0,
        n = 0;
    for (let i = 0; i <= number; i++) {
        if (sum <= number) {
            sum += i;
            n = i - 1;
        }
    }
    return n;
}
//find(10)
*/

/*
let find = (number) => {
    let sum = 0,
        n = 0;
    for (let i = 0; i <= number; i++) {
        if (sum <= number) {
            sum += i;
            n = i - 1;
        }
    }
    return n;
}
*/



/*bai10: quy doi ve cung don vi va tong gia tri
function sum(value1, unit1, value2, unit2) {
    let sum = 0;
    if (unit1 == "km") {
        unit2 == "km" ? sum = value1 + value2 + "km"
        : unit2 == "m" ? sum = value1 + (value2 *0.001) + "km"
        : unit2 == "dm" ? sum = value1 + (value2 *0.0001) + "km"
        : unit2 == "cm" ? sum = value1 + (value2 *0.00001) + "km"
        : sum = value1 + (value2 *0.000001) + "km" 
    }
    else if (unit1 == "m") {
        unit2 == "km" ? sum = value1 + (value2 * 1000) + "m"
        : unit2 == "m" ? sum = value1 + value2 + "m"
        : unit2 == "dm" ? sum = value1 + (value2 *0.1) + "m"
        : unit2 == "cm" ? sum = value1 + (value2 *0.01) + "m"
        : sum = value1 + (value2 *0.001) + "m" 
    }
    else if (unit1 == "dm") {
        unit2 == "km" ? sum = value1 + (value2 * 10000) + "dm"
        : unit2 == "m" ? sum = value1 + (value2 * 10) + "dm"
        : unit2 == "dm" ? sum = value1 + value2 + "dm"
        : unit2 == "cm" ? sum = value1 + (value2 *0.1) + "dm"
        : sum = value1 + (value2 *0.01) + "dm" 
    }
    else if (unit1 == "cm") {
        unit2 == "km" ? sum = value1 + (value2 * 100000) + "cm"
        : unit2 == "m" ? sum = value1 + (value2 *100) + "cm"
        : unit2 == "dm" ? sum = value1 + (value2 *10) + "cm"
        : unit2 == "cm" ? sum = value1 + value2 + "cm"
        : sum = value1 + (value2 *0.1) + "cm" 
    } 
    else {
        unit2 == "km" ? sum = value1 + (value2 * 1000000) + "mm"
        : unit2 == "m" ? sum = value1 + (value2 *1000) + "mm"
        : unit2 == "dm" ? sum = value1 + (value2 *100) + "mm"
        : unit2 == "cm" ? sum = value1 + (value2 *10) + "mm"
        : sum = value1 + value2 + "mm" 
    }
    return sum;
}
//sum(22,"km",800,"m")
*/

/*
let sum = (value1, unit1, value2, unit2) => {
    let sum = 0;
    if (unit1 == "km") {
        unit2 == "km" ? sum = value1 + value2 + "km"
        : unit2 == "m" ? sum = value1 + (value2 *0.001) + "km"
        : unit2 == "dm" ? sum = value1 + (value2 *0.0001) + "km"
        : unit2 == "cm" ? sum = value1 + (value2 *0.00001) + "km"
        : sum = value1 + (value2 *0.000001) + "km" 
    }
    else if (unit1 == "m") {
        unit2 == "km" ? sum = value1 + (value2 * 1000) + "m"
        : unit2 == "m" ? sum = value1 + value2 + "m"
        : unit2 == "dm" ? sum = value1 + (value2 *0.1) + "m"
        : unit2 == "cm" ? sum = value1 + (value2 *0.01) + "m"
        : sum = value1 + (value2 *0.001) + "m" 
    }
    else if (unit1 == "dm") {
        unit2 == "km" ? sum = value1 + (value2 * 10000) + "dm"
        : unit2 == "m" ? sum = value1 + (value2 * 10) + "dm"
        : unit2 == "dm" ? sum = value1 + value2 + "dm"
        : unit2 == "cm" ? sum = value1 + (value2 *0.1) + "dm"
        : sum = value1 + (value2 *0.01) + "dm" 
    }
    else if (unit1 == "cm") {
        unit2 == "km" ? sum = value1 + (value2 * 100000) + "cm"
        : unit2 == "m" ? sum = value1 + (value2 *100) + "cm"
        : unit2 == "dm" ? sum = value1 + (value2 *10) + "cm"
        : unit2 == "cm" ? sum = value1 + value2 + "cm"
        : sum = value1 + (value2 *0.1) + "cm" 
    } 
    else {
        unit2 == "km" ? sum = value1 + (value2 * 1000000) + "mm"
        : unit2 == "m" ? sum = value1 + (value2 *1000) + "mm"
        : unit2 == "dm" ? sum = value1 + (value2 *100) + "mm"
        : unit2 == "cm" ? sum = value1 + (value2 *10) + "mm"
        : sum = value1 + value2 + "mm" 
    }
    return sum;
}
*/
