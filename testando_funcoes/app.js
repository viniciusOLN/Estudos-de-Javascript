const botao = document.querySelector('.btn')
const remove = document.querySelector('.btn-remove')
const val = document.querySelector('.value')
const div = document.querySelector('.data')

botao.addEventListener('click', () => {
    const valuee = val.value
    //aqui poderia ser verificando pelo tamanho da string recebida do campo, se for igual a zero significa q estaria vazio  
    if(valuee === ''){
        alertBlock('Error! Digite um elemento na caixa de diálogo!', 2000)
    }else{
        addList(valuee)
        const itemList = document.querySelectorAll('.list')
        for(let i = 0; i < itemList.length; i++){
            itemList[i].addEventListener('click', function openValues(){
                selectedItem(i)
                itemList[i].removeEventListener('click', openValues)
            })
        }
    }
})

remove.addEventListener('click', () => {
    if(document.querySelector('.list') === null){
        alertBlock('Error! Adicione um valor antes de remover!', 2000)
    }else{
        const itemList = document.querySelectorAll('.list')    
        removeList(itemList.length - 1)
    }
})

const addList = (message) => {
    if(message.length > 100){
        alertBlock('Error! O limite máximo de caracteres é de 100', 2000)
    }else{
        const element = document.createElement('p')
        element.innerText = message
        element.classList.add('list')
        div.appendChild(element)
    }
}

const removeList = (value) => {
    const todos = div.querySelectorAll('p')
    const valor = todos[value]
    div.removeChild(valor)
}

const alertBlock = (message, duracao) => {
    const alert = document.querySelector('.alert-block')
    const text = document.querySelector('.text')
    text.innerText= message
    alert.style.display = 'block'
    setTimeout(() =>{    
        alert.style.display = 'none'
    }, duracao)
}

const selectedItem = (value) => {
    const item = document.createElement('img')
    item.classList.add('remove-img')
    const itemList = document.querySelectorAll('.list')
    itemList[value].appendChild(item)
    alertBlock('Deseja remover o item que foi selecionado?', 3000)
    item.addEventListener('click', () => {
        removeList(value)
    })
}
