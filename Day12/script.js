//Viet ham tao Weapon
function Weapon(wname,wdmg,wspeed,wtype) {
    this.wname = wname;
    this.wdmg = wdmg;
    this.wspeed = wspeed;
    this.wtype = wtype;
}


//Viet ham tao Player
function Player(name,level,weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function () {
        console.log(this.name + " Attack, Damage = " + this.weapon.wdmg * this.level);
    };
    this.changeWeapon = function (change) {
        this.weapon = change;
    }
}


//Tao 1 vai Player, Weapon 
let Shusui = new Weapon("Shusui",50,8,"sword"),
    Enma = new Weapon("Enma",150,14,"sword"),
    GeaBog = new Weapon("GeaBog",60,20,"spear");


let Zoro = new Player("Roronoa Zoro",30,Shusui),
    Oden = new Player("Kozuki Oden",70,Enma),
    Cú = new Player("Cú Chulain",20,GeaBog);


console.log(Oden);
console.log(Zoro.weapon);
console.log(Oden.attack());
console.log(Cú.weapon);
Cú.changeWeapon(Shusui);
console.log(Cú.weapon);


//Tạo object caculator. thấy a nhắc a hưng thế là e thử nhét vào xem thấy ra thật =))) chứ e vẫn chưa hiểu chắc chắn chỗ này
let calculator = {
    a: Number,
    b: Number,
    get(a, b) {
        this.a = a;
        this.b = b;
        return this;
    },
    add() {
        console.log("a + b = " + (this.a + this.b));
        return this;
    },
    sub() {
        console.log("a - b = " + (this.a - this.b));
        return this;
    },
    div()/*nhan*/ {
        console.log("a * b = " + (this.a / this.b));
        return this;
    },
    mul()/*chia*/ {
        console.log("a / b = " + (this.a * this.b));
        return this;
    },
    rem()/*chia lay du*/ {
        console.log("a % b = " + (this.a % this.b));
        return this;
    },
    exp()/*a mu b*/ {
        console.log("a ** b = " + (this.a ** this.b));
        return this;
    }
}

let cal = calculator;

cal.get(2, 8).add().sub();


//Viet ham counter
function Counter() {
    let count = 0;
    this.count = count,
    this.up = function () {
        this.count++;
        console.log("Count up = " + this.count);
        return this;
    },
    this.down = function () {
        this.count--;
        console.log("Count up = " + this.count);
        return this;
    },
    this.get = function () {
        console.log("Count = " + this.count);
        return this;
    }
}

let counter = new Counter();

counter.up().up().get().down().get().up();


//Viet ham tao girl
function Girl(name, age) {
    this.name = name;
    this.age = age;
    this.talk = function () {
        console.log("Hello, my name is " + this.name)
    }
}
let ozawa = new Girl("Ozawa", 17);
console.log(ozawa);
ozawa.talk();

//Viet ham tao boy
function Boy(name, age) {
    this.name = name;
    this.age = age;
    this.talk = function () {
        console.log("Hello, daughter in law, my name is " + this.name)
    }
}
let tokuda = new Boy("Tokuda", 60);
console.log(tokuda);
tokuda.talk();
