document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos da página
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1; // Tamanho de fonte padrão

    // Toggle para mostrar/ocultar as opções de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', () => {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        
        // Atualizar o atributo aria-expanded para acessibilidade
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Função para aumentar o tamanho da fonte
    aumentaFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Função para diminuir o tamanho da fonte
    diminuiFonteBotao.addEventListener('click', () => {
        if (tamanhoAtualFonte > 0.5) { // Prevenir que a fonte seja muito pequena
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Função para alternar o contraste
    alternaContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // Efeito de revelação das seções com ScrollReveal
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});
