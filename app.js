
let listaDeAmigos = [];

// Função para adicionar um nome à lista de amigos.
function adicionarAmigo() {
    const input = document.getElementById('amigo'); // Seleciona o campo de entrada.
    const nome = input.value.trim(); // Obtém o valor do campo e o 'trim' remove espaços extras.

    if (nome === '') {
        alert('Por favor, insira um nome válido.'); // Validação 
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert('Esse nome já foi adicionado.'); //Para não repetir na lista
        input.value = ''; // Limpa o campo de entrada.
        return;
    }

    listaDeAmigos.push(nome); // Adiciona o nome na lista de amigos.
    atualizarListaDeAmigos(); // Atualiza a  da lista na tela.
    input.value = ''; // Limpa o campo de entrada.
}

// Função para atualizar a exibição da lista de amigos na tela.
function atualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos'); // Seleciona o nome da lista.
    lista.innerHTML = ''; // Limpa o conteúdo da lista.

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement('li'); // Cria um novo nome na lista.
        item.textContent = amigo; // Define o nome do amigo 

        const botaoRemover = document.createElement('button'); // botão para remover o amigo.
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerAmigo(index); // Ação de remover o amigo.
        item.appendChild(botaoRemover); // Adiciona o botão ao item da lista.

        lista.appendChild(item); // Adiciona o item na lista na tela.
    });
}

// Função para remover um amigo da lista.
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1); // Remove o amigo pelo índice.
    atualizarListaDeAmigos(); // Atualiza a exibição da lista.
}

// Função para sortear amigos.
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.'); // Valida o número mínimo de amigos.
        return;
    }

    const copiaLista = [...listaDeAmigos]; // Cria uma cópia da lista para preservar a original.
    const resultado = [];

    while (copiaLista.length > 0) {
        const sorteado = copiaLista.splice(Math.floor(Math.random() * copiaLista.length), 1)[0]; // Sorteia um amigo.
        resultado.push(sorteado); // Adiciona o amigo sorteado ao resultado.
    }

    exibirResultado(resultado); // Exibe o resultado do sorteio.
}

// Função para exibir o resultado do sorteio na tela.
function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado'); // Seleciona o resultado.
    listaResultado.innerHTML = ''; // Limpa o nome anterior.

    resultado.forEach((amigo, index) => {
        const item = document.createElement('li'); // Cria um novo item de lista.
        item.textContent = `${index + 1}. ${amigo}`; // Define  a posição e o nome do amigo.
        listaResultado.appendChild(item); // Adiciona o nome na lista de resultado.
    });
}
