
//função 1
const initTabNav = () => {
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }
//exemploone.forEach((exemplo,){
//exemplo.addEventListener('mouseouver')
//
//});
tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
  
    });
  });
}
initTabNav();

//Função 2
const initkeyboard = () =>{
//Identificando as teclas que são clicadas
function hadleKeyboard(event){
    if(event.key === "f11" ){
        document.body.classList.toggle('fullscrenn');
    }else if(event.key === 'd'){    
        document.body.style.color = '#fff';
        document.body.style.background = '#222';
    }else if (event.key === 'b'){
        document.body.style.color ='#000';
        document.body.style.background = '#fff';
    }
    
}
window.addEventListener('keydown',hadleKeyboard) // window da possibilidade de acessarmos diferentes propriedades ou metofos(funções);

}
initkeyboard()


//função 3 
const initaccordionteam = () =>{
  const accordionList = document.querySelectorAll('.js-accordion dt')

  function activeAccordion(event){
    this.classList.add('ativo');
    this.nextElementSibling.classList.add('ativo');
  };
  
  accordionList.forEach((item) =>{
  item.addEventListener('click',activeAccordion);

  });
};

initaccordionteam()

