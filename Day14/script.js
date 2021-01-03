//trung binh cong 
let arr = [10,30,58,62];
tbc = function() {
    let sum = 0;
    for(let i = 0;i < arr.length;i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
tbc();


//tim index cua 1 so
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


//doi vi tri 2 phan tu
let arr = [1,32,51,15];
function swap(arr,idx1,idx2) {
    let result = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = result;
    return arr;
}
swap(arr,1,2)


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


//so lan xuat hien lon nhat cua phan tu 
let arr = [1, 2, 3, 2, 5, 6, 3, 5, 7, 3, 5, 3, 8];
let countExist = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n == arr[i]) count++;
  }
  return count;
};
let findMaxExist = (arr) => {
  let max = countExist(arr, arr[0]),
    item = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < countExist(arr, arr[i])) {
      max = countExist(arr, arr[i]);
      item = arr[i];
    }
  }
  return item;
};
findMaxExist(arr);


//cat chuoi theo chi dinh
let cut = (string, len) => {
    let newArr = [];
    for (let i = 0, j = 0; i <= string.length; i += len, j++) {
        newArr[j] = string.slice(i, i + len)
    }
    return newArr
}
cut("anbxcnmzbxcnmzxbcnmzxcnmzxmcb", 4);


//tach ham thanh 1 mang cac chuoi con
let str = "dog";
let cutStringToArray = (str) => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      res.push(str.slice(i, j+1));
    }
  }
  return res;
}
cutStringToArray(str);

//loai bo so trung lap
let arr = [1, 2, 2, 3, 3];
function remove(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
    }
  }
  return result;
}
remove(arr)

//fibonacci
function fibonacci(num) {
    let a = 1;
        b = 0;
        c = 0;
    for(let i = 1;i < num;i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
function printFibonacci(n) {
    let result = [];
    for(let i = 1;i < n;i++) {
        result.push(fibonacci(i));
    }
    return result;
}
printFibonacci(9)

//viet ham tra ve cac so trung nhau trong 2 mang
let arr1 = [1,3,5,7];
    arr2 = [2,3,5,6];
function find(arr1,arr2) {
    let result = [];
    for(let i = 0;i < arr1.length;i++) {
        if(arr2.indexOf(arr1[i]) != -1 && result.indexOf(arr1[i]) == -1) {
            result.push(arr1[i]);
        }
    }
    for(let i = 0;i < arr2.length;i++) {
        if(arr1.indexOf(arr2[i]) != -1 && result.indexOf(arr2[i]) == -1) {
            result.push(arr2[i]);
        }
    }
    return result;
}
find(arr1,arr2)

//viet ham tra ve so khong trung nhau trong 2 mang 
let arr1 = [1,3,5,7];
    arr2 = [2,3,5,6];
function find(arr1,arr2) {
    let result = [];
    for(let i = 0;i < arr1.length;i++) {
        if(arr2.indexOf(arr1[i]) == -1) {
            result.push(arr1[i]);
        }
    }
    for(let i = 0;i < arr2.length;i++) {
        if(arr1.indexOf(arr2[i]) == -1) {
            result.push(arr2[i]);
        }
    }
    return result;
}
find(arr1,arr2)

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

//sap xep mang
let arr = [1,50,6,123,64];
arr.sort()
arr.sort((a,b) => a-b)
arr.sort((a,b) => b-a)

//sap xep tang dan theo age
let arr = [
    {name: "Ba",age:26},
    {name: "Bon",age:5},
    {name: "Nam",age:62},
    {name: "Sau",age:10}
];
arr.sort((a, b) => a.age - b.age);

//sap xep theo name.length
let arr = [
    {name: "Hai",age:26},
    {name: "Ba",age:5},
    {name: "Bon",age:62},
    {name: "Muoi",age:10}
];
arr.sort((a, b) => a.name.length - b.name.length);

//sap xep theo name
let arr = [
    {name: "hai",age:26},
    {name: "Ba",age:5},
    {name: "nam",age:62},
    {name: "Muoi",age:10}
];
arr.sort((a,b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
  if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
  return 0;
});
//so sanh dang in hoa hoac in thuong cua ten

//cho mang va n, tim trong mang vi tri 2 phan tu tong bang n
let arr = [1,6,7,8,1,0,6,3,4,9,2,5,2];
let findSum = (arr, n) => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] + arr[j] == n) {
        result.push(`${i} ${j}`);
      }
    }
  }
  return result;
}
findSum(arr, 8);

//lay phan tu ngau nhien 
let arr = [1, 2, 5, 6, 5, 7,  5, 3, 8];
function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
random(arr);

//sap xep mang ngau nhien
let arr = [1, 2, 3, 4];
let shuffleArray = (arr) => {
  let currentIndex = arr.length,
    temp,
    randomIndex;
  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};
shuffleArray(arr);

//mang nhieu chieu ve 1 chieu
let arr = [
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 7],
];
let multiDimensions = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
multiDimensions(arr);

//bien doi thanh binh phuong cua chinh no
let squareArray = (arr) => arr.map((i) => i * i);
squareArray([1, 2, 3, 4]);

//bien thanh upcase
let uppercaseArray = (arr) => arr.map((i) => i.toUpperCase());
uppercaseArray(["abc", "def"]);

//loc phan tu number
let filterNumber = (arr) => arr.filter((i) => typeof i == "number");
filterNumber(["a", 1, 2, "b"]);

//loc ra object age>20
let arr = [
    {name: "Hai",age:26},
    {name: "Ba",age:5},
    {name: "Bon",age:62},
    {name: "Muoi",age:10}
];
let filterByAge = (arr) => arr.filter((i) => i.age > 20);
filterByAge(arr);

//chuyen doi thanh capitalize
let arr = [
    {name: "Hai",age:26},
    {name: "Ba",age:5},
    {name: "Bon",age:62},
    {name: "Muoi",age:10}
];
let capitalizeName = (arr) =>
  arr.map((i) => {
    let split = i.name.split(" ");
    let result = "";
    console.log(split);
    for (let j = 0; j < split.length; j++) {
      if (split[i] != " ")
        result += split[j][0].toUpperCase() + split[i].slice(1) + " ";
    }
    i.name = result;
    return i;
  });
capitalizeName(arr);

//doi name object thanh viet tat
let arr = [
    {name: "Hai Ba",age:26},
    {name: "Ba Bon",age:5},
    {name: "Bon Nam",age:62},
    {name: "Muoi Mot",age:10}
];
let shortName = (arr) =>
  arr.map((i) => {
    let idx = i.name.indexOf(" "),
      newName = i.name[0].toUpperCase();
    if (idx != -1) {
      newName += i.name.slice(1, idx + 1) + i.name[idx + 1].toUpperCase() + ".";
    } else {
      newName += i.name.slice(1, i.name.length);
    }
    i.name = newName;
    return i;
  });


//doi thanh mang chi chua name
let arr = [
    {name: "Hai",age:26},
    {name: "Ba",age:5},
    {name: "Bon",age:62},
    {name: "Muoi",age:10}
];
let onlyName = (arr) => arr.map((i) => i.name);
onlyName(arr);


//ktra co phai thoi gian hop le hay k
let validDay = (value) => {
    let check = new Date(value);
    if (isNaN(check.getTime())) {
        return false
    } else return true
}
validDay("2020-4")

//in ra thu viet tat
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

//tra ve so ngay truoc ngay hien tai
function back(n) {
    let today = new Date();
    today.setDate(today.getDate() - n);
    return today
}
back(4);

//tra ve so ngay thang nam
function numOfDaysInMon(y,m) {
    return new Date(y,m,0).getDate();
}
numOfDaysInMon(2020, 08);

//tinh so giay hien tai
let calculateSecond = () => new Date().getSeconds()
calculateSecond()

//ngay con lai den tet
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

//ktra phai cuoi tuan hay k
function weekend(day) {
    let dayCheck = new Date(day),
        check = false;
    dayCheck.getDay() == 0 || dayCheck.getDay() == 6 ? check = true : false
    return check;
}
weekend("2021-08-22");

//viet ham tra ve so quy
function quarterCheck(date) {
    let check = new Date(date).getMonth() + 1,
        quarter = 0;
    check >= 1 && check <= 3 ? quarter = 1 :
    check >= 4 && check <= 6 ? quarter = 2 :
    check >= 7 && check <= 9 ? quarter = 3 : quarter = 4
    return quarter;
}
quarterCheck("2020-04")

//tinh tong so ngay da qua trong nam
let dayPass = () => {
    let today = new Date();
    previous = new Date(today.getFullYear(), 0, 1);
    return Math.ceil((today - previous + 1) / 86400000);
}
dayPass();

//tinh tuoi
function ageCalculator(y,m) {
    let age = new Date(y, m),
        now = new Date();
    return Math.trunc((now - age) / (1000*60*60*24*365))
}
ageCalculator(1998,08,22);

//10:01:30 CN 20/01/2020
function todayDate() {
    let day = new Date().getDay() + 1,
        today = new Date(),
        shortenedDay;
    if (day >= 2 && day <= 7) {
        shortenedDay = "T" + day
    } else shortenedDay = "CN";
    return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${shortenedDay} ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
}
todayDate();

//chenh lech giua 2 quoc gia 
let timezones = [
  "Europe/Andorra",
  "Asia/Dubai",
  "Asia/Kabul",
  "Europe/Tirane",
  "Asia/Yerevan",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Mawson",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Cordoba",
  "America/Argentina/Salta",
  "America/Argentina/Jujuy",
  "America/Argentina/Tucuman",
  "America/Argentina/Catamarca",
  "America/Argentina/La_Rioja",
  "America/Argentina/San_Juan",
  "America/Argentina/Mendoza",
  "America/Argentina/San_Luis",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Ushuaia",
  "Pacific/Pago_Pago",
  "Europe/Vienna",
  "Australia/Lord_Howe",
  "Antarctica/Macquarie",
  "Australia/Hobart",
  "Australia/Currie",
  "Australia/Melbourne",
  "Australia/Sydney",
  "Australia/Broken_Hill",
  "Australia/Brisbane",
  "Australia/Lindeman",
  "Australia/Adelaide",
  "Australia/Darwin",
  "Australia/Perth",
  "Australia/Eucla",
  "Asia/Baku",
  "America/Barbados",
  "Asia/Dhaka",
  "Europe/Brussels",
  "Europe/Sofia",
  "Atlantic/Bermuda",
  "Asia/Brunei",
  "America/La_Paz",
  "America/Noronha",
  "America/Belem",
  "America/Fortaleza",
  "America/Recife",
  "America/Araguaina",
  "America/Maceio",
  "America/Bahia",
  "America/Sao_Paulo",
  "America/Campo_Grande",
  "America/Cuiaba",
  "America/Santarem",
  "America/Porto_Velho",
  "America/Boa_Vista",
  "America/Manaus",
  "America/Eirunepe",
  "America/Rio_Branco",
  "America/Nassau",
  "Asia/Thimphu",
  "Europe/Minsk",
  "America/Belize",
  "America/St_Johns",
  "America/Halifax",
  "America/Glace_Bay",
  "America/Moncton",
  "America/Goose_Bay",
  "America/Blanc-Sablon",
  "America/Toronto",
  "America/Nipigon",
  "America/Thunder_Bay",
  "America/Iqaluit",
  "America/Pangnirtung",
  "America/Atikokan",
  "America/Winnipeg",
  "America/Rainy_River",
  "America/Resolute",
  "America/Rankin_Inlet",
  "America/Regina",
  "America/Swift_Current",
  "America/Edmonton",
  "America/Cambridge_Bay",
  "America/Yellowknife",
  "America/Inuvik",
  "America/Creston",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Dawson",
  "Indian/Cocos",
  "Europe/Zurich",
  "Africa/Abidjan",
  "Pacific/Rarotonga",
  "America/Santiago",
  "America/Punta_Arenas",
  "Pacific/Easter",
  "Asia/Shanghai",
  "Asia/Urumqi",
  "America/Bogota",
  "America/Costa_Rica",
  "America/Havana",
  "Atlantic/Cape_Verde",
  "America/Curacao",
  "Indian/Christmas",
  "Asia/Nicosia",
  "Asia/Famagusta",
  "Europe/Prague",
  "Europe/Berlin",
  "Europe/Copenhagen",
  "America/Santo_Domingo",
  "Africa/Algiers",
  "America/Guayaquil",
  "Pacific/Galapagos",
  "Europe/Tallinn",
  "Africa/Cairo",
  "Africa/El_Aaiun",
  "Europe/Madrid",
  "Africa/Ceuta",
  "Atlantic/Canary",
  "Europe/Helsinki",
  "Pacific/Fiji",
  "Atlantic/Stanley",
  "Pacific/Chuuk",
  "Pacific/Pohnpei",
  "Pacific/Kosrae",
  "Atlantic/Faroe",
  "Europe/Paris",
  "Europe/London",
  "Asia/Tbilisi",
  "America/Cayenne",
  "Africa/Accra",
  "Europe/Gibraltar",
  "America/Godthab",
  "America/Danmarkshavn",
  "America/Scoresbysund",
  "America/Thule",
  "Europe/Athens",
  "Atlantic/South_Georgia",
  "America/Guatemala",
  "Pacific/Guam",
  "Africa/Bissau",
  "America/Guyana",
  "Asia/Hong_Kong",
  "America/Tegucigalpa",
  "America/Port-au-Prince",
  "Europe/Budapest",
  "Asia/Jakarta",
  "Asia/Pontianak",
  "Asia/Makassar",
  "Asia/Jayapura",
  "Europe/Dublin",
  "Asia/Jerusalem",
  "Asia/Kolkata",
  "Indian/Chagos",
  "Asia/Baghdad",
  "Asia/Tehran",
  "Atlantic/Reykjavik",
  "Europe/Rome",
  "America/Jamaica",
  "Asia/Amman",
  "Asia/Tokyo",
  "Africa/Nairobi",
  "Asia/Bishkek",
  "Pacific/Tarawa",
  "Pacific/Enderbury",
  "Pacific/Kiritimati",
  "Asia/Pyongyang",
  "Asia/Seoul",
  "Asia/Almaty",
  "Asia/Qyzylorda",
  "Asia/Qostanay",
  "Asia/Aqtobe",
  "Asia/Aqtau",
  "Asia/Atyrau",
  "Asia/Oral",
  "Asia/Beirut",
  "Asia/Colombo",
  "Africa/Monrovia",
  "Europe/Vilnius",
  "Europe/Luxembourg",
  "Europe/Riga",
  "Africa/Tripoli",
  "Africa/Casablanca",
  "Europe/Monaco",
  "Europe/Chisinau",
  "Pacific/Majuro",
  "Pacific/Kwajalein",
  "Asia/Yangon",
  "Asia/Ulaanbaatar",
  "Asia/Hovd",
  "Asia/Choibalsan",
  "Asia/Macau",
  "America/Martinique",
  "Europe/Malta",
  "Indian/Mauritius",
  "Indian/Maldives",
  "America/Mexico_City",
  "America/Cancun",
  "America/Merida",
  "America/Monterrey",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Chihuahua",
  "America/Ojinaga",
  "America/Hermosillo",
  "America/Tijuana",
  "America/Bahia_Banderas",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Africa/Maputo",
  "Africa/Windhoek",
  "Pacific/Noumea",
  "Pacific/Norfolk",
  "Africa/Lagos",
  "America/Managua",
  "Europe/Amsterdam",
  "Europe/Oslo",
  "Asia/Kathmandu",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Auckland",
  "Pacific/Chatham",
  "America/Panama",
  "America/Lima",
  "Pacific/Tahiti",
  "Pacific/Marquesas",
  "Pacific/Gambier",
  "Pacific/Port_Moresby",
  "Pacific/Bougainville",
  "Asia/Manila",
  "Asia/Karachi",
  "Europe/Warsaw",
  "America/Miquelon",
  "Pacific/Pitcairn",
  "America/Puerto_Rico",
  "Asia/Gaza",
  "Asia/Hebron",
  "Europe/Lisbon",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Pacific/Palau",
  "America/Asuncion",
  "Asia/Qatar",
  "Indian/Reunion",
  "Europe/Bucharest",
  "Europe/Belgrade",
  "Europe/Kaliningrad",
  "Europe/Moscow",
  "Europe/Simferopol",
  "Europe/Kirov",
  "Europe/Astrakhan",
  "Europe/Volgograd",
  "Europe/Saratov",
  "Europe/Ulyanovsk",
  "Europe/Samara",
  "Asia/Yekaterinburg",
  "Asia/Omsk",
  "Asia/Novosibirsk",
  "Asia/Barnaul",
  "Asia/Tomsk",
  "Asia/Novokuznetsk",
  "Asia/Krasnoyarsk",
  "Asia/Irkutsk",
  "Asia/Chita",
  "Asia/Yakutsk",
  "Asia/Khandyga",
  "Asia/Vladivostok",
  "Asia/Ust-Nera",
  "Asia/Magadan",
  "Asia/Sakhalin",
  "Asia/Srednekolymsk",
  "Asia/Kamchatka",
  "Asia/Anadyr",
  "Asia/Riyadh",
  "Pacific/Guadalcanal",
  "Indian/Mahe",
  "Africa/Khartoum",
  "Europe/Stockholm",
  "Asia/Singapore",
  "America/Paramaribo",
  "Africa/Juba",
  "Africa/Sao_Tome",
  "America/El_Salvador",
  "Asia/Damascus",
  "America/Grand_Turk",
  "Africa/Ndjamena",
  "Indian/Kerguelen",
  "Asia/Bangkok",
  "Asia/Dushanbe",
  "Pacific/Fakaofo",
  "Asia/Dili",
  "Asia/Ashgabat",
  "Africa/Tunis",
  "Pacific/Tongatapu",
  "Europe/Istanbul",
  "America/Port_of_Spain",
  "Pacific/Funafuti",
  "Asia/Taipei",
  "Europe/Kiev",
  "Europe/Uzhgorod",
  "Europe/Zaporozhye",
  "Pacific/Wake",
  "America/New_York",
  "America/Detroit",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Indiana/Indianapolis",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Vevay",
  "America/Chicago",
  "America/Indiana/Tell_City",
  "America/Indiana/Knox",
  "America/Menominee",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/North_Dakota/Beulah",
  "America/Denver",
  "America/Boise",
  "America/Phoenix",
  "America/Los_Angeles",
  "America/Anchorage",
  "America/Juneau",
  "America/Sitka",
  "America/Metlakatla",
  "America/Yakutat",
  "America/Nome",
  "America/Adak",
  "Pacific/Honolulu",
  "America/Montevideo",
  "Asia/Samarkand",
  "Asia/Tashkent",
  "America/Caracas",
  "Asia/Ho_Chi_Minh",
  "Pacific/Efate",
  "Pacific/Wallis",
  "Pacific/Apia",
  "Africa/Johannesburg",
];

let continents = Array.from(
  new Set(timezones.map((i) => i.slice(0, i.indexOf("/"))))
);

let cities = timezones.map((i) => i.slice(i.lastIndexOf("/") + 1));

let citiesOfContinent = {};

continents.forEach((c) => {
  citiesOfContinent[c] = timezones
    .filter((t) => t.startsWith(c))
    .map((t) => t.slice(t.lastIndexOf("/") + 1));
});

let timer = {
  timezones,
  continents,
  cities,
  citiesOfContinent,
  help(continent) {
    if (continent && this.continents.includes(continent)) {
      console.log(
        `City in ${continent}: ${this.citiesOfContinent[continent].join(", ")}`
      );
    } else if (continent && !this.continents.includes(continent)) {
      console.log(
        "Continent not exists!\nUse timer.continents to see list of continents."
      );
    } else {
      console.log(
        "Use timer.getContinents to see list of continents\nUse timer.getCities(continent) to see list cites of continents\nUse timer.diff(city, otherCity) to get different time between two city"
      );
    }
  },
  get getContinents() {
    console.log(`List of continents: ${this.continents.join(", ")}`);
    return;
  },
  getCities(continent) {
    if (this.continents.includes(continent)) {
      console.log(
        `List cities of ${continent}: ${this.citiesOfContinent[continent].join(
          ", "
        )}`
      );
    } else {
      console.log(
        continent +
          " does not exists\nUse timer.getContinents to see list of continents"
      );
    }
  },
  getLocale(city) {
    return this.timezones.filter((t) => t.endsWith(city)).toString();
  },
  getTime(city) {
    let dateString = new Date().toLocaleString("vi-VN", {
      timeZone: this.getLocale(city),
    });
    let time = dateString.slice(0, 8);
    let date = dateString.slice(10).split("/").reverse().join("/");
    return new Date(date + " " + time);
  },
  diff(city, otherCity) {
    if (!this.cities.includes(city)) {
      console.log(
        city +
          " does not exits\nUse timer.getContinents to see list of continents\nAnd timer.getCities(continent) to see list cities of continents"
      );
      return;
    }

    if (!this.cities.includes(otherCity)) {
      console.log(
        otherCity +
          " does not exits\nUse timer.getContinents to see list of continents\nAnd timer.getCities(continent) to see list cities of continents"
      );
      return;
    }

    let cityTime = this.getTime(city);
    let otherCityTime = this.getTime(otherCity);
    let timediff = Math.abs((cityTime - otherCityTime) / 1000 / 60 / 60);

    console.log(
      `The current time in ${city} is ${cityTime.toLocaleString("vi-VN")}`
    );
    console.log(
      `The current time in ${otherCity} is ${otherCityTime.toLocaleString(
        "vi-VN"
      )}`
    );

    console.log(
      `${city} is ${timediff} hour(s) ${
        cityTime > otherCityTime ? "ahead of" : "behind"
      } ${otherCity}`
    );
  },
};

//tra ve ngay sau ngay hien tai
function forward(n) {
    let today = new Date();
    today.setDate(today.getDate() + n);
    return today
}
forward(4);

//viet ve so gio chenh lech 2 ngay
let difference = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return (d1 - d2) / (1000*60*60)
}
difference("2020-04-28", "2020-04-27");

//ngay tuong ung voi dau tuan
function firstDayOfWeek(date) {
    let newDate = new Date(date),
        day = newDate.getDay(),
        diff = newDate.getDate() - day + (day == 0 ? -6:1);
    return new Date(newDate.setDate(diff));
}
firstDayOfWeek(new Date());