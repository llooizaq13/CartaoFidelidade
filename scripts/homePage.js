// Corrige o nome da chave
const loggedInUser = localStorage.getItem("loggedInUser");
const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
const userDetails = cadastros.find(cadastro => cadastro.email === loggedInUser);

// Exibe os detalhes do usuário logado
if (userDetails) {
    document.getElementById('user-name').textContent = userDetails.nome;
    document.getElementById('user-email').textContent = userDetails.email;
}

// Recupera os cartões do usuário logado
const userCards = JSON.parse(localStorage.getItem(loggedInUser)) || [];
const userCardsDiv = document.getElementById('user-cards');

// Recupera todos os dados de clientes do localStorage
const usersData = localStorage.getItem("usersData");

let clientes = [];
if (usersData) {
    const data = JSON.parse(usersData);

    // Converte objeto de {email: [clientes]} para um array com todos os clientes
    clientes = Object.values(data).flat();
}

// Agora, para cada cartão do usuário logado, procuramos clientes com o mesmo nome de cartão vinculado
userCards.forEach(card => {
    const cardName = card.name.toLowerCase(); // Nome do cartão em caixa baixa (para comparação)
    
    // Filtra clientes que possuem um cartão com o mesmo nome vinculado
    const clientesComCartao = clientes.filter(cliente =>
        cliente.linkedCards?.some(linkedCard => linkedCard.name?.toLowerCase() === cardName)
    );
    
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    // Pegando até os 3 primeiros nomes
    const firstClients = card.clients?.slice(0, 3) || [];
    const remainingClientsCount = (card.clients?.length || 0) - firstClients.length;

    const clientsHTML = firstClients.map(name => `<li>${name}</li>`).join('');

    cardDiv.innerHTML = `
        <div id="card-details">
            <h2 class="card-name">${card.name}</h2>
            <p class="card-reward">${card.reward}</p>
            <div class="stamps-count">
                ${card.stamps} ${card.stamps === 1 ? 'selo' : 'selos'}
            </div>
            <div class="clients-section">
                <h4>Clientes:</h4>
                <ul class="client-list">
                    ${clientsHTML}
                </ul>
                ${remainingClientsCount > 0 ? `<p class="extra-clients">+${remainingClientsCount} cliente(s)</p>` : ''}
            </div>
        </div>
    `;

    userCardsDiv.appendChild(cardDiv);
});
