let listaDeAmigos = [];
let resultado = [];
let indiceAtual = 0; // Para controlar a exibição do sorteio

// Adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert('Esse nome já foi adicionado.');
        input.value = '';
        return;
    }

    listaDeAmigos.push(nome);
    atualizarListaDeAmigos();
    input.value = '';
}

// Atualiza a lista de amigos na tela
function atualizarListaDeAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = amigo;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerAmigo(index);
        item.appendChild(botaoRemover);

        lista.appendChild(item);
    });
}

// Remove amigo da lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarListaDeAmigos();
}

// Sorteia amigos secretos e armazena na lista de resultado
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    let copiaLista = [...listaDeAmigos]; // Cópia da lista original
    resultado = [];

    while (copiaLista.length > 0) {
        let sorteado;
        let indiceSorteado;
        
        do {
            indiceSorteado = Math.floor(Math.random() * copiaLista.length);
            sorteado = copiaLista[indiceSorteado];
        } while (sorteado === listaDeAmigos[resultado.length]); // Evita que a pessoa tire a si mesma

        resultado.push(sorteado);
        copiaLista.splice(indiceSorteado, 1);
    }

    indiceAtual = 0; // Reinicia a exibição dos sorteados
    document.getElementById("resultado").innerHTML = ""; // Limpa a tela
    document.getElementById("botaoProximo").style.display = "block"; // Mostra o botão de próximo

    mostrarProximo(); // Exibe o primeiro sorteado
}

// Exibe um nome sorteado por vez
function mostrarProximo() {
    if (indiceAtual < resultado.length) {
        const listaResultado = document.getElementById('resultado');
        listaResultado.innerHTML = `<li>${resultado[indiceAtual]}</li> é seu amigo(a) secreto(a) , Parabéns o sorteio foi um sucesso! 🎁`; // Exibe apenas 1 nome

        // Ativa efeito de confete
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });

        indiceAtual++;
    } else {
        document.getElementById("botaoProximo").style.display = "none"; // Esconde o botão
        alert("Todos os amigos foram sorteados!");
    }
}

// Reinicia o sorteio
function reiniciarSorteio() {
    listaDeAmigos = [];
    resultado = [];
    indiceAtual = 0;
    
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("botaoProximo").style.display = "none";

    alert("Novo sorteio iniciado!");
}



