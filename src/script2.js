


//Função anonima aero function 
/* img.addEventListener('click',()=>{
    console.log('clicou')
}) */


//Callback - É boa pratica separar a função de callback do addEventListener,ou seja,declarar uma 
//função ao inves de passar diretamente uma função anonima
//Ira auxiliar bastante no desenvolvimento no momento em que debugar o seu codigo dessa forma conseguimos identificcar com mais facilidad emo que esta dando erro em uma função por exemplo

const img = document.querySelector('img');
const animaislista= document.querySelector('.animais-lista');


function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target)
}


animaislista.addEventListener('click',callbackLista);

console.log(animaislista);

//A palavra this e uma palavra especial do javascript,que pode fazer referencia a diferentes objetos dependendo do contexto.No caso de 
//eventos,ela fara referencia ao elemento em que addE ventListener foi adicionado!

 
const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type,event)
   
}

// Eventos para interações na pagina web
/* h1.addEventListener('click',handleEvent)
h1.addEventListener('mouseenter',handleEvent)
h1.addEventListener('scroll',handleEvent)
h1.addEventListener('mousemove',handleEvent)
h1.addEventListener('kewpdown',handleEvent)
 */

//Identificando as teclas que são clicadas

const text_dark = document.querySelector('.text-dark')
const animais_dark = document.querySelector('.animais-descricao')


function hadleKeyboard(event){
    if(event.key === "f11" ){
        document.body.classList.toggle('fullscrenn')
    }else if(event.key === 'b'){
        document.body.classList.toggle('dark')
       
    }
}

window.addEventListener('keydown',hadleKeyboard)