console.log("Probando!")


let oranges = 15;
let orangeQtyForJuice = 10;

if (oranges > orangeQtyForJuice) console.log("Tengo suficientes naranjas")
else console.log("no puedes hacer jugo! :(")

// no es muy comun ver esta sintaxis en condicionales

// const sayHello = (name) => {
//   return `Hello ${name}`
// }

const sayHello = (name) => `Hello ${name}`
// el resultado, automaticamente es retornado (implicito)


console.log( sayHello("Caro") )

// ejemplo de callback


const values = [30, 50, true, "Hola", 1];

// filtrar solo los elementos de numero

// const filteredValues = values.filter((eachValue) => {
//   if (typeof eachValue === "number") {
//     return true
//   } else {
//     return false
//   }
// })

const filteredValues = values.filter((eachValue) => typeof eachValue === "number")

console.log(filteredValues)


// reduccion de sintaxis en objetos


// let name = "Jorge";
// let age = "25";
// let HOBBY = "Videojuegos"


// const person = { 
//   name, 
//   age, 
//   hobby: HOBBY 
// }

// // si solo indicamos la propiedad, su valor será tomado de una variable del mismo nombre

// console.log(person)


// DESTRUCTURACION DE OBJETOS


const dog = {
  name: "Phantom",
  breed: "Mestizo",
  age: 9
}


// console.log(`${dog.name} es un perro de raza ${dog.breed} y tiene ${dog.age} añitos`)

const {name, breed, age} = dog
// destructurando. Creando variables con las propiedades del objeto.
// const name = "Phantom"

console.log(`${name} es un perro de raza ${breed} y tiene ${age} añitos`)


// const arr = [
//   {
//     name: "Phantom",
//     breed: "Mestizo",
//     age: 9
//   },
//   {
//     name: "Bastian",
//     breed: "Golden",
//     age: 10
//   }
// ]

// arr.forEach((eachDog) => {
//   const {name, breed, age} = eachDog
//   console.log(name, breed, age)
// })


function describeDog({name, breed, age, color = "básico"}) {
  // const {name, breed, age} = dog
  console.log(`${name} es un perro de raza ${breed} y tiene ${age} añitos. Y de color ${color}`)
}

describeDog(dog)

const dog2 = {
  name: "Buddy",
  breed: "Pincher",
  age: 5,
  color: "black"
}

describeDog(dog2)


// destructuracion de arrays

const myTopBooks = ["Dune", "Game of Thrones", "Dresden Files", "Mundo Disco", "Dragonlance"]

const [book1, book2, book3, book4, book5] = myTopBooks

console.log(`mis libros favoritos son: ${book1}, ${book2}, ${book3}, ${book4} y ${book5}`)



let personObj = {
  name: "Bob",
  age: 40,
  other: {
    about: {
      favColor: "Azul",
      hobbies: ["Bailar", "Surfear"]
    }
  }
}

// quiero destructurar favColor
console.log(personObj.other.about.favColor)

const { other: { about: { favColor } } } = personObj
console.log(favColor)

// quiero destructurar el segundo hobby
const { other: { about: { hobbies: [, hobby2] } } } = personObj
console.log(hobby2)



// OPERADOR SPREAD (...)

const myArr = ["hola", "que tal", "adios"]

console.log(myArr)
console.log(...myArr) // los elementos esparcidos

const someNumbers = [2, 5, 10, 20]

console.log( Math.max(...someNumbers) )
console.log( Math.min(...someNumbers) )


const students = ["Miguel", "Rebeca", "Ivan", "Paula"]
const teachers = ["Caro", "Jorge"]


const everyone = [...students, "Manu", ...teachers, "adrian", "Jose", "Malva"]

console.log(everyone)



const newNumbers = [2, 5, 10, 20]

// const newNumbersCopy = JSON.parse(JSON.stringify(newNumbers)) // deep clone
const newNumbersCopy = [...newNumbers] // shallow clone

newNumbersCopy.reverse()

console.log(newNumbersCopy)
console.log("original", newNumbers)



const somePeople = [
  {
    name: "Caro",
    candy: 1000
  },
  {
    name: "Paula",
    candy: 500
  },
  {
    name: "Ivan",
    candy: 200
  },
]

// const somePeopleClone = [...somePeople] // shallow clone
const somePeopleClone = JSON.parse(JSON.stringify(somePeople)) // deep clone
// deep clone clone TODAS las referencias de objetos internos
// shallow clone solo crea una nueva referencia de la primera dimension de la data

somePeopleClone.pop()

console.log("original", somePeople)
console.log("clone", somePeopleClone)

somePeopleClone[1].candy = 2000

console.log("original", somePeople)
console.log("clone", somePeopleClone)

const recipe = {
  name: "Dulce de leche",
  calories: 10000
}

// spread en objetos para clonar
const recipeClone = {...recipe}
console.log("clone", recipeClone)

// Operador REST (...) => el resto de los elementos

const hobbies = ["surfear", "cocinar", "jugar", "codear"]



const [firstHobby, ...restOfHobbies] = hobbies

console.log(firstHobby)
console.log(restOfHobbies)


// Math.max()

const checkIfTen = (...allNumbers) => {
  console.log(allNumbers)
  // quiero que me des el resto de los argumentos
  const sum = allNumbers.reduce((acc, elem) => {
    return acc + elem
  }, 0)
  if (sum === 10) {
    return "es exactamente 10!"
  } else {
    return "no es 10 :("
  }
}

console.log( checkIfTen(5, 2, 3) )
console.log( checkIfTen(5, 2, 2, 1, 8) )

