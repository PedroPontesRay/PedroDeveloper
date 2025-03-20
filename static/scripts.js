// Você pode adicionar interações JavaScript aqui, se necessário.
// Por exemplo, rolagem suave para as seções.

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Seleciona o botão de alternância
const themeToggle = document.getElementById('theme-toggle');

// Verifica se há uma preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
    }
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

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe animate-on-scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    // Configura o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe visible
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, {
        threshold: 0.5 // Define que 50% do elemento deve estar visível para acionar a animação
    });

    // Observa cada elemento com a classe animate-on-scroll
    animateElements.forEach(element => {
        observer.observe(element);
    });
});