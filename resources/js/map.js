// Aggiungi questo codice dopo le importazioni

document.addEventListener('DOMContentLoaded', function () {
    // Coordinate centrali di Praia a Mare (Latitudine, Longitudine)
    const PRAIA_AMARE_COORDS = [39.89796, 15.80842]; 
    const ZOOM_LEVEL = 13; // Livello di zoom per l'area locale

    // 1. Inizializzazione della Mappa
    const map = L.map('mapid').setView(PRAIA_AMARE_COORDS, ZOOM_LEVEL);

    // 2. Aggiunta del Layer Mappa (Tile di OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. Definizione dei Punti di Interesse (POI) - Esempio statico
    const puntiDiInteresse = [
        {
            // https://www.openstreetmap.org/#map=19/39.896784/15.779838
            lat: 39.896784, 
            lng: 15.779838, 
            name: "Municipio", 
            popup: "Municipio di praia a mare Scopri di più",
            url: "https://www.openstreetmap.org/#map=19/39.896784/15.779838"
            
        },
        { lat: 39.9190, lng: 15.7865, name: "La Tua Sede Principale", popup: "Questo è il tuo punto di interesse 1" },
        { lat: 39.9250, lng: 15.7700, name: "Ristorante Pizzeria", popup: "Ottima pizza!" },
        { lat: 39.9300, lng: 15.7950, name: "Grotta dell'Isola", popup: "Da visitare!" }
    ];

    // 4. Aggiunta dei Marker
    puntiDiInteresse.forEach(poi => {
        L.marker([poi.lat, poi.lng])
            .addTo(map)
            .bindPopup(`<b>${poi.name}</b><br>${poi.popup}<br><a href="${poi.url}">Scopri di più</a>`);
    });
});