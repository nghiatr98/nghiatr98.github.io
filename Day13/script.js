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
