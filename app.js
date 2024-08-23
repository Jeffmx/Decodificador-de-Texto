let texto = document.getElementById('texto-input');
let texto_criptografado;
let texto_descriptografado;
let criptografia ={
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"};
let descriptografia =[
    {chave: "ai",    vogal:"a"},
    {chave: "enter", vogal:"e"},
    {chave: "imes",  vogal :"i"},
    {chave: "ober",  vogal :"o"},
    {chave: "ufat",  vogal :"u"}];

function limpar_tela(){
    document.getElementById('texto-input').value='';
}

function reiniciar(){
    document.getElementById("no-output-text").style.display ="";
    document.getElementById("output-text").style.display ="none";
}

function criptografar(){
    if (texto.value != '') {
        texto_criptografado = texto.value.split("").map(letra => criptografia[letra] || letra).join('');
        output(texto_criptografado);
        limpar_tela()
    }
}

function descriptografar(){
    if (texto.value != '') {
        texto_descriptografado = texto.value;
        descriptografia.forEach(substituir => {texto_descriptografado = texto_descriptografado.replaceAll(substituir.chave, substituir.vogal)});
        output(texto_descriptografado);
        limpar_tela();
    }
}

function output(resultado){
    document.getElementById("no-output-text").style.display ="none";
    document.getElementById("output-text").style.display ="";
    document.getElementById("text-output").textContent = resultado;
}

function copiar(){
    const texto_copiar = document.getElementById("text-output").textContent;
    navigator.clipboard.writeText(texto_copiar)
    .then(()=>{
        // alert('texto copiado para área de transferência');
        var botao = document.getElementById("botao-copiar");
        botao.classList.add("show-tooltip");
        botao.addEventListener("mouseleave",function() {
            botao.classList.remove("show-tooltip");
            reiniciar();
        })
    });
}

document.getElementById("output-text").style.display ="none";