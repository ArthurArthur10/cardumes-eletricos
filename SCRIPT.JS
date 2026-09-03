function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

let currentFontSize = 16;
function increaseFontSize() {
    currentFontSize += 2;
    if (currentFontSize > 24) currentFontSize = 16;
    document.documentElement.style.setProperty('--base-font-size', currentFontSize + 'px');
}

function toggleLanguages() {
    const container = document.getElementById('langContainer');
    container.classList.toggle('active');
}

const translations = {
    pt: {
        title: "Bem-vindo à Cardumes Elétricos",
        sub: "Liderada pela empresária Cleusa das Dores",
        aboutTitle: "Inovação e Sustentabilidade",
        aboutText: "A Cardumes Elétricos traz o futuro da mobilidade sustentável para você. Sob a direção de Cleusa das Dores, oferecemos os veículos elétricos mais eficientes e modernos do mercado."
    },
    en: {
        title: "Welcome to Cardumes Elétricos",
        sub: "Led by entrepreneur Cleusa das Dores",
        aboutTitle: "Innovation and Sustainability",
        aboutText: "Cardumes Elétricos brings the future of sustainable mobility to you. Under the leadership of Cleusa das Dores, we offer the most efficient and modern electric vehicles on the market."
    },
    es: {
        title: "Bienvenido a Cardumes Elétricos",
        sub: "Liderada por la empresaria Cleusa das Dores",
        aboutTitle: "Innovación y Sostenibilidad",
        aboutText: "Cardumes Elétricos le trae el futuro de la movilidad sostenible. Bajo la dirección de Cleusa das Dores, ofrecemos los vehículos eléctricos más eficientes y modernos del mercado."
    }
};

function translateSite(lang) {
    document.getElementById('welcome-title').innerText = translations[lang].title;
    document.getElementById('welcome-sub').innerText = translations[lang].sub;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-text').innerText = translations[lang].aboutText;
}
