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

function verificar_erros(){
    let verificar_texto = texto.value.match(/[a-z_ ]/g);
    if (texto.value==''||/^[ ]+$/.test(texto.value)){
        alert('O campo de texto não pode estar vazio!');
        return false;
    }else{
        if (verificar_texto==null) {
            alert('Apenas letras minúsculas e sem acento!');
            return false;
        }else{
            if (texto.value != verificar_texto.join('')) {
                alert('Apenas letras minúsculas e sem acento!');
                return false;
            }else{
                return true;
            }
        }
        return true;
    }
}

function criptografar(){
    if(verificar_erros()){
        texto_criptografado = texto.value.split("").map(letra => criptografia[letra] || letra).join('');
        output(texto_criptografado);
        limpar_tela()
    };
}

function descriptografar(){
    if (verificar_erros()) {
        texto_descriptografado = texto.value;
        descriptografia.forEach(substituir => {texto_descriptografado = texto_descriptografado.replaceAll(substituir.chave, substituir.vogal)});
        if (texto_descriptografado == texto.value) {
            alert('O texto enviado não está criptografado.')
        }else{
            output(texto_descriptografado);
            limpar_tela();
        }
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