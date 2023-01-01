

//Identificando as teclas que são clicadas

function hadleKeyboard(event){
    if(event.key === "f11" ){
        document.body.classList.toggle('fullscrenn')
    }else if(event.key === 'b'){
        document.body.classList.toggle('dark')
       
    }
}

window.addEventListener('keydown',hadleKeyboard)

