//Botões de acessiblidade
document.addventListener("DOMContentLoaded, () =>"){


const btnContraste = document.getElementByid("btn-contraste");
cont btnAumentar = document.getElementByid("btnAumentar-texto")
cont btnDiminuir = document.getElementByid("btnDiminuir-texto")

//aumenta a fonte 

let tamanhoAtualFonte = 100;

/função alto contraste

btnContraste.addventListener("click", () =>{
    
document.body.classList.toogle("auto-contraste");

//acessibilidde para leitores de tela

const ativo = document.body.classList.contains("auto-contraste");
btnContraste.setAtribute("aria-pressed", ativo);

)



}")