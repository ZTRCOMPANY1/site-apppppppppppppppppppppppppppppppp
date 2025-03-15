document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

const atualizacoes = {
    "ztr-studio": {
        titulo: "📱 Novo Aplicativo ZTR Company",
        descricao: "O novo aplicativo da ZTR Company traz mais recursos, melhor desempenho e uma interface renovada!",
        imagens: ["img/atua.png", "app2.png"],
        link: "ABAS/atualizacoes/3.novo studio da ztr company/ztrstudio.html" // Redirecionamento
    },

    "ztr-app": {
        titulo: "📱 Novo Aplicativo ZTR Company",
        descricao: "O novo aplicativo da ZTR Company traz mais recursos, melhor desempenho e uma interface renovada!",
        imagens: ["app1.png", "app2.png"],
        link: "ABAS/atualizacoes/2.novo aplicativo para mobile/mobile.html" // Redirecionamento
    },
    "parkour-update": {
        titulo: "🎮 Atualização Parkour Space 2.1",
        descricao: "A versão 2.1 traz novas fases, gráficos aprimorados e uma jogabilidade mais fluida!",
        imagens: ["parkour1.png", "parkour2.png"],
        link: "ABAS/atualizacoes/1.atualizacao no jogo parkour/atualizacaops.html" // Redirecionamento
    }
};

function abrirAtualizacao(id) {
    const conteudo = atualizacoes[id];
    if (conteudo) {
        window.location.href = conteudo.link; // Redireciona para o link correspondente
    }
}

function fecharAtualizacao() {
    document.getElementById("lista-atualizacoes").classList.remove("hidden");
    document.getElementById("detalhes-atualizacao").classList.add("hidden");
}

// Abrir o menu lateral
function openMenu() {
    document.getElementById("menu").classList.add("open");
    document.getElementById("overlay").classList.add("active");
}

// Fechar o menu lateral
function closeMenu() {
    document.getElementById("menu").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");
}


const slider = document.querySelector(".banner-slide");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade do arraste
    slider.scrollLeft = scrollLeft - walk;
});
