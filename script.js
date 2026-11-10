const listagemFilmes = []; 
const botao = document.getElementById('abrir-formulario');
const formulario = document.getElementById('form-filme');
const feed = document.getElementById('filmes');

// Abre o formulário ao clicar no botão "+"
botao.addEventListener('click', () => {
    formulario.hidden = false;
});

// Trata o envio dos dados
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar

    // Captura os valores digitados nos inputs
    const novoFilme = {
        titulo: formulario.elements.titulo.value,
        capa: formulario.elements.capa.value
    };
    
    // Adiciona o novo filme ao array de controle
    listagemFilmes.push(novoFilme); 

    // Cria a tag da imagem dinamicamente
    const capa = document.createElement('img');
    capa.classList.add('Filmes'); // Aplica as regras e animações do CSS
    capa.src = novoFilme.capa;     // CORRIGIDO: Agora aponta para novoFilme
    capa.alt = novoFilme.titulo;   // CORRIGIDO: Agora aponta para novoFilme
    
    // Adiciona a imagem dentro da div #filmes
    feed.append(capa);

    // Limpa os campos do formulário e o esconde novamente
    formulario.reset();
    formulario.hidden = true;
});
