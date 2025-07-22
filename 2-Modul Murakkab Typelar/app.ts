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
