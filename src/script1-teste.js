/* 
const img = document.querySelector('img');

const srcimg = img.getAttribute('alt');

img.setAttribute('alt','Olá mundo')


console.log(srcimg)


const animais = document.querySelector('.animais');

animais.className; 
animais.className = 'azul';
animais.className += 'vermelho';

if (animais == animais.className == 'azul' ){
    for(i = 0; i < 2; i++){
        console.log(i)
    }
}else{
    console.log('erro')
}


//Adicione a classe ativo a todos os itens do menu

const itens_menu = document.querySelectorAll('.menu a')

itens_menu.forEach((item)=>{
    item.classList.add('ativo')
    console.log(item)
})


// Remove uma classe ativo de todos os itens do menu e mantenha apenas no primeiro

itens_menu.forEach((item)=>{
    item.classList.remove('ativo');
    console.log(item)
});

itens_menu[0].classList.add('ativo');

//verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((img) =>{
    const possui = img.hasAttribute('alt')
    console.log(possui)
}) */



//idetificador de um dispositivo desktop,tablet,mobile
const small = window.matchMedia('(max-width:600px)')
const small_tablet = window.matchMedia('(max-width:768px)')
const small_desktop = window.matchMedia('(max-width:1440px)')



if (small){
    console.log('Usuario mobile')
}else if(small_tablet){
    console.log('Usuario Tablet')
}else if(small_desktop){
    console.log('usuario de desktop')
}

//verifique a distancia da primeira imagem em relação ao topo da pagina

const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log("Retornando o valor do primeeia img TOP",imgTop)

// Retorne a soma da largura de todas as imagens 

const imagens = document.querySelectorAll('img') // selecionando todas as imagens
let soma = 0;

function soma_imagens(){

imagens.forEach((imagem)=>{
    soma += imagem.offsetWidth; // somando todos os width - largura das imagens
    console.log(imagem.offsetWidth)
})

console.log(soma)

}

window.onload = function(){
    soma_imagens();
}

// verifique se as linhas da pagina possuem o minimo recomendado para as telas utilizadas com o dedo 
//(48px/48px de acordo com google)

const links = document.querySelectorAll('a')

links.forEach((link)=>{
    const linksWidht = link.offsetWidht;
    const linksHeight = link.offsetHeight;

    if (linksWidht >= 48 && linksHeight >= 48){
        console.log(link,"Link possui acessibilidade")
    }else{
        console.log("Não possui boa acessibilidade")
    }
})


