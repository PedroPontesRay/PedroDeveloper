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
        // Header
        nome_titulo: "Pedro Pontes",
        menu_inicio: "Início",
        menu_sobre: "Sobre Mim",
        menu_habilidades: "Habilidades",
        menu_projetos: "Projetos",
        menu_shaders: "Shaders",
        menu_contato: "Contato",
        
        // Introdução
        introducao_titulo: "OLÁ, EU SOU",
        nome_destaque: "PEDRO PONTES",
        card_game_dev: "Game Dev.",
        card_tech_artist: "Tech Artist",
        
        // Sobre Mim
        sobre_mim_titulo: "Sobre Mim",
        sobre_mim_texto: "Sou um Tech Artist especializado em desenvolvimento de jogos, com foco em criação de shaders, efeitos visuais e integração de arte técnica em engines como Unity e Unreal. Combinando arte e programação, busco elevar a experiência visual dos jogos.",
        
        // Contato
        contato_email: "E-mail",
        contato_artstation: "ArtStation",
        contato_linkedin: "LinkedIn",
        contato_behance: "Behance",
        contato_github: "GitHub",
        contato_telefone: "(+55) 11 99752-6474",
        
        // Habilidades
        hard_skills_titulo: "Hard Skills",
        soft_skills_titulo: "Soft Skills",
        soft_skill_1: "Gestão de Tempo",
        soft_skill_2: "Adaptabilidade",
        soft_skill_3: "Comunicação Eficaz",
        soft_skill_4: "Trabalho em Equipe",
        soft_skill_5: "Resolução de Problemas",
        
        // Projetos
        projetos_titulo: "PROJETOS",
        projetos_subtitulo: "Lorem ipsum dolor sit amet consectetur.",
        projeto_1_titulo: "Kids Coloring Book and Drawing",
        projeto_1_descricao: "Um jogo de colorir que fiz como freelancer em 2024.",
        projeto_2_titulo: "Toy Defense",
        projeto_2_descricao: "Jogo Tower Defense feito inteiramente na Unity.",
        botao_ver_projeto: "Ver Projeto",
        
        // Shaders
        shaders_titulo: "SHADER",
        shaders_subtitulo: "Lorem ipsum dolor sit amet consectetur.",
        shader_1_titulo: "Nome do Shader 1",
        shader_1_descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto, voluptatum sit cupiditate quod omnis eveniet repellat laboriosam a quis?.",
        shader_2_titulo: "Nome do Shader 2",
        shader_2_descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto, voluptatum sit cupiditate quod omnis eveniet repellat laboriosam a quis?.",
        shader_3_titulo: "Nome do Shader 3",
        shader_3_descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto, voluptatum sit cupiditate quod omnis eveniet repellat laboriosam a quis?.",
        botao_ver_github: "Ver no GitHub",
        
        // Rodapé
        rodape_titulo: "VAMOS TRABALHAR EM",
        rodape_subtitulo: "um projeto juntos!",
        botao_linkedin: "LinkedIn",
        botao_github: "GitHub",
        botao_artstation: "ArtStation",
        botao_behance: "Behance",
        rodape_direitos: "© 2025 Pedro Henrique. Todos os direitos reservados.",
        
        // Título da página
        titulo_pagina: "Pedro Pontes - Game Developer Tech Artist"
    },
    en: {
        // Header
        nome_titulo: "Pedro Pontes",
        menu_inicio: "Home",
        menu_sobre: "About Me",
        menu_habilidades: "Skills",
        menu_projetos: "Projects",
        menu_shaders: "Shaders",
        menu_contato: "Contact",
        
        // Introdução
        introducao_titulo: "HI, I'M",
        nome_destaque: "PEDRO PONTES",
        card_game_dev: "Game Dev.",
        card_tech_artist: "Tech Artist",
        
        // Sobre Mim
        sobre_mim_titulo: "About Me",
        sobre_mim_texto: "I'm a Tech Artist specialized in game development, focused on shader creation, visual effects and technical art integration in engines like Unity and Unreal. Combining art and programming, I aim to elevate the visual experience of games.",
        
        // Contato
        contato_email: "Email",
        contato_artstation: "ArtStation",
        contato_linkedin: "LinkedIn",
        contato_behance: "Behance",
        contato_github: "GitHub",
        contato_telefone: "(+55) 11 99752-6474",
        
        // Habilidades
        hard_skills_titulo: "Hard Skills",
        soft_skills_titulo: "Soft Skills",
        soft_skill_1: "Time Management",
        soft_skill_2: "Adaptability",
        soft_skill_3: "Effective Communication",
        soft_skill_4: "Teamwork",
        soft_skill_5: "Problem Solving",
        
        // Projetos
        projetos_titulo: "PROJECTS",
        projetos_subtitulo: "Lorem ipsum dolor sit amet consectetur.",
        projeto_1_titulo: "Kids Coloring Book and Drawing",
        projeto_1_descricao: "A coloring game I made as a freelancer in 2024.",
        projeto_2_titulo: "Toy Defense",
        projeto_2_descricao: "Tower Defense game made entirely in Unity.",
        botao_ver_projeto: "View Project",
        
        // Shaders
        shaders_titulo: "SHADER",
        shaders_subtitulo: "Lorem ipsum dolor sit amet consectetur.",
        shader_1_titulo: "Shader Name 1",
        shader_1_descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto, voluptatum sit cupiditate quod omnis eveniet repellat laboriosam a quis?.",
        shader_2_titulo: "Shader Name 2",
        shader_2_descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto, voluptatum sit cupiditate quod omnis eveniet repellat laboriosam a quis?.",
        shader_3_titulo: "Shader Name 3",
        shader_3_descricao: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti architecto, voluptatum sit cupiditate quod omnis eveniet repellat laboriosam a quis?.",
        botao_ver_github: "View on GitHub",
        
        // Rodapé
        rodape_titulo: "LET'S WORK ON",
        rodape_subtitulo: "a project together!",
        botao_linkedin: "LinkedIn",
        botao_github: "GitHub",
        botao_artstation: "ArtStation",
        botao_behance: "Behance",
        rodape_direitos: "© 2025 Pedro Henrique. All rights reserved.",
        
        // Título da página
        titulo_pagina: "Pedro Pontes - Game Developer Tech Artist"
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

