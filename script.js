// Botão "Saiba Mais" leva à seção Sustentabilidade
document.getElementById('learnMore').addEventListener('click', () => {
    document.getElementById('sustentabilidade').scrollIntoView({ behavior: 'smooth' });
});

// Validação simples do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        document.getElementById('formMessage').textContent = "Mensagem enviada com sucesso! Obrigado!";
        this.reset();
    } else {
        document.getElementById('formMessage').textContent = "Por favor, preencha todos os campos.";
    }
});
