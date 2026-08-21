// Botões de acessibilidade
document.addEventListener("DOMContentLoaded", () => {

    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btnAumentar-texto");
    const btnDiminuir = document.getElementById("btnDiminuir-texto");

    // Tamanho inicial da fonte
    let tamanhoAtualFonte = 100;

    // Função de alto contraste
    btnContraste.addEventListener("click", () => {
        document.body.classList.toggle("auto-contraste");

        // Acessibilidade para leitores de tela
        const ativo = document.body.classList.contains("auto-contraste");
        btnContraste.setAttribute("aria-pressed", ativo);
    });

    // Função para aumentar o texto
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualFonte < 150) {
            tamanhoAtualFonte += 10;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

    // Função para diminuir o texto
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualFonte > 90) {
            tamanhoAtualFonte -= 10;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

});