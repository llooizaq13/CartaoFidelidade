const loggedInUser = localStorage.getItem("loggedInUser ");
const userDetails = JSON.parse(localStorage.getItem("cadastros")).find(cadastro => cadastro.email === loggedInUser);

if (userDetails) {
    document.getElementById('user-name').textContent = userDetails.nome
    document.getElementById('user-email').textContent = userDetails.email
}

const userCards = JSON.parse(localStorage.getItem(loggedInUser)) || [];
const userCardsDiv = document.getElementById('user-cards');

userCards.forEach(card => {
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
