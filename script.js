const listagemFilmes = []; 
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');
const feed = document.getElementById('filmes');


botao.addEventListener('click', () => {
    formulario.classList.toggle('ativo');
    

    if (formulario.classList.contains('ativo')) {
        botao.innerText = '−';
    } else {
        botao.innerText = '+';
    }
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const novoFilme = {
        titulo: formulario.elements.titulo.value,
        capa: formulario.elements.capa.value
    };
    
    listagemFilmes.push(novoFilme); 

  
    const capa = document.createElement('img');
    capa.classList.add('Filmes'); 
    capa.src = novoFilme.capa;
    capa.alt = novoFilme.titulo;
    
   
    feed.prepend(capa);


    formulario.reset();
    formulario.classList.remove('ativo');
    botao.innerText = '+';
});
