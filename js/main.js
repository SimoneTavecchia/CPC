// Sostituisci questa stringa con il tuo token reale ottenuto da Facebook Developers
const token = "IL_TUO_ACCESS_TOKEN_QUI"; 
const limit = 8;

const container = document.getElementById("insta-feed");

if (container) {
    fetch(`https://graph.instagram.com{token}`)
        .then(res => res.json())
        .then(data => {
            // Puliamo il contenitore (opzionale)
            container.innerHTML = '';

            // Filtriamo solo immagini (IMAGE) o caroselli (CAROUSEL_ALBUM)
            const posts = data.data
                .filter(post => post.media_type !== 'VIDEO') 
                .slice(0, limit);

            posts.forEach(post => {
                const img = document.createElement("img");
                img.src = post.media_url;
                img.alt = "Instagram Post Cupra Passion Club";
                // Rende l'immagine cliccabile verso il post originale
                img.onclick = () => window.open(post.permalink, "_blank");
                container.appendChild(img);
            });
        })
        .catch(err => {
            console.error("Errore caricamento Instagram:", err);
            container.innerHTML = "<p style='color: #666;'>Seguici su Instagram @cuprapassionclub</p>";
        });
}
// ESEMPIO con API di Instagram Basic Display
/*
const token = "INSERISCI_IL_TUO_ACCESS_TOKEN";
const limit = 8;

fetch(`https://graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=${token}`)
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("insta-feed");

        data.data.slice(0, limit).forEach(post => {
            const img = document.createElement("img");
            img.src = post.media_url;
            img.onclick = () => window.open(post.permalink, "_blank");
            container.appendChild(img);
        });
    });
*/
