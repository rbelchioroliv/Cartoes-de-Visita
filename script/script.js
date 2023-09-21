
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
        map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicionar um marcador no mapa
        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('Estou aqui!!')
            .openPopup();

        mapaExibido = true;
        mapButton.value = '🙈Esconder Mapa'; // Altera o valor do input
        mapContainer.style.display = 'block'; // Mostra a div do mapa
    }
}

