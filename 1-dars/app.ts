let fullName: string = 'Alex Ali'
let isMarried: boolean = true
let age: number = 25

console.log(fullName)
console.log(isMarried)
console.log(age)

const arr = ['Alex', 'Ali', 25, true]
console.log(arr)

// Tuple bu aniq uzunlikdagi massivdir
let person: [string, string, number, boolean] = ['Alex', 'Ali', 25, true]
console.log(person)
// ReadOnluy bu o'zgarmas massiv massivga umuman o'zgartirish mumkin emas yani element qo'shish, o'chirish, almashtirish mumkin emas
let readonlyArr: readonly [string, string, number, boolean] = [
	'Alex',
	'Ali',
	25,
	true,
]
console.log(readonlyArr)
