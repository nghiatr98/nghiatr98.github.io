/*
function isOdd(number) {
    let result = number & 2 == 1;
    return result;
}
*/

// hoisting là tính năng của javascript nhấc hàm lên đầu,k áp dụung với let ,const .

//callback có têể gán cho 1 biến hoặc sao chép, hàm đc truyền vào hàm khác dưới dạng tham số là callback. hàm lồng nhau là callback hell.

/*
ask(ok,notOk);
function ok() {
    console.log("I love you too!");
}

function notOk() {
    console.log("Noooo!");
}

function ask(yes, no) {
    if (confirm("Do you love me!")) {
        yes();
    } else {
        no();
    }
}
}
*/

/*
//fibo
let fibo = (n) => n == 0 || n == 1 ?n : fibo(n - 1) + fibo(n - 2);
*/

/*
//giaithua
let giaithua = (n) => n == 0 || n == 1 ? 1 : giaithua(n-1)*n;
*/

/*
//luythua
let luythua = function(a,b) => {
    if(a ==b ) {
        return true;
    }
    else {
        while(a <= b) {
            a /= b;
        }
        return a == b ? true : false ;
    }
}
*/

/*
let luythua = (a,b) => a == b ? true : 
*/

/*
let isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    else {
        for(i = 2; i <= n / 2; i++) {
            if(i % n == 0) {
                return false;
            }
        }
        return true;
    }
}
*/


/*
let mobile = new Object();
    mobile.brand = "Samsung";
    mobile.version = "J7+";

let nghia = {
    name: "Nghia",
    age: 22,
    job: "Serviceman",
    mobile: mobile,
};


*/



/*
let key = prompt("nhap key");
let value = prompt("nhap value");

console.log(key);
console.log(value);

let object = {};

object[key] = value;
console.log(object);
*/


let key = prompt("nhap key");
let value = prompt("nhap value");

let obj = {};
console.log(obj);

while(key != "" && key != null) {
    obj[key] = value;
    console.log(obj);
    key = prompt("nhap key moi");
    value = prompt("nhap value moi");
}

console.log(obj);