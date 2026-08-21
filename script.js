document.addEventListener("DOMContentLoaded", () => {

    // Elementos da interface
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btnAumentar-texto");
    const btnDiminuir = document.getElementById("btnDiminuir-texto");
    const btnReset = document.getElementById("btnReset-texto");

    // Configuração de fonte
    const FONTE_MINIMA = 80;
    const FONTE_MAXIMA = 150;
    const FONTE_PADRAO = 100;
    const PASSO_FONTE = 10;

    // Recupera preferências salvas no localStorage
    let tamanhoAtualFonte = parseInt(localStorage.getItem("tamanhoFonte")) || FONTE_PADRAO;
    let altoContrasteAtivo = localStorage.getItem("altoContraste") === "true";

    // Aplica as preferências ao carregar a página
    aplicarTamanhoFonte(tamanhoAtualFonte);
    if (altoContrasteAtivo) {
        ativarAltoContraste(true);
    }

    // =========================================
    // FUNÇÕES DE AÇÕES
    // =========================================

    function aplicarTamanhoFonte(tamanho) {
        document.documentElement.style.fontSize = `${tamanho}%`;
        localStorage.setItem("tamanhoFonte", tamanho);
    }

    function ativarAltoContraste(ativar) {
        document.body.classList.toggle("auto-contraste", ativar);
        btnContraste.setAttribute("aria-pressed", ativar);
        localStorage.setItem("altoContraste", ativar);
    }

    // Alternar Alto Contraste
    btnContraste.addEventListener("click", () => {
        const estadoAtual = document.body.classList.contains("auto-contraste");
        ativarAltoContraste(!estadoAtual);
    });

    // Aumentar Fonte
    btnAumentar.addEventListener("click", () => {
        if (tamanhoAtualFonte < FONTE_MAXIMA) {
            tamanhoAtualFonte += PASSO_FONTE;
            aplicarTamanhoFonte(tamanhoAtualFonte);
        }
    });

    // Diminuir Fonte
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoAtualFonte > FONTE_MINIMA) {
            tamanhoAtualFonte -= PASSO_FONTE;
            aplicarTamanhoFonte(tamanhoAtualFonte);
        }
    });

    // Resetar Fonte para 100%
    btnReset.addEventListener("click", () => {
        tamanhoAtualFonte = FONTE_PADRAO;
        aplicarTamanhoFonte(tamanhoAtualFonte);
    });

});