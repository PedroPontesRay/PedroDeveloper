// Seleciona o botão de alternância
const themeToggle = document.getElementById('theme-toggle');

// Verifica se há uma preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else {
    // Se não houver preferência salva, define o tema escuro como padrão
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

// Configura o ícone do botão de alternância com base no tema atual
if (document.documentElement.getAttribute('data-theme') === 'dark') {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
} else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';
}

// Função para alternar entre os temas
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon" style="color: #ffffff;"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Rolagem suave para as seções
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    animateElements.forEach(element => {
        observer.observe(element);
    });
});

const languageicons = [
    "Images/Icons/Icon-Eng.svg",
    "Images/Icons/Icon-Ptbr.svg"
];
let currentId = 0;

const languageToggleButton = document.getElementById("languageToggle");

async function languageIconToggle() {
    const image = document.getElementById("language-icon");
    
    // Adiciona classe para fade-out
    image.classList.add('fade-out');
    
    // Espera a transição terminar (300ms para combinar com o CSS)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Muda a imagem
    currentId = (currentId + 1) % languageicons.length;
    image.src = languageicons[currentId];
    
    // Remove a classe para fade-in
    image.classList.remove('fade-out');
    
    // Opcional: pequena animação de "pop" quando aparece
    image.style.transform = 'scale(1.1)';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
    }, 100);
}

languageToggleButton.addEventListener("click", languageIconToggle);

const translations = {
    pt: {
        sobre_mim: "Sobre Mim"
    },
    en: {
        sobre_mim: "About me" 
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = lang;
}

// Carrega o idioma salvo ou o padrão (pt) ao iniciar
const savedLang = localStorage.getItem("language") || "pt";
changeLanguage(savedLang);

function toggleLanguage() {
    const currentLang = document.documentElement.lang || 'pt';
    const newLang = currentLang === 'pt' ? 'en' : 'pt'; // Alterna entre pt e en
    
    changeLanguage(newLang);
    
    // Opcional: salvar preferência
    localStorage.setItem('language', newLang);
    
    return newLang; // Retorna o novo idioma
}

// Modificação principal: corrige o event listener do botão
languageToggleButton.addEventListener("click", toggleLanguage);

