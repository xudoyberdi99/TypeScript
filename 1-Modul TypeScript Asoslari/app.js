"use strict";
let fullName = 'Alex Ali';
let isMarried = true;
let age = 25;
console.log(fullName);
console.log(isMarried);
console.log(age);
const arr = ['Alex', 'Ali', 25, true];
console.log(arr);
// Tuple bu aniq uzunlikdagi massivdir
let person = ['Alex', 'Ali', 25, true];
console.log(person);
// ReadOnluy bu o'zgarmas massiv massivga umuman o'zgartirish mumkin emas yani element qo'shish, o'chirish, almashtirish mumkin emas
let readonlyArr = [
    'Alex',
    'Ali',
    25,
    true,
];
console.log(readonlyArr);
// Enum bu o'zgaruvchilarni nomlash uchun ishlatiladi
var Direktion;
(function (Direktion) {
    Direktion["Up"] = "UP";
    Direktion["Down"] = "DOWN";
    Direktion["Left"] = "LEFT";
    Direktion["Right"] = "RIGHT";
})(Direktion || (Direktion = {}));
let direction = Direktion.Up;
console.log(direction);
