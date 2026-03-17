const hero = document.getElementById('hero-gallery');
const images = [
    'img/hero/foto1.jpg',
    'img/hero/foto2.jpg',
    'img/hero/foto3.jpg',
    'img/hero/foto4.jpg',
    // ...aggiungi qui i nomi di tutte le tue 10 foto
    'img/hero/foto10.jpg'
];

let currentIndex = 0;

function changeBackground() {
    // Applica la nuova immagine con l'effetto scuro (linear-gradient)
    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[currentIndex]}')`;
    
    // Passa alla foto successiva, se arriva alla fine ricomincia da 0
    currentIndex = (currentIndex + 1) % images.length;
}

// Avvia il cambio ogni 5 secondi (5000 millisecondi)
setInterval(changeBackground, 5000);

// Imposta la prima foto all'avvio
changeBackground();
