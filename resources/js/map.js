// Aggiungi questo codice dopo le importazioni (presumendo che tu importi L da qualche parte in app.js)

// --- 1. CORREZIONE ICONE MARKER (CRUCIALE PER VITE/NGROK) ---
// Importa le immagini PNG di Leaflet affinché Vite le gestisca correttamente.
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// Definisci l'icona di default usando i percorsi gestiti da Vite
let DefaultIcon = L.icon({
    iconUrl: icon,
    iconRetinaUrl: iconRetina,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

// Imposta l'icona di default per tutti i marker
L.Marker.prototype.options.icon = DefaultIcon;


// --- 2. INIZIALIZZAZIONE CON LOGICA DI SICUREZZA ---

document.addEventListener('DOMContentLoaded', function () {
    // 🎯 Nota: la verifica dell'esistenza di #mapid è sempre una buona pratica
    const mapContainer = document.getElementById('mapid');
    if (!mapContainer) {
        console.error("Il contenitore della mappa (#mapid) non è stato trovato nel DOM.");
        return;
    }

    // Coordinate centrali di Praia a Mare (Latitudine, Longitudine)
    const PRAIA_AMARE_COORDS = [39.89796, 15.80842]; 
    const ZOOM_LEVEL = 13; // Livello di zoom per l'area locale

    // Avvolgiamo l'inizializzazione in un piccolo ritardo per dare tempo al CSS di stabilizzarsi
    setTimeout(() => {
        // 1. Inizializzazione della Mappa
        const map = L.map('mapid').setView(PRAIA_AMARE_COORDS, ZOOM_LEVEL);

        // 2. Aggiunta del Layer Mappa (Tile di OpenStreetMap)
        // La URL HTTPS è corretta per ngrok, ma la ripetiamo per sicurezza
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // 🎯 FORZA RIDISEGNO: Questo risolve lo spazio bianco o la mappa parziale
        map.invalidateSize();

        // 3. Definizione dei Punti di Interesse (POI) - Esempio statico
        const puntiDiInteresse = [
            {
                lat: 39.896784, 
                lng: 15.779838, 
                name: "Municipio", 
                popup: "Municipio di Praia a Mare",
                url: "https://www.openstreetmap.org/#map=19/39.896784/15.779838"
            },
            { lat: 39.9190, lng: 15.7865, name: "La Tua Sede Principale", popup: "Questo è il tuo punto di interesse 1" },
            { lat: 39.9250, lng: 15.7700, name: "Ristorante Pizzeria", popup: "Ottima pizza!" },
            { lat: 39.9300, lng: 15.7950, name: "Grotta dell'Isola", popup: "Da visitare!" }
        ];

        // 4. Aggiunta dei Marker
        puntiDiInteresse.forEach(poi => {
            // Genera il link condizionale
            const linkHTML = poi.url ? `<br><a href="${poi.url}" target="_blank">Scopri di più</a>` : '';
            
            L.marker([poi.lat, poi.lng])
                .addTo(map)
                .bindPopup(`<b>${poi.name}</b><br>${poi.popup}${linkHTML}`);
        });
    }, 100); // 100ms di ritardo di sicurezza
});