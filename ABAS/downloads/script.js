document.addEventListener("DOMContentLoaded", () => {
    fetch("apps.json")
        .then(response => response.json())
        .then(data => {
            const appList = document.getElementById("app-list");
            data.apps.forEach(app => {
                let appCard = document.createElement("div");
                appCard.classList.add("app-card");
                appCard.innerHTML = `<h2>${app.name}</h2><p>${app.description}</p>`;
                appCard.onclick = () => window.location.href = `app.html?id=${app.id}`;
                appList.appendChild(appCard);
            });
        });

    if (window.location.pathname.includes("app.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const appId = urlParams.get("id");

        fetch("apps.json")
            .then(response => response.json())
            .then(data => {
                const app = data.apps.find(a => a.id === appId);
                if (app) {
                    document.getElementById("app-title").textContent = app.name;
                    document.getElementById("app-name").textContent = app.name;
                    document.getElementById("app-description").textContent = app.description;
                    document.getElementById("download-button").href = app.download;
                    
                    const imageContainer = document.getElementById("app-images");
                    app.images.forEach(imgSrc => {
                        let img = document.createElement("img");
                        img.src = imgSrc;
                        imageContainer.appendChild(img);
                    });
                }
            });
    }
});
