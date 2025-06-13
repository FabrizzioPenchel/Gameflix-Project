// --- Declaração das variáveis globais para elementos HTML ---
let playTrailerBtn;
let trailerModal;
let closeButton;
let youtubePlayer;

let searchToggle;
let searchInput;
let gameLists;
let carouselArrows;

// --- Dados dos Jogos (com URLs de trailers mais estáveis, do YouTube) ---
// Mudei para URLs do YouTube que são geralmente mais compatíveis para embeds.
// Se você tem uma URL da Steam que REALMENTE funciona (aparece o vídeo) pode tentar trocar.
const allGamesData = [
    { id: "eldenring", title: "Elden Ring", poster: "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/c30V9fP69y4B9x9qW8dKk17N.jpg", trailer: "http://www.youtube.com/embed/E3Huy2buFVQ?autoplay=1" },
    { id: "residentevil", title: "Resident Evil Requiem", poster: "https://viciados.net/wp-content/uploads/2025/06/Resident-Evil-Requiem-9-Summer-Game-Fest-2025-Capcom-1280x720.webp", trailer: "http://www.youtube.com/embed/g_Tf84C1T18?autoplay=1" },
    { id: "deadspace", title: "Dead Space Remake", poster: "https://gamerspoiler.com/wp-content/uploads/2023/03/WCCFdeadspaceremake8.jpg", trailer: "http://www.youtube.com/embed/t-71q7_yvG4?autoplay=1" },
    { id: "alanwake2", title: "Alan Wake 2", poster: "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S1_2560x1440-ec44404c0b41bc457cb94cd72cf85872", trailer: "http://www.youtube.com/embed/oK0S3f_J48s?autoplay=1" },
    { id: "thecallistoprotocol", title: "The Callisto Protocol", poster: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0319/AoRusQKtAX48ZnVc11MjADSG.jpg", trailer: "http://www.youtube.com/embed/Z0o_wU97_gI?autoplay=1" },
    { id: "deadbydaylight", title: "Dead by Daylight", poster: "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7", trailer: "http://www.youtube.com/embed/Xq-K9tT7-68?autoplay=1" },
    { id: "outlast", title: "Outlast", poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Outlast_Cover_Art.jpg", trailer: "http://www.youtube.com/embed/Q0x_tP_t86Q?autoplay=1" },
    { id: "residentevil7", title: "Resident Evil 7", poster: "https://preview.redd.it/75bn91ijvc451.png?auto=webp&s=23c6928bbbaac979b888aef509c3584fe42bad18", trailer: "http://www.youtube.com/embed/t-71q7_yvG4?autoplay=1" }, // Reusing Dead Space trailer as placeholder for RE7
    { id: "silenthill2", title: "Silent Hill 2", poster: "https://cdn.sortiraparis.com/images/80/66131/1104437-silent-hill-2-nouvelle-bande-annonce-pour-le-remake-du-jeu-de-konami.jpg", trailer: "http://www.youtube.com/embed/oK0S3f_J48s?autoplay=1" }, // Reusing Alan Wake 2 trailer
    { id: "grandtheftautovi", title: "Grand Theft Auto VI", poster: "https://br.cointelegraph.com/jogos/wp-content/uploads/sites/12/2025/01/71d4d17edcd49703a5ea446cc0e588e6.jpg", trailer: "http://www.youtube.com/embed/Q0x_tP_t86Q?autoplay=1" }, // Reusing Outlast trailer
    { id: "assassinscreedshadows", title: "Assassin's Creed Shadows", poster: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1RLdppgLllgGZlkjuvHBu6/abbcf1e12935e4654a109324955a5087/RED_KEYART_STD_RGB_WW.jpg", trailer: "http://www.youtube.com/embed/g_Tf84C1T18?autoplay=1" }, // Reusing RE Requiem trailer
    { id: "doomdarkages", title: "Doom: The Dark Ages", poster: "https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/bb3f89ae3425f3aa86041ff71646fc5d44d7705f3a383427.jpg", trailer: "http://www.youtube.com/embed/t-71q7_yvG4?autoplay=1" }, // Reusing Dead Space trailer
    { id: "farcry6", title: "Far Cry 6", poster: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg", trailer: "http://www.youtube.com/embed/oK0S3f_J48s?autoplay=1" }, // Reusing Alan Wake 2 trailer
    { id: "uncharted4", title: "Uncharted 4: A Thief's End", poster: "https://meups.com.br/wp-content/uploads/2016/05/Uncharted-4_PS4.jpg", trailer: "http://www.youtube.com/embed/Z0o_wU97_gI?autoplay=1" }, // Reusing Callisto Protocol trailer
    { id: "cyberpunk2077_action", title: "Cyberpunk 2077 Action", poster: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7", trailer: "http://www.youtube.com/embed/Xq-K9tT7-68?autoplay=1" }, // Reusing Dead by Daylight trailer
    { id: "reddeadredemption2", title: "Red Dead Redemption 2", poster: "https://img.hype.games/cdn/635eed3e-ba6f-4cb7-9685-5c6ce64e1e0fRed-Dead-Redemption-2-Cover.jpg", trailer: "http://www.youtube.com/embed/Q0x_tP_t86Q?autoplay=1" }, // Reusing Outlast trailer
    { id: "hitman3", title: "Hitman 3", poster: "https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/Landscape-2560x1440-1f18287d356309156374725e80c2fc6a.jpg", trailer: "http://www.youtube.com/embed/t-71q7_yvG4?autoplay=1" }, // Reusing Dead Space trailer
    { id: "dyinglightthebeast", title: "Dying Light: The Beast", poster: "https://image.api.playstation.com/vulcan/ap/rnd/202506/0710/0eeef6d5e53209080435aa38e9bbeb905b5b9935c89cb170.jpg", trailer: "http://www.youtube.com/embed/oK0S3f_J48s?autoplay=1" }, // Reusing Alan Wake 2 trailer
    { id: "callofdutyblackops7", title: "Call of Duty: Black Ops 7", poster: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt9bdfb69d595cbdc3/682fa7092da99c1977a85c6b/-Bnet_Game-Content_UI_(Phoenix)-EN-1920x1080-Textless_(9).jpg", trailer: "http://www.youtube.com/embed/Z0o_wU97_gI?autoplay=1" }, // Reusing Callisto Protocol trailer
    { id: "xboxportatil", title: "Xbox Portatil", poster: "https://files.tecnoblog.net/wp-content/uploads/2025/06/Gs8Sx4Oa0AAy63F-1060x596.jpeg", trailer: "http://www.youtube.com/embed/Xq-K9tT7-68?autoplay=1" }, // Reusing Dead by Daylight trailer
    { id: "nintendoswitch2", title: "Nintendo Switch 2", poster: "https://www.ndgames.com.br/wp-content/uploads/2025/01/nintendo-switch-2-Fundo-desktop.webp", trailer: "http://www.youtube.com/embed/Q0x_tP_t86Q?autoplay=1" }, // Reusing Outlast trailer
    { id: "stellarblade", title: "Stellar Blade", poster: "https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1kt2x.jpg", trailer: "http://www.youtube.com/embed/t-71q7_yvG4?autoplay=1" }, // Reusing Dead Space trailer
    { id: "finalfantasy7rebirth", title: "Final Fantasy VII Rebirth", poster: "https://www.gematsu.com/wp-content/uploads/2025/03/MindsEye_2025_03-28-25_011.jpg", trailer: "http://www.youtube.com/embed/oK0S3f_J48s?autoplay=1" }, // Reusing Alan Wake 2 trailer
    { id: "dragon_dogma_2", title: "Dragon's Dogma 2", poster: "https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/software/switch-2/70010000095431/b664445df3f7a3765a760822d725ea1853bc6f43d2aa96ccee81d6f45cb281ef", trailer: "http://www.youtube.com/embed/Z0o_wU97_gI?autoplay=1" } // Reusing Callisto Protocol trailer
];


// --- Funções de Inicialização das Funcionalidades ---

// Inicializa referências aos elementos HTML
function initElements() {
    searchInput = document.getElementById('search-input');
    searchToggle = document.querySelector('.search-toggle');
    gameLists = document.querySelectorAll('.game-list');
    carouselArrows = document.querySelectorAll('.carousel-arrow');

    playTrailerBtn = document.querySelector('.play-trailer-btn');
    trailerModal = document.getElementById('trailer-modal');
    closeButton = document.querySelector('#trailer-modal .close-button');
    youtubePlayer = document.getElementById('youtube-player');
}

// Renderiza a lista de jogos em um contêiner específico
function renderGames(gamesToRender, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`renderGames: Contêiner não encontrado: ${containerSelector}`);
        return;
    }
    container.innerHTML = '';

    gamesToRender.forEach(game => {
        const gameItem = createElement('a', 'game-card');
        gameItem.href = `detalhes-jogo.html?id=${game.id}`;
        gameItem.dataset.trailer = game.trailer;

        const img = createElement('img');
        img.src = game.poster;
        img.alt = game.title;

        gameItem.append(img);
        container.append(gameItem);
    });

    // Re-configura event listeners para os game-items renderizados
    setupGameItemClickHandlers();
}

// Cria um elemento HTML com classes e conteúdo
function createElement(tag, className, textContent = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

// --- Lógica de Busca ---
function setupSearch() {
    const gameCategories = document.querySelectorAll('.game-category');
    const firstCategoryTitle = document.querySelector('.game-category:first-of-type .category-title');

    if (searchToggle && searchInput && gameCategories.length > 0) {
        searchToggle.addEventListener('click', () => {
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = '';
                filterGames('');
            }
        });

        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            filterGames(searchTerm);
        });
    } else {
        console.error("Erro: Elementos da barra de busca ou categorias de jogos não encontrados para configurar a busca.");
    }

    function filterGames(searchTerm) {
        const filteredGames = allGamesData.filter(game =>
            game.title.toLowerCase().includes(searchTerm) ||
            (game.id && game.id.toLowerCase().includes(searchTerm))
        );

        if (searchTerm === '') {
            gameCategories.forEach((category, index) => {
                category.style.display = 'block';
                const titleElement = category.querySelector('.category-title');
                if (titleElement) {
                    if (index === 0) titleElement.textContent = "Horror";
                    else if (index === 1) titleElement.textContent = "Action";
                    else if (index === 2) titleElement.textContent = "Novos Lançamentos";
                }
            });

            renderGames(allGamesData.slice(0, 8), '.game-category:first-of-type .game-list');
            renderGames(allGamesData.slice(8, 16), '.game-category:nth-of-type(2) .game-list');
            renderGames(allGamesData.slice(16, 24), '.game-category:nth-of-type(3) .game-list');

        } else {
            gameCategories.forEach((category, index) => {
                if (index > 0) {
                    category.style.display = 'none';
                }
            });

            const firstCategoryTitleLocal = document.querySelector('.game-category:first-of-type .category-title');
            if (firstCategoryTitleLocal) {
                firstCategoryTitleLocal.textContent = `Resultados para "${searchTerm}"`;
            }
            renderGames(filteredGames, '.game-category:first-of-type .game-list');
        }
    }
}


// --- Lógica do Carrossel ---
function setupCarousel() {
    if (carouselArrows.length > 0) {
        carouselArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                const gameList = arrow.closest('.carousel-container').querySelector('.game-list');
                if (gameList && gameList.querySelector('.game-card')) {
                    const cardWidth = gameList.querySelector('.game-card').offsetWidth;
                    const gapWidth = parseFloat(getComputedStyle(gameList).gap);
                    const scrollAmount = cardWidth + gapWidth;

                    if (arrow.classList.contains('left-arrow')) {
                        gameList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    } else {
                        gameList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                } else {
                    console.warn("Aviso: gameList ou game-card dentro do carrossel não encontrados para rolagem.");
                }
            });
        });
    } else {
        console.warn("Aviso: Setas do carrossel não encontradas para configurar. Carrossel pode não funcionar.");
    }
}

// Função para abrir o modal do trailer
window.openTrailerModal = (url) => {
    if (trailerModal && youtubePlayer) {
        trailerModal.classList.add('active');
        youtubePlayer.src = url;
        console.log("Modal aberto. URL:", url);
    } else {
        console.error("Erro: Modal de trailer ou player não encontrados para abrir. Verifique se initElements() foi chamada.");
    }
};

// Função para fechar o modal
window.closeTrailerModal = () => {
    if (trailerModal && youtubePlayer) {
        trailerModal.classList.remove('active');
        youtubePlayer.src = ''; // Para o vídeo ao fechar
        console.log("Modal fechado. Vídeo parado.");
    }
};

// --- Lógica do Modal de Trailer ---
function setupModal() {
    if (playTrailerBtn) {
        playTrailerBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            const eldenRingMainTrailer = allGamesData.find(game => game.id === 'eldenring')?.trailer;
            if (eldenRingMainTrailer) {
                window.openTrailerModal(eldenRingMainTrailer);
            } else {
                console.error("URL do trailer principal do Elden Ring não encontrada em allGamesData.");
            }
        });
    } else {
        console.error("Botão principal 'Play Trailer' não encontrado.");
    }

    if (closeButton) {
        closeButton.addEventListener('click', window.closeTrailerModal);
    } else {
        console.error("Botão de fechar modal não encontrado.");
    }

    if (trailerModal) {
        trailerModal.addEventListener('click', (event) => {
            if (event.target === trailerModal) {
                window.closeTrailerModal();
            }
        });
    } else {
        console.error("Modal trailer não encontrado.");
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && trailerModal && trailerModal.classList.contains('active')) {
            window.closeTrailerModal();
        }
    });
}

// --- Configuração dos cliques nas miniaturas dos jogos (game-card) para abrir o modal ---
function setupGameItemClickHandlers() {
    if (!trailerModal || !youtubePlayer) {
        console.error("Setup de Game Item Click Handlers falhou: Modal ou player não encontrados. Isso pode acontecer se initElements falhou.");
        return;
    }

    document.querySelectorAll('.game-card').forEach(card => {
        const oldClickHandler = card.__clickHandler;
        if (oldClickHandler) {
            card.removeEventListener('click', oldClickHandler);
        }

        const newClickHandler = (event) => {
            const trailerUrl = card.dataset.trailer;
            if (trailerUrl) {
                event.preventDefault(); // Impede a navegação se houver trailer
                window.openTrailerModal(trailerUrl);
            }
        };

        card.addEventListener('click', newClickHandler);
        card.__clickHandler = newClickHandler;
    });
}


// --- Inicialização da Aplicação ao Carregar o DOM ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado. Inicializando GameScope...");

    initElements(); // Inicializa as referências aos elementos HTML

    // Log para verificar se os elementos foram encontrados APÓS initElements
    console.log('Elementos após initElements():');
    console.log('  trailerModal:', trailerModal);
    console.log('  playTrailerBtn:', playTrailerBtn);
    console.log('  searchToggle:', searchToggle);
    console.log('  searchInput:', searchInput);
    console.log('  gameLists:', gameLists);
    console.log('  carouselArrows:', carouselArrows);

    // Garante que o modal esteja oculto ao carregar
    if (trailerModal) {
        trailerModal.classList.remove('active');
        trailerModal.style.display = 'none';
    }

    // Renderiza os jogos iniciais nos carrosséis
    renderGames(allGamesData.slice(0, 8), '.game-category:first-of-type .game-list');
    renderGames(allGamesData.slice(8, 16), '.game-category:nth-of-type(2) .game-list');
    renderGames(allGamesData.slice(16, 24), '.game-category:nth-of-type(3) .game-list');

    // Configura todas as funcionalidades
    setupSearch(); 
    setupCarousel(); 
    setupModal(); 
});