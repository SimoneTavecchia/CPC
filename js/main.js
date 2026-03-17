const hero = document.getElementById('hero-gallery');
const images = [
    '..img/hero/IMG-1.jpg',
    '..img/hero/IMG-2.jpg',
    '..img/hero/IMG-3.jpg',
    '..img/hero/IMG-4.jpg',
    '..img/hero/IMG-5.jpg',
    '..img/hero/IMG-6.jpg',
    '..img/hero/IMG-7.jpg',
    '..img/hero/IMG-8.jpg',
    '..img/hero/IMG-9.jpg',
    '..img/hero/IMG-10.jpg',
    '..img/hero/IMG-11.jpg',
    '..img/hero/IMG-12.jpg',
    // ...aggiungi qui i nomi di tutte le tue foto

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
