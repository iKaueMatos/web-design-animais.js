function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();


//Função key 

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


//Scroll
  const scroll = () =>{

    const linksinternos = document.querySelectorAll('.js-menua[href^="#"]')


    function scrollTosection(event){
      event.preventDefault();
      const href = event.currentTarget.getAttribute;
      const section = document.querySelector(href);
      console.log(section.offseTop);
      window.scrollTo(0,1000);
    }


    linksinternos.forEach((links)=>{
      links.addEventListener('click',scrollTosection)
    })

  }

scroll()