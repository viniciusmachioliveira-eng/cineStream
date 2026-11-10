const listagemFilmes = []; 
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');
const feed = document.getElementById('filmes');

// Controla a abertura e fechamento adicionando/removendo a classe 'ativo'
botao.addEventListener('click', () => {
    formulario.classList.toggle('ativo');
    
    // Altera o ícone do botão entre + e − dependendo do estado do formulário
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

    // Cria a imagem dinamicamente com as classes corretas
    const capa = document.createElement('img');
    capa.classList.add('Filmes'); 
    capa.src = novoFilme.capa;
    capa.alt = novoFilme.titulo;
    
    // Insere o novo filme no início da galeria
    feed.prepend(capa);

    // Reseta os campos e fecha o formulário
    formulario.reset();
    formulario.classList.remove('ativo');
    botao.innerText = '+';
});
