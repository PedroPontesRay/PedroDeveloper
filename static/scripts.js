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
        projeto_1_descricao: "Desenvolvi um jogo educativo em Unity com sistemas de menus, seleção de cores e ferramentas de pintura (pincéis, glitter, texturas). Implementei um plugin de pintura com touch/mouse, salvamento de arte (JSON) e compartilhamento. Otimizei para mobile e desktop, adicionando feedbacks visuais e sonoros. Tecnologias: C#, Unity UI, Shaders, DOTween. Foco em usabilidade infantil e criatividade.",
        projeto_2_titulo: "Toy Defense",
        projeto_2_descricao: "Como projeto de faculdade, desenvolvi um sistema completo de animação de menus no Unity, criando transições fluidas e interativas entre telas. No Maya, trabalhei na animação de personagens, explorando técnicas profissionais para alcançar movimentos expressivos e naturais. Este projeto, concluído em menos de seis meses, foi premiado como o melhor do curso, destacando-se pela qualidade técnica e aplicação criativa dos princípios de animação.",
        projeto_3_titulo: "Sokowinter",
        projeto_3_descricao: "Em apenas 2 meses, executei com sucesso o porte completo deste puzzle game no estilo Sokoban para Nintendo Switch, PS4 e Xbox One. Desenvolvi sistemas de salvamento multiplataforma, adaptei os controles incluindo funcionalidade touch exclusiva para o Switch, e implementei trophies/achievements para as plataformas da Sony e Microsoft. Aprendi e apliquei o novo sistema de input da Unity durante o processo, garantindo uma experiência de jogo consistente e otimizada em todas as plataformas, superando os desafios técnicos específicos de cada console dentro do curto prazo estabelecido.",
        projeto_4_titulo: "Astrea: Six-Sided Oracles",
        projeto_4_descricao: "Finalizei o porte para Xbox One, com foco em otimização de performance e implementação de achievements. Atualmente trabalho na versão mobile, desenvolvendo ferramentas para melhoria de performance e integrando APIs nativas do Android no processo de porting.",
        botao_ver_projeto: "Ver Projeto",
        
        // Shaders
        shaders_titulo: "SHADER",
        shaders_subtitulo: "São shaders que fiz durante meus estudos.",
        shader_1_titulo: "Shader Cloth",
        shader_1_descricao: "Shader que simula o efeito de tecido, com textura e sombreamento.",
        shader_2_titulo: "Shader Pedra e Grama",
        shader_2_descricao: "Shader que muda a posição da grama e da posição da pedra com base na posição da pedra.",
        shader_3_titulo: "Shader flipbook",
        shader_3_descricao: "Shader que faz animação de sprites usando blueprint",
        shader_4_titulo: "Shader water",
        shader_4_descricao: "Shader que faz um efeito de água em fundo de piscina.",
        shader_5_titulo: "Shader Ice",
        shader_5_descricao: "Shader que faz um efeito de gelo.",
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
        projeto_1_descricao: "Developed an educational Unity game featuring dynamic menus, color selection, and painting tools (brushes, glitter, textures). Integrated a touch/mouse painting plugin with artwork saving (JSON) and sharing. Optimized for mobile and desktop with visual/audio feedback. Tech stack: C#, Unity UI, Shaders, DOTween. Focused on child-friendly usability and creativity.",
        projeto_2_titulo: "Toy Defense",
        projeto_2_descricao: "As a college project, I developed a complete menu animation system in Unity, creating fluid and interactive screen transitions. In Maya, I worked on character animation, exploring professional techniques to achieve expressive, natural movements. Completed in under six months, this project earned recognition as the best in the course for its technical quality and creative application of animation principles.",
        projeto_3_titulo: "Sokowinter",
        projeto_3_descricao: "In just 2 months, I successfully completed the full console port of this Sokoban-style puzzle game to Nintendo Switch, PS4 and Xbox One. Developed cross-platform save systems, adapted controls including Switch-exclusive touch functionality, and implemented trophy/achievement systems for Sony and Microsoft platforms. Learned and applied Unity's new input system during the process, ensuring consistent and optimized gameplay experience across all platforms while overcoming console-specific technical challenges within the tight deadline.",
        projeto_4_titulo: "Astrea: Six-Sided Oracles",
        projeto_4_descricao: "Completed the Xbox One port with focus on performance optimization and achievements implementation. Currently working on the mobile version, developing performance improvement tools and integrating native Android APIs into the porting process.",
        botao_ver_projeto: "View Project",
        
        // Shaders
        shaders_titulo: "SHADER",
        shaders_subtitulo: "Shader I've created while learning Shader Graph",
        shader_1_titulo: "Shader Cloth",
        shader_1_descricao: "Shader that simulates cloth ilumination using the cloth simulation system in unreal engine.",
        shader_2_titulo: "Shader Stone with Grass",
        shader_2_descricao: "Shader that changes the position of the grass and the position on the stone based on stone position.",
        shader_3_titulo: "Shader Flipbook",
        shader_3_descricao: "shader that do animation of sprites using blueprint",
        shader_4_titulo: "Shader Water",
        shader_4_descricao: "Shader that simulates water animation on a pool",
        shader_5_titulo: "Shader Ice",
        shader_5_descricao: "Shader that simulates a ice cube",
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

