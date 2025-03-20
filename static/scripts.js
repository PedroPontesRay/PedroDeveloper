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