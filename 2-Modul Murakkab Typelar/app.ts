//Union Types in TypeScript
let data: (string | number)[] = ['Hello', 42, 'World', 100]
console.log(data)
//Letiral Types in TypeScript aniq qiymatlarni saqlaydi va qayataradi
let literalData: 'Hello' | 'World'
literalData = 'Hello' // Bu to'g'ri
//Literal Type - turli turdagi qiymatlarni qabul qiladi
//Union Type - faqat aniq belgilangan qiymatlarni qabul qiladi

//Type Aliases bu biz yangi type yaratishimiz mumkin
type Person = {
	firstName: string
	lastName: string
	wife?: Person
}

type Personlist = Person[]

let persons: Personlist = [
	{ firstName: 'John', lastName: 'Doe' },
	{
		firstName: 'Jane',
		lastName: 'Doe',
		wife: { firstName: 'Alice', lastName: 'Smith' },
	},
]

console.log(persons)

//Interface
interface Person1 {
	readonly firstName: String
	readonly lastName: String
	role: String
}

let person: Person1 = {
	firstName: 'John',
	lastName: 'Alex',
	role: 'Admin',
}

//void agar funksiyaga aynan qandaydir qiymat qaytarishini aytmasak void buladi
//return type bulmaydi

function greet(name: string): void {
	console.log(`Hello, ${name}!`)
}

greet('Alice')

//Unknown Type haqida bu any ga o'xshash lekin farqi shundaki, unknown type dan foydalanish uchun biz uni tekshirishimiz kerak
let unknownData: unknown = 'Hello, World!'
if (typeof unknownData === 'string') {
	console.log(unknownData.toUpperCase()) // Bu to'g'ri, chunki unknownData string
}

let asasa: string = unknownData as string
