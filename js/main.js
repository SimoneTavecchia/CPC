// ESEMPIO con API di Instagram Basic Display

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
