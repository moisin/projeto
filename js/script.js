document.addEventListener('DOMContentLoaded', () => {
    const botoesFaq = document.querySelectorAll('.botao-faq');

    botoesFaq.forEach(botao => {
        botao.addEventListener('click', () => {
            const idResposta = botao.getAttribute('aria-controls');
            const containerResposta = document.getElementById(idResposta);
            const estaExpandido = botao.getAttribute('aria-expanded') === 'true';
            
            botao.setAttribute('aria-expanded', !estaExpandido);
            containerResposta.hidden = estaExpandido;
        });
    });

    const formulario = document.getElementById('formulario-simulado');
    const caixaSucesso = document.getElementById('mensagem-sucesso');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const nomeUsuario = document.getElementById('nome').value;
        
        caixaSucesso.textContent = `Obrigado, ${nomeUsuario}! Redirecionando para o WhatsApp...`;
        caixaSucesso.hidden = false;
        
        formulario.reset();
    });
});