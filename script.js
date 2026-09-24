const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')
const caixa = document.getElementById('caixa')
const lista = document.getElementById('lista')
const contadorTexto = document.getElementById('contador')

const btnTexto = document.getElementById('btnTexto')
const btnCor = document.getElementById('btnCor')
const btnFundo = document.getElementById('btnFundo')
const btnDestaque = document.getElementById('btnDestaque')
const btnFonte = document.getElementById('btnFonte')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnRemover = document.getElementById('btnRemover')
const btnContador = document.getElementById('btnContador')

btnTexto.addEventListener('click', function(){
    paragrafo.textContent = "Meu nome é Wilson"
})

btnCor.addEventListener('click', function(){
    paragrafo.style.color = "yellow"
})

btnFundo.addEventListener('click', function (){
    caixa.style.backgroundColor = "#19dcd6"
})

btnDestaque.addEventListener('click', function (){
    caixa.classList.toggle('destaque')
})

btnFonte.addEventListener('click', function (){
    titulo.style.fontSize = '40px'
})

btnFonte.addEventListener('click', function (){
    paragrafo.style.fontSize = '50px'
    paragrafo.style.fontWeight = 'bold'
})

btnAdicionar.addEventListener('click', function (){
    const itemNovo = document.createElement('li')
    itemNovo.textContent = "Item " + (lista.children.length + 1)
    lista.appendChild(itemNovo)
})

btnRemover.addEventListener('click', function (){
    if (lista.lastElementChild) {
        lista.lastElementChild.remove()
    }
})
let cliques = 0
btnContador.addEventListener('click', function (){
    cliques = cliques + 1
    contadorTexto.textContent = cliques
})