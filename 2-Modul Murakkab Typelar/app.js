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
