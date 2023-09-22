
let mapaExibido = false;
let map;
let mapButton = document.getElementById('mapButton');
let mapContainer = document.querySelector('.map-container'); // Seleciona a div do mapa pela classe

function exibirMapa() {
    if (mapaExibido) {
        // Se o mapa já estiver sendo exibido, remova-o
        if (map) {
            map.remove();
        }
        mapaExibido = false;
        mapButton.value = '🗺️Como Chegar'; // Altera o texto do botão
        mapContainer.style.display = 'none'; // Esconde a div do mapa
    } else {
        // Se o mapa não estiver sendo exibido, crie-o
        map = L.map('map').setView([-22.931092847989774, -48.46115529820424], 24);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicionar um marcador no mapa
        L.marker([-22.931092847989774, -48.46115529820424]).addTo(map)
            .bindPopup('Estou aqui!!')
            .openPopup();

        mapaExibido = true;
        mapButton.value = '🙈Esconder Mapa'; // Altera o valor do input
        mapContainer.style.display = 'block'; // Mostra a div do mapa
    }
}

//FORMULARIO DE AGENDAMENTO\\

function exibirPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function enviarForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;
    const mensagemAgradecimento = document.getElementById('mensagemAgradecimento');
    const recarregarButton = document.getElementById('recarregarButton');
    const agendarForm = document.getElementById('agendarForm');
    

    // Aqui você pode enviar os dados do formulário para o servidor (por exemplo, usando AJAX).
    // Vou apenas simular o envio de dados com um atraso de 2 segundos.
    setTimeout(function () {
        agendarForm.style.display = 'none'; // Esconde o formulário
        mensagemAgradecimento.style.display = 'block'; // Mostra a mensagem de agradecimento
        mensagemAgradecimento.textContent = `Logo retornaremos o seu contato, ${nome}! 😉`;
        recarregarButton.style.display = 'block'; // Mostra o botão de recarregar
    }, 100);

    return false; // Retorna false para evitar o envio padrão do formulário
}

function recarregarPagina() {
    location.reload(); // Recarrega a página
}

