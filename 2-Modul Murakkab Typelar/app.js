"use strict";
//Union Types in TypeScript
let data = ['Hello', 42, 'World', 100];
console.log(data);
//Letiral Types in TypeScript aniq qiymatlarni saqlaydi va qayataradi
let literalData;
literalData = 'Hello'; // Bu to'g'ri
let persons = [
    { firstName: 'John', lastName: 'Doe' },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        wife: { firstName: 'Alice', lastName: 'Smith' },
    },
];
console.log(persons);
let person = {
    firstName: 'John',
    lastName: 'Alex',
    role: 'Admin',
};
//void agar funksiyaga aynan qandaydir qiymat qaytarishini aytmasak void buladi
//return type bulmaydi
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice');
//Unknown Type haqida bu any ga o'xshash lekin farqi shundaki, unknown type dan foydalanish uchun biz uni tekshirishimiz kerak
let unknownData = 'Hello, World!';
if (typeof unknownData === 'string') {
    console.log(unknownData.toUpperCase()); // Bu to'g'ri, chunki unknownData string
}
//any Type bu har qanday turdagi qiymatni qabul qiladi va qaytaradi
let anyData = 'Hello, World!';
console.log(unknownData);
