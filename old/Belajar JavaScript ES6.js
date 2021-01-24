// error handling khusus JavaScript
"use strict";

/* 

Data types:
undefined, null, boolean, string, symbol, number, and object

keyword-keyword untuk declaration:
var     : yang paling umum
let     : sama kaya var, tapi sangat terlokalisasi, lebih aman dari bug
const   : konstanta, terlokalisasi mirip let
function: untuk membuat function

simbol kutip:
""  : harus selalu pakai escape sequence
''  : " tidak perlu pakai escape sequence
``  : " dan ' tidak perlu pakai escape sequence

simbol sama dengan:
a == 3  atau a != 3     : 3 & '3' dianggap SAMA
a === 3 atau a !== 3    : 3 & '3' dianggap BEDA

*/

console.log('.');//=================================================================================
//variabel jadi jauh lebih fleksibel, mirip python

let jurusan = 'Teknik Komputer';
let nama = 8.0;
console.log(nama);
nama = "Qisas";
console.log(nama);
nama += " Hasanudin";
console.log(nama);

let kalimat1 = nama + " adalah mahasiswa " + jurusan + "." ;
console.log(kalimat1);
console.log("(panjang kalimat: " + kalimat1.length + " huruf.)");

console.log('.');//=================================================================================
//array juga jadi lebh fleksibel

let array1 = 69;
console.log(array1);
array1 = ["Qisas", 20, 3.75];
console.log(array1);
array1 = [["Qisas", 20, 3.75], ["Hasan", 19, 3.00]];
console.log(array1);

//push, pop, shift left, shift right
array1.push(["Udin", 21, 3.33]);
console.log(array1);

let varFromArray1 = array1.pop();
console.log(array1);
console.log(varFromArray1);

varFromArray1 = array1.shift();
console.log(array1);
console.log(varFromArray1);

array1.unshift(varFromArray1);
console.log(array1);
console.log(varFromArray1);

console.log('.');//=================================================================================
//Random number generator

function random(min, max, type){
    let value = Math.random() * (max - min) + min;
    if(type == 'int'){
        value = Math.floor(value);
    }
    return value;
}

console.log(random(0, 10, 'int') + ', ' + random(10, 20));

console.log('.');//=================================================================================
// ternary operator (single-line if-statement)

function posOrNeg(num){
    return num > 0? "positive" : num < 0? "negative" : "zero";
}

console.log(posOrNeg(10));
console.log(posOrNeg(0));
console.log(posOrNeg(-5));

console.log('.');//=================================================================================
console.log('.');//=================================================================================
// Object = sama dengan array, tapi diaksesnya pake string (properties), bukan pake int (index)
// BISA JADI PENGGANTI SWITCH

let bioQisas = {
    "nama"  : 'Qisas',
    npm     : 1806200210,
    "ipk"   : 3.75,
    123     : 456,
};
console.log(bioQisas.nama + ", " + bioQisas.npm + ", " + bioQisas[123]);
console.log(bioQisas);

bioQisas.jurusan = 'Teknik Komputer';
console.log(bioQisas);
console.log(bioQisas.hasOwnProperty('jurusan'));

delete bioQisas.jurusan;
console.log(bioQisas);
console.log(bioQisas.hasOwnProperty('jurusan'));

console.log('.');//=================================================================================
//Nested object

let myStorage = {
    car   :{
        inside    :{
            gloveBox  : 'maps',
            backSeat  : 'crumbs',
        },
        outside   :{
            trunk     : 'jack',
        },
    },
};
console.log(myStorage.car.outside.trunk);

console.log('.');//=================================================================================
//Coding Challenge 1: Record Collection

let collection = {
    "2548":{
        album   :'Slippery When Wet',
        artist  :'Bon Jovi',
        tracks  :[
            'Let It Rock',
            'You Give Love a Bad Name'
        ]
    },
    "2468":{
        album   :'1999',
        artist  :'Prince',
        tracks  :[
            '1999',
            'Little Red Corvette'
        ]
    },
    "1245":{
        artist  :'Robert Palmer',
        tracks  :[]
    },
    "5439":{
        album   : "ABBA Gold"
    }
};

let collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(2468, "track", "test"));
console.log(updateRecords(5439, "artist", "ABBA"));

console.log('.');//=================================================================================
//Coding Challenge 2: Profile Lookup

let contacts = [
    {
        firstName   :'Akira',
        lastName    :'Laine',
        number      :'0543236543',
        interest    :['Pizza', 'Coding', 'Brownie Points']
    },
    {
        firstName   :'Harry',
        lastName    :'Potter',
        number      :'0994372684',
        interest    :['Hogwarts', 'Magic', 'Hagrid']
    },
    {
        firstName   :'Sherlock',
        lastName    :'Holmes',
        number      :'0487345643',
        interest    :['Intriguing Cases', 'Violin']
    },
    {
        firstName   :'Kristian',
        lastName    :'Vos',
        number      :'unknown',
        interest    :['JavaScript', 'Gaming', 'Foxes']
    }
];

function lookupProfile(name, prop){
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || 'No such property';
        }
    }
    return 'No such contact.';
}

console.log(lookupProfile('Sherlock', 'lastName'));
console.log(lookupProfile('Kristian', 'number'));

console.log('.');//=================================================================================
// var vs let
function checkScope(){
    "use strict";
    
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("Block scope i is: " + i);
    }
    console.log("Function scope i is: " + i);
    return i;
}

checkScope();

console.log('.');//=================================================================================
// Anonymous Function
var myConcat1 = function(arr1, arr2){
    return arr1.concat(arr2);
};
console.log(myConcat1([1,2], [3,4,5]));

console.log('.');//=================================================================================
// Arrow Function
const myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2([1,2], [3,4,5]));

console.log('.');//=================================================================================
// Function di dalam Arrow Function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const out = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
    return out;
}
console.log(squareList(realNumberArray));

console.log('.');//=================================================================================
// Default parametr
const increment = (function(){
    return function increment(number, value = 1){
        return number+value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

console.log('.');//=================================================================================
// Rest operator (infinite arguments)
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3,4));

console.log('.');//=================================================================================
// Spread operator (gak ngerti)
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr_test;
(function(){
    arr_test = [...months];
    months[0] = 'potato'
})();
console.log(arr_test);

console.log('.');//=================================================================================
// Destructuring Assignment (memisahkan isi object ke variabel2 berbeda)
var voxel = {x: 3.6, y: 7.4, z: 6.54};
const {x: a, y: b, z: c} = voxel;
console.log(a);

// untuk nested object:
const FORECAST = {
    today   : {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6},
};
function getMaxTemp(forecast){
    const {tomorrow: {max: value}} = forecast;
    return value;
}
console.log(getMaxTemp(FORECAST));

// untuk meng-assign variabel:
const source = [1,2,3,4,5,6,7,8,9,10];
const [z, x, , y] = source;
console.log(z,x,y);

// untuk menukar isi variabel:
let inputa=8, inputb=6;
(() => {
    [inputa,inputb] = [inputb,inputa]
})();
console.log(inputa,inputb);

//overwrite 2 angka & hapus 1 angka dari source:
function removeFirstTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const dest = removeFirstTwo(source);
console.log(source);
console.log(dest);

//oper object ke function:
const stats = {
    max : 56.78,
    dev : 4.34,
    med : 34.54,
    mod : 23.87,
    min : -0.75,
    ave : 35.85
};
const half = (function(){
    return function half({max,min}){
        return (max + min) / 2;
    };
})();
console.log(stats);
console.log(half(stats));

console.log('.');//=================================================================================
// Template Literals
const person = {
    name    : "Qisas Hasanudin",
    age     : 20
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

//example:
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr){
    const resultDispArr = [];
    for(let i = 0; i < arr.length; i++){
        resultDispArr.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDispArr;
}
console.log(makeList(result.failure));


console.log('.');//=================================================================================
// simple field (untuk menyederhanakan object literal declaration)
const createPerson = (name,age,gender) => ({name,age,gender});
console.log(createPerson("qisas", 20, "pria"));


console.log('.');//=================================================================================
// function deklaratif sederhana
const bicycle = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

console.log('.');//=================================================================================
// Class
class shuttle {
    constructor(target){
        this.target = target;
    }
}
var zeus = new shuttle('Jupiter');
console.log(zeus.target);

//example 2:
function makeClass(){
    class vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return vegetable;
}
const vegetable = makeClass();
const carrot = new vegetable('carrot');
console.log(carrot.name);

console.log('.');//=================================================================================
// Getter & Setter (public / private)
class book{
    constructor(author){
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

// example 2:
function convert(){
    class thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return thermostat;
}
const thermostat = convert();
const thermos = new thermostat(76);
console.log(thermos.temperature);

thermos.temperature = 26;
console.log(thermos.temperature);

console.log('.');//=================================================================================
// import one function
import {capitalizeString} from "./string_function";
console.log(capitalizeString('hello!'));

// import all function
import * as strFunc from "./string_function";
console.log(strFunc.capInitial('hello!'));

//default import
import subtract from "./math_functions";
console.log(subtract(7,4));