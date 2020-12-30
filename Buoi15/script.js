/*
let timer = setTimeout(function f() {
    console.log("hello babe");
    timer = setTimeout(f,2000);
},2000)
clearTimeout(timer)

let timer = setTimeout(function f(x) {
    console.log("hello babe" + x);
    timer = setTimeout(f,2000,"hiiiii");
},2000)
clearTimeout(timer)

let timer = setInterval(() => {
console.log("I love you!");
},1000)
clearInterval(timer)

//setTimeout sau 1 time moi chay, setInterval chay luon r lap lai
*/


/*
document.body.children

for(let node of document.body.children) {
console.log(node);
}
*/

/*
document.body.children
HTMLCollection(3) [p, script, script]
for(let node of document.body.children) {
console.log(node);
}
*/

/*
let table = document.body.firstElementChild;
for(let i = 0;i < table.rows.length;i++) {
    table.rows[i].cells[i].style.background = "red";
    table.rows[i].cells[rows.length - 1 - i].style.background = "green"
}


document.getElementById("#body")
document.querySelector("#body")
document.querySelectorAll("#body")

*/

/*
let sym = document.querySelectorAll(".sym");
for(let i = 0;i < sym.length;i++) {
    sym[i].style.background = "red"
}

document.getElementsByClassName(".sym")
*/




let timer = setInterval(() => {
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleString("vi-VN");
})
//clearInterval(timer)



let user = {
    name: "Nghia",
    age: 22
};

let el = document.getElementById("user").children;
el = Array.from(el);
el.forEach((e) => {
    //console.log(e.dataset.prop);
    //console.log(user[e.dataset.prop]);
    e.innerText = user[e.dataset.prop];
});