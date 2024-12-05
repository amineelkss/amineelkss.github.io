// Charger les événements depuis le fichier JSON
let events = [];

fetch('events.json')
  .then(response => response.json())
  .then(data => {
    events = data.events;
  })
  .catch(error => {
    console.error('Erreur lors du chargement des événements :', error);
  });

// Afficher la popup avec un événement aléatoire
function showPopup() {
  if (events.length > 0) {
    const randomIndex = Math.floor(Math.random() * events.length);
    const event = events[randomIndex];

    // Contenu dynamique de la popup
    const popupMessage = document.getElementById('popup-message');
    popupMessage.innerHTML = `
      <h2>${event.title}</h2>
      <p>${event.description}</p>
      <p><strong>${event.fun_fact}</strong></p>
      <div class="quiz-options">
        <span class="option">${event.options[0]}</span>
        <span class="option correct">${event.options[1]}</span>
      </div>
    `;
  } else {
    document.getElementById('popup-message').textContent = "Aucun événement disponible.";
  }

  document.getElementById('popup').style.display = 'flex';
}

// Fermer la popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
