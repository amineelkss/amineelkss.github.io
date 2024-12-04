// Charger les événements JSON et les stocker
let events = [];

// Charger les événements depuis le fichier JSON
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
    document.getElementById('popup-message').innerHTML = `<h3>${event.title}</h3><br>${event.description}`;
  } else {
    document.getElementById('popup-message').textContent = "Aucun événement disponible.";
  }
  document.getElementById('popup').style.display = 'flex';
}

// Fermer la popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
