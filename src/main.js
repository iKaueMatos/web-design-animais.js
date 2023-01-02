//inner HTML basicamente ele ira pegar o elemento sleecionado e ira altera-lo somente aquele elemento 
//outerHTML ele ira de fato alterar o que esta dentro do nosso elemento selecionado e pegara os elementos relacionados 


const h1 = document.querySelector('h1');
h1.outerHTML = '<h1>Nunca nem vi</h1>';

