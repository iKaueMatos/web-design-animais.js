// se o usuario clica r na tecla t aumente toda a fonte do site e tambem troque a fonte 


function handleEvent(event){
    if(event.key === 't'){
        console.log("clicou na letra T",event)
        document.documentElement.classList.toggle('thema_dark')
        
    }else if(event.key === 'd'){
        document.body.classList.toggle('dark')
    }
}

window.addEventListener('keydown',handleEvent)
