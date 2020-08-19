
var hora = document.querySelector('.hora p')

const zeroFill = n => {
    //retorna o horário indicado com um zero no começo se o valor for menor que 10
    return ('0' + n).slice(-2)
}

const intervalo = setInterval(() => {
    var date = new Date()
    hora.innerText = `A hora agora é de ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}:${zeroFill(date.getSeconds())}`
}, 1000)

