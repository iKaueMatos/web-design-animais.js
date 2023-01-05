const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');

function activeTab(index) {
// ForEach.section 
    tabcontent.forEach ((content)=>{
        content.classList.remove('ativo');
    });
    tabcontent[index].classList.add('ativo');
}



//exemploone.forEach((exemplo,){
//exemplo.addEventListener('mouseouver')
//
//});

tabmenu.forEach((itemMenu,index) => {
    itemMenu,addEventListener('click',() => {
        activeTab(index);

    });
});


//Identificando as teclas que são clicadas

function hadleKeyboard(event){
    if(event.key === "f11" ){
        document.body.classList.toggle('fullscrenn');
    }else if(event.key === 'b'){    
        document.body.style.color = '#fff';
        document.body.style.background = '#222';
    }
    
}

window.addEventListener('keydown',hadleKeyboard) // window da possibilidade de acessarmos diferentes propriedades ou metofos(funções);



