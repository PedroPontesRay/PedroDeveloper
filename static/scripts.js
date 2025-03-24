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
function languageToggle(){
    const image = document.getElementById("language-icon");
    currentId = (currentId + 1) % languageicons.length;
    languageicons.src = languageicons[currentId];
    console.log("languageToggle");
}


const translations = {
    pt: {
        sobre_mim: "Sobre Mim"
    },
    en: {
        sobre_mim: "About me" 
    }
};

// Carrega o idioma salvo ou usa um padrão
function loadLanguage() {
    const savedLang = localStorage.getItem("language") || "pt";
    changeLanguage(savedLang);
    
    // Marca o botão do idioma atual como selecionado
    const buttons = document.querySelectorAll(".language-btn");
    buttons.forEach(btn => {
        if (btn.value === savedLang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Adiciona evento aos botões de idioma
document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        const selectedLang = this.value;
        changeLanguage(selectedLang);
        localStorage.setItem("language", selectedLang);
        loadLanguage(); // Atualiza a UI
    });
});

// Carrega o idioma salvo ou o padrão (pt)
const savedLang = localStorage.getItem("languageToggle") || "pt";
changeLanguage(savedLang);
document.getElementById("languageToggle").value = savedLang;

document.getElementById("languageToggle").addEventListener("click",languageToggle);