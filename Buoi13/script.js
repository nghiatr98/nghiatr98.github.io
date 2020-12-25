//viet ham tao ngau nhien 0 ->n VD: rand(10) => 8
function random(b) {
    return Math.floor(Math.random() * (b - 0 + 1));
}
random(999);



//chuyen doi co so VD(255,10,16) chuyen 255 tu 10 sang 16 => ff
function convert(a,b,c) {
    return parseInt(a,b).toString(c);
}





//tao so ngau nhien trong khoang a->b
function random(a,b) {
    return Math.floor(Math.random() * (b - a + 1));
}
random(10,99);



//tao ma mau HEX ngau nhien VD: hex() = fea34f
function hex() {
    //return Math.floor(Math.random() * 255).toString(16) + Math.floor(Math.random() * 255).toString(16) + Math.floor(Math.random() * 255).toString(16);
    return Math.floor(Math.random() * 16777215).toString(16);
}





//cat tu vi tri dau tien den vi tri chi dinh. VD: "abcd",2 => "abc"
function cut(string,num) {
    return string.slice(0,num);
}
cut("ahihi",3);






//chuyen doi ten thanh ten viet tat. VD: "Ba Nguyen" => "Ba N."
function trans(string) {
    let space = string.indexOf(" ");
    return string.slice(0,space +2) + ".";
}
trans("Ba Nguyen");






//an dia chi email.VD: "banguyen@techmaster.vn" => "ba...@techmaster.vn"
function hidden(string) {
    let icon = string.indexOf("@");
    return string.slice(0,2) + "..." + string.slice(icon);
}
hidden("banguyen@techmaster.vn");



//doi tu "ad" => "be"
let replace = (string) => {
    let result = "";

    for(let i = 0; i < string.length;i++) {
        result += String.fromCodePoint(string.charCodeAt(i) + 1);
    }
    return result;
}

//ktra in hoa in thuong
let changeString = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        }
        else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}


/*
//array
arr = [ "fdsfdsfsd" , "grsgDSFG" , 412414 , "hrth5345" , 543543543 ]
(5) ["fdsfdsfsd", "grsgDSFG", 412414, "hrth5345", 543543543]
arr[1]
"grsgDSFG"
arr[3] = 543534534
543534534
arr[3]
543534534
arr [5] = "gsdfgsdf"
"gsdfgsdf"
arr[5]
"gsdfgsdf"
arr[arr.length] = 54354353
54354353
arr
(7) ["fdsfdsfsd", "grsgDSFG", 412414, 543534534, 543543543, "gsdfgsdf", 54354353]
*/

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

/*
//sort
arr = [1,6,3,8,4]
(5) [1, 6, 3, 8, 4]
arr.sort
ƒ sort() { [native code] }
arr.sort()
(5) [1, 3, 4, 6, 8]
arr= [1,5,7,12,16]
(5) [1, 5, 7, 12, 16]
arr.sort((a,b) => a-b)
(5) [1, 5, 7, 12, 16]
arr.sort((a,b) => b-a)
(5) [16, 12, 7, 5, 1]
*/



//for each
let arr = [1,5,7];
arr._forEach((i) => console.log(i * i));