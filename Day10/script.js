/*
function bai1() {
for(let i=1;i<=10;i++)   
    { console.log("Bang cuu chuong " + i); 
    for(let n=1;n<=10;n++){
        console.log(`${i} x ${n} = ${i*n}`);
    }
}
}
*/

/*
function bai2() {
    for(let a = 0; a <= 100; a++) {
        if(a % 3 == 0 && a % 5 == 0) {
            console.log(a + "FizzBuzz");
        }
        else if(a % 3 == 0) {
            console.log(a + "Fizz");
        }
        else if(a % 5 == 0) {
            console.log(a + "Buzz");
        }
        else if(a % 3 != 0 && a % 5 != 0) {
            console.log(a + "BuzzFiz");
        }
        else {
            console.log(a);
        }
    }
}
*/

/*
function bai3() {
    let sum = 0;
    for(let a = 0; a <= 1000;a++) {
        if(a % 15 == 0) {
            console.log("Bội chung của 3 và 5 :", a);
        }
        sum += a;
    }
    console.log("Tổng bội chung của 3 và 5 =", sum);
}
*/

/*
function bai4() {
    let a = prompt("Nhap so");
    let test = 0;
    if(!isNaN(a) && a != null && a >=2) {
        for (let i = 2; i < a; i++) {
            if (a%i === 0) {
                test = 1;
                break;
            }
        }
        if (test === 0) {
            console.log(a + " La so nguyen to");
        }
        else {
            console.log(a + " Khong phai so nguyen to");
        }
    }
    else {
        console.log("Nhap sai r. Lai de ban eiii");
    }
}
*/

/*
//cach a ba chi :))))) viet ra cho zui thui chu e van dang ngam nghi cach nay =))))))
function bai5(n) {
  let check = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      check = false;
    }
  }

  check
    ? console.log(n + " la so nguyen to")
    : console.log(n + " khong phai la so nguyen to");
}

function printbai5(n = 1000) {
  for (let i = 2; i <= n; i++) {
    bai5(i);
  }
}
*/

/*
function bai5() {
let a = 0;
let b = 1000;
    for (let i = a + 2; i <= b; i++) {
        let test = 1;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                test = 0;
                break;
            }
        }
        if (test == 1) {
            console.log(i + " la so nguyen to");
        }
        else {
            console.log(i + " khong phai la so nguyen to");
        }
    }
}
*/

/*
function bai6() {
let a = prompt("Nhap a");
let b = prompt("Nhap b");
    if(!isNaN(a) && a != null && a >= 2 && a < b) {
        for (let i = a ; i <= b; i++) {
            let test = 1;
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    test = 0;
                    break;
                }
            }
            if (test == 1) {
                console.log(i + " la so nguyen to");
            }
        }
    }
    else {
        console.log("ong lai dinh lua toi dung khong")
    }
}
*/

/*
function bai7() {
for(let i=10;i>0;i--)   
    { console.log("Bang cuu chuong" + i);
    for(let n=1;n<=10;n++){
        console.log(`${i} x ${n} = ${i*n}`);
    }
    }
}
*/

/*
function bai8(number) {
        let socuoi = number % 10;

        let sodau = number;
        while (sodau >= 10){
            sodau = (sodau - (sodau % 10)) / 10;
            
        }
        console.log("chữ số đầu tiên của " + number + " là : " + sodau );
        console.log("chữ số cuối củng của " + number + " là : " + socuoi );
    }
*/

/*
function fibonacci()  {
    let a = +prompt("nhap so bat dau cua day");
	let b = +prompt("nhap gioi han lan tang cua day");
	let c = 1;
    let d = 0;
    if (a == 0 || a == 1) {
	    console.log(a);
        console.log(c);
	    for(let i = 2;i < b;i++){
		    console.log(d = c + a);
		    a=c;
		    c=d;
        }
    }
else {
    console.log("nhap sai roi ma', nhap lai 0 hoac 1 de");
    }
}
*/

/*
function ucln() {
  let a = +prompt("Nhập số thứ 1");
  let b = +prompt("Nhập số thứ 2");
  let c;
  let d;
  for (let i = 1; i <= a && i <= b; i++) {
    // lặp từ 1 đến số thứ 1 và số thứ 2
    if (a % i == 0 && b % i == 0) { //ucln
      c = i;
    }
    d = (a * b) / c; // bcnn
  }
  console.log(`"Uoc chung lon nhat: " ${c}`);
  console.log(`"Boi chung nho nhat: " ${d}`);
}
ucln()
*/

/*
//copy dzo de hoc xong return xem lai :v 
function uocChungLonNhat(a, b) {
    if (a == 0) {
    return b;
    }
    while (a != b) {
        if (a > b) {
            a -= b;
        }
        else {
            b -= a;
        }
    }
    return a;
}
function printUCLNBCNN() {
    let a = +prompt("Nhap so a"),
        b = +prompt("Nhap so b");
    if (checkNumber(a) && checkNumber(b)) { 
        console.log(`Uoc chung lon nhat cua ${a} va ${b} la: ${uocChungLonNhat(a,b)}`);
        console.log(`Boi chung nho nhat cua ${a} va ${b} la: ${(a*b)/uocChungLonNhat(a,b)}`);
    }
}
*/

/*
//sao1
function patternOne(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = 1; j <= i; j++) {
            str += "* ";
        }

        console.log(str);
    }
}
*/

/*
//sao2
function patternTwo(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n; j++) {
            if (j < (n + 1 - i)) {
                let str += "  ";
            } else {
                let str += "* ";
            }
        }

        console.log(str);
    }
}
*/

/*
//sao5
function patternFive(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let j = n; j >= i; j--) {
            str += "* ";
        }

        console.log(str);
    }
}
*/
