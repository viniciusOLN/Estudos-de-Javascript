
var hora = document.querySelector('.hora p')
var img = document.querySelector('.imagem .img')
var estado = document.querySelector('.imagem .estado')

const zeroFill = n => {
    //retorna o horário indicado com um zero no começo se o valor for menor que 10
    //slice esta fazendo uma cópia dos dois últimos valores do array/string recebida 
    return ('0' + n).slice(-2)
}

const intervalo = setInterval(() => {
    var date = new Date()
    hora.innerText = `A hora agora é de ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}:${zeroFill(date.getSeconds())}`
}, 1000)

function time(){
    setInterval(() => {
        var date = new Date()
        hora.innerText = `A hora agora é de ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}:${zeroFill(date.getSeconds())}`
    }, 1000)
}

time()


var date = new Date().getHours()

if(date > 6 && date < 12){
    img.src = '/ex009/image/tarde.png'
    img.alt = 'Foto do Dia'
    estado.innerText = 'No momento está de dia!'
    document.body.style.background = 'green'
}else if(date > 12 && date < 18){
    img.src = '/ex009/image/dia.png'
    img.alt = 'Foto da Tarde'
    estado.innerText = 'No momento está de tarde!'
    document.body.style.background = 'Orange'
}else{
    img.src = '/ex009/image/noite.png'
    img.alt = 'Foto da Noite'
    estado.innerText = 'No momento está de noite!'
    document.body.style.background = 'Gray'
}

var slider = document.querySelectorAll('.slider img')
let total = slider.length
let current = 0
let duracao = 2000

function next(){
    slider[current].classList.remove('selected')

    current++

    if(current >= total)
        current = 0

    slider[current].classList.add('selected')
}

function before(){
    slider[current].classList.remove('selected')
    current--

    if(current >= total)
        current = 0

    if(current = 0)
        current = total

    slider[current].classList.add('selected')
}

function start(){
   setInterval(() =>{
        next()
   }, duracao) 
}

estado.addEventListener('click', () => {
    next()
})

img.addEventListener('click', () => {
    before()
})

window.addEventListener('load', start())









