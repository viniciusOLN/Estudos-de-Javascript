//criar frases motivacionais
function motivacional(){
    console.log('frase motivacional 1')
    console.log('frase motivacionall 2')
    console.log('frase motivacionalll 3')
}

//function expression ou function anonymous
//parâmetros
const sum = function(a, b){
    return console.log(`a soma de ${a} e ${b} é de ${a + b}`)
}

//argumentos
sum(2, 3)

//function scope
let subject = 'create video'

function createthink(subject){
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createthink(subject))

//function hoisting

//funciona o hoisting
sayMyName()

function sayMyName(){
    console.log('alooo')
}

//nao funciona o hoisting
// a()

// const a = function (){
//     console.log('alooo')
// }


//arrow function
const sayName = (name) => {
    console.log(name)
}

sayName('vinicius')

//callback function

function naame(name){
    name()
}

naame(
    () =>{
        console.log('estou em uma callback')
    }
)

//function construtctor

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }
}
const vinicius = new Person('Vinicius')
console.log(vinicius)
console.log(vinicius.walk())
const joao = new Person('joao')
console.log(joao)