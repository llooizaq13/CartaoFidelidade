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
    cardDiv.innerHTML = `
      <div id = "card-details">
        <h2 class="card-name">${card.name}</h2>
        <p class="card-name">${card.reward}</p>
        <div class="stamps-grid">
             ${Array.from({ length: card.stamps }, (_, i) => `<div class="stamp"></div>`).join('')}
        </div>
    </div>
    `
    userCardsDiv.appendChild(cardDiv);
});