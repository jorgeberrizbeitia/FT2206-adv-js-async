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
// const somePeopleClone = JSON.parse(JSON.stringify(somePeople)) // deep clone
const somePeopleClone = structuredClone(somePeople) // deep clone
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

// Activity 1

const students2 = [
  {
    name: 'ana',
    score: 5.4
  },
  {
    name: 'ivan',
    score: 7.5
  },
  {
    name: 'milo',
    score: 4.3
  },
  {
    name: 'igor',
    score: 7.0
  },
  {
    name: 'george',
    score: 8.9
  },
  {
    name: 'jess',
    score: 10.0
  },
  {
    name: 'kevin',
    score: 8.8
  },
  {
    name: 'beth',
    score: 7.1
  }
];


function sortByScore(arr) {  
  // .. your code here
  // shallow clone the original `arr` before sorting
  
  // shallow clone is [...arr]
  // deep clone is JSON.parse(JSON.stringify(arr))

  let arrClone = [...arr]
  arrClone.sort((student1, student2) => {
    if (student1.score > student2.score) {
      return -1
    } else if (student1.score < student2.score) {
      return 1
    } else {
      return 0
    }
  })

  // arrClone.sort((student1, student2) => student2.score - student1.score )

  const [firstPlace, secondPlace, thirdPlace, ...others] = arrClone
  // console.log(firstPlace, secondPlace, thirdPlace)
  // console.log(others)
  
  const newObj = {
    firstPlace,
    secondPlace,
    thirdPlace,
    others
  }
  // you can return the object or simply console.log the 4 values.
  return newObj
}

console.log ( sortByScore(students2) );


// Expected Output from the function => 
// {
//   firstPlace: { name: 'jess', score: 10 },
//   secondPlace: { name: 'george', score: 8.9 },
//   thirdPlace: { name: 'kevin', score: 8.8 },
//   others: [
//     { name: 'ivan', score: 7.5 },
//     { name: 'beth', score: 7.1 },
//     { name: 'igor', score: 7 },
//     { name: 'ana', score: 5.4 },
//     { name: 'milo', score: 4.3 }
//   ]
// }

// Actividad 2

function portmanteau( ...arrOfStrings ) {
  console.log(arrOfStrings)
  // ... your code here
  // let newStr = ""
  // arrOfStrings.forEach((eachStr) => {
  //   newStr += eachStr.slice(0, 3)
  // })

  let newStr = arrOfStrings.reduce((acc, eachStr) => acc + eachStr.slice(0, 3), "")

  return newStr
}

// don't change the function invocations below
console.log( portmanteau( "hello" , "taco" ) ); // => output: "heltac"
console.log( portmanteau( "bacon", "lettuce" , "tomatoe" ) ); // => output: "baclettom"
console.log( portmanteau( "leonardo", "michelangelo" , "donatello", "raphael" ) ); // => output: "leomicdonrap"



// MANEJANDO COMPORTAMIENTOS ASYNCRONOS EN JS


console.log("*** CLASE ASYNC ***")


// esta en mi codigo
function requestBook(bookIndex, callback, callbackError) {
  // el callback es la funcion que se va a invocar cuando obtenga la respuesta

  // simulamos que este array esta en una DB y toma tiempo ser recibida
  setTimeout(() => {
    const books = [
      "1. La comunidad del anillo",
      "2. Las dos Torres",
      "3. El retorno del Rey"
    ]
    // bookToReturn = books[bookIndex]
    if (books[bookIndex] === undefined) {
      callbackError("No existe libro en esa posición")
    } else {
      callback(books[bookIndex]) // 2 segundos despues, invoca la funcion
    }
  }, Math.random() * 3000)
}

// yo tratando de acceder a data
// const myBook = requestBook(0)
// console.log(`leyendo ${myBook}`)

// function getResponse(response) {
//   console.log(`leyendo ${response}`)
// }

// requestBook(0, (response1) => {
//   console.log(`leyendo ${response1}`)
//   requestBook(1, (response2) => {
//     console.log(`leyendo ${response2}`)
//     requestBook(2, (response3) => {
//       console.log(`leyendo ${response3}`)
//     }, (err) => {
//       console.log(err)
//     })
//   }, (err) => {
//     console.log(err)
//   })
// }, (err) => {
//   console.log(err)
// })

// PYRAMID OF DOOM :O MALA PRACTICA.



// AHORA CON PROMESAS :) 

function requestBookPromise(bookIndex) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const books = [
        "1. La comunidad del anillo",
        "2. Las dos Torres",
        "3. El retorno del Rey"
      ]
      if (books[bookIndex] === undefined) {
        reject("No existe libro en esa posición")
      } else {
        resolve(books[bookIndex]) 
      }
    }, Math.random() * 3000)
  })
}

// const algo = requestBookPromise(0)
// console.log(algo) // Promise {<pending>}

// then/catch
requestBookPromise(0)
.then((response) => {
  console.log("solo si promesa resuelta! yay")
  console.log(`leyendo ${response}`)
  return requestBookPromise(1)
})
.then((response) => {
  console.log(`ahora leyendo ${response}`)
  return requestBookPromise(2)
})
.then((response) => {
  console.log(`ahora finalmente leyendo ${response}`)
  console.log("He terminado el Señor de los Anillos! :)")
})
.catch((err) => {
  console.log("solo si la promesa es rechazada", err)
})


// async/await

async function getBooks() {

  // try/catch. NO OLVIDAR AGREGARLO
  try {
    // INTENTA HACER ESTO
    const response1 = await requestBookPromise(0)
    console.log(`leyendo ${response1}`)
  
    const response2 = await requestBookPromise(1)
    console.log(`leyendo ${response2}`)
  
    const response3 = await requestBookPromise(4)
    console.log(`leyendo ${response3}`)
  } catch(err) {
    // SI ALGO FALLA, EJECUTA ESTO
    console.log(err)
  }
}

getBooks()



// CUANDO QUEREMOS RECIBIR VARIAS PROMESAS, PERO NO DEPENDEN ENTRE ELLAS

// promise all y promise all settled

// el metodo recibe un array de promesas
// retorna una nueva promesa que engloba todas
Promise.all([
  requestBookPromise(0),
  requestBookPromise(1),
  requestBookPromise(2)
])
.then((response) => {
  console.log("desde promise.all", response)
})
.catch((err) => {
  console.log(err)
})

Promise.allSettled([
  requestBookPromise(0),
  requestBookPromise(5),
  requestBookPromise(2)
])
.then((response) => {
  console.log("desde promise.allSettled", response)
})



// fetch => acceder a APIs

fetch("https://api.spacexdata.com/v5/launches/")
.then((response) => {
  console.log(response)
  return response.json() // otra promesa requerida por fetch
})
.then((response) => {
  console.log("informacion del ultimo lanzamiento de spacex", response)
  let spaceXImg = document.querySelector("#spacex")
  console.log(spaceXImg)
  spaceXImg.src = response.links.patch.small
})