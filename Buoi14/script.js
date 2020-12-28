//cho mang so, viet ham tinh trung binh cong
let arr = [10,30,58,62];
tbc = function() {
    let sum = 0;
    for(let i = 0;i < arr.length;i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
tbc();


//cho mang so, viet ham tim index cua 1 so trong mang
let arr = [0,3,5,6,7];
find = function(arr,value) {
    for(let i = 0;i < arr.length;i++) {
        if(value == arr[i]) {
            return i;
        }
    }
    return -1;
}
find(arr,3);

//viet ham sao chep mang
let arr = [1,3,5,7,9];
copy = function() {
    let newcopy = [];
    for(let i = 0;i < arr.length;i++){
        newcopy.push(arr[i]);
    }
    return newcopy;
}
copy()

//tim gia tri lon nhat
let arr = [1,20,18,35,4,6];
function findMax(arr) {
    let max = arr[0];
    for(let i = 1;i < arr.length;i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
findMax(arr);

//tim so lon thu 2
let arr = [1,50,156,314,5]
function secondMax(arr) {
    let snd = arr[arr.length - 1];
    for(let i = arr.length - 1;i >= 0;i--) {
        if(arr[i] < snd) {
            snd = arr[i];
            break;
        }
    }
    return snd;
}
secondMax(arr);

//loai gia tri false khoi mang
let arr = [null,0,1,NaN,""];
function findTrue(arr) {
let newarr = [];
for(let i = 0;i < arr.length;i++){
    if(arr[i] == true){ /*arr[i] mặc định boolean*/
        newarr.push(arr[i]);
    }
}
return newarr;
}
findTrue(arr);


//chuyen doi thanh capitalize
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

//cat chuoi theo chi dinh
let cut = (string, len) => {
    let newArr = [];
    for (let i = 0, j = 0; i <= string.length; i += len, j++) {
        newArr[j] = string.slice(i, i + len)
    }
    return newArr
}
cut("anbxcnmzbxcnmzxbcnmzxcnmzxmcb", 4);


/*date
let date = new Date();
undefined
date
Mon Dec 28 2020 17:04:01 GMT+0700 (Giờ Đông Dương)
date = new Date(1000)
Thu Jan 01 1970 07:00:01 GMT+0700 (Giờ Đông Dương)
date = new Date("2020-10-15 00:00:00")
Thu Oct 15 2020 00:00:00 GMT+0700 (Giờ Đông Dương)
new Date(2020,0,31,17,04,02)
Fri Jan 31 2020 17:04:02 GMT+0700 (Giờ Đông Dương)
new Date(2020,10,31,17,04,02)
Tue Dec 01 2020 17:04:02 GMT+0700 (Giờ Đông Dương)
date.toLocaleDateString("vi-VN")
"15/10/2020"
date.toLocaleString("vi-VN")
"00:00:00, 15/10/2020"
Date.now()
1609150067417
Date.now() - new Date("2020-10-01")
7639753023
typeof Date.now()
"number"
date = new Date();
Mon Dec 28 2020 17:09:41 GMT+0700 (Giờ Đông Dương)
date.setFullYear(2021)
1640686181756
date
Tue Dec 28 2021 17:09:41 GMT+0700 (Giờ Đông Dương)
date = new Date("2020-01-31")
Fri Jan 31 2020 07:00:00 GMT+0700 (Giờ Đông Dương)
date.setMonth(date.getMonth()+1)
1583107200000
date
Mon Mar 02 2020 07:00:00 GMT+0700 (Giờ Đông Dương)
date.toLocaleDateString
ƒ toLocaleDateString() { [native code] }
date.toLocaleDateString()
"2/3/2020"
*/

//in ra viet tat ung voi thu
let date = new Date();

switch(date.getDay()) {
    case 0:
        console.log("CN");
        break;
    case 1:
        console.log("T2");
        break;
    case 2:
        console.log("T3");
        break;
    case 3:
        console.log("T4");
        break;
    case 4:
        console.log("T5");
        break;
    case 5:
        console.log("T6");
        break;
    case 6:
        console.log("T7");
        break;
    default:
        console.log("LOL");
}


//so ngay trong thang
function numOfDaysInMon(y,m) {
    return new Date(y,m,0).getDate();
}
numOfDaysInMon(2020, 08);
//
function dayLeft() {
let now = new Date();
let newYear = new Date(now.getFullYear() + 1, 0, 1);
console.log(now);
console.log(newYear);
let countdown = newYear.getTime()- now.getTime();
countdown = Math.floor(countdown / (1000*60*60*24));
console.log(countdown);
}
dayLeft();
