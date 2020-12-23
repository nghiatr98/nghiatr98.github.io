/* ktra ket có tồn tại trong object bằng in

let user = {};

"name" in user;

user.name ="Ba";

"name" in user;

let key = "age";

key in user;

user[key] = 28;

key in user;

*/


/* lặp bằng for
let user = {
    name : "Ba",
    age: 28,
    job : "Developer",
};

for(let k in user) {
console.log(k + ": " + user[k]);
};
*/


/*
let user = {};
let copy = user;
user == copy;//true
let other = {};
user = other;//false
*/


/*
let obj = {
    name : "Ba",
}
let copy = obj;
copy.name = "Changed";
obj.name;

function demo(obj) {
    obj.name = "Changed";
}
let user = {name : "Ba"};
demo(user);
user.name;
*/



/*
let obj = {
    a: 2,
    b: 8,
    c: "n",
}

function double(object) {
    for(let property in object) { //lấy kiểU phần tử trong object
        if(typeof (object[property]) == "number") {
        object[property] **= 2;
    }
}
}

double(obj);
*/



/*
let obj = {
    a: 5,
    b: "a",
    d: 10,
}
let abc = {}
function copy(target,source) {
    for(let property in source) {
        target[property] = source[property];
    }
}

copy(abc, obj);
*/



/*
let obj = {
    a: 8,
    b: 10,
    c: "hiiiiiiii",
}

let jbo = {}

function copy(target, source) {
    for(let property in source) {
        target[property] = source[property]
        if(typeof (target[property]) == "number") {
            target[property] **= 2;
        }
    }
    console.log(target);
    console.log(source);
}
copy(jbo, obj);
*/



/*
let user = {
    name: "Nghia",
    hi() {
        console.log("Hello");
    },
    bye() {
        console.log("Bai");
    }
}
*/


/*
let user = {
    name: "Nghia",
    age: 22,
    hi() {
        console.log("Hello, my name is " + this.name);
    },
    getKeys() {
        for(let k in this) {
            console.log(k);
        }
    },
    getValues() {
        for(let k in this) {
            console.log(this[k]);
        }
    }
}
*/




/*
user.demo = () => console.log(this.name);
*/



/*
let user = {
    name: "Nghia",
    demo: () => console.log(this.name),
    test() {
        console.log(this.name);
}
}
*/


/*
let user = {
    name: "Nghia",
    demo() {
        return () => console.log(this.name);
    },
    test() {
        console.log(this.name);
}
}
//user.demo()()
*/





function Person(name,age) {
    this.name = name,
    this.age = age,
    this.hi = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let nghia = new Person("Nghia",22);