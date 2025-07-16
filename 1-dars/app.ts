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

// Enum bu o'zgaruvchilarni nomlash uchun ishlatiladi

enum Direktion {
	Up = 'UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT',
}

let direction = Direktion.Up
console.log(direction)

enum Website {
	Google = 'https://www.google.com',
	YouTube = 'https://www.youtube.com',
	Twitter = 'https://www.twitter.com',
}

let Person: {
	id: number
	name: string
	age: number
	isMarried: boolean
	email: string[]
	adress: {
		street: string
		city: string
		state: string
		geo: [number, number]
	}
	phone: number
	Website: Website
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
} = {
	id: 1,
	name: 'Alex Ali',
	age: 25,
	isMarried: true,
	email: ['wjgfu@kedbgvre'],
	adress: {
		street: 'Main St',
		city: 'Tashkent',
		state: 'Tashkent',
		geo: [41.2995, 69.2401],
	},
	phone: 998901234567,
	Website: Website.Google,
	company: {
		name: 'Tech Company',
		catchPhrase: 'Innovating the future',
		bs: 'business solutions',
	},
}
