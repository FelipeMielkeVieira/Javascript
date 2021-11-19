let telatotal = document.querySelector("body");
telatotal.className = 'body'
let tela = document.querySelector("main");
tela.className = 'main'
let botao = document.createElement("button");
let caixa;

let nome = document.createElement('input');
nome.placeholder = 'Nome';
nome.className = 'nome';

let sobrenome = document.createElement('input');
sobrenome.placeholder = 'Sobrenome';
sobrenome.className = 'nome';

let data = document.createElement('input');
data.type = 'date'
data.placeholder = 'Data de Nascimento';
data.className = 'nome';

let botao1 = document.createElement('button');
botao1.className = 'bt1';
botao1.innerText = 'Cadastrar';
botao1.onclick = cadastrar;

let botao2 = document.createElement('button');
botao2.className = 'bt1';
botao2.innerText = 'Cancelar';
botao2.onclick = voltar;

let lista = [];

let mensagem = document.createElement("div");

botao.className = 'botao';
botao.innerText = 'Cadastre-se'
botao.onclick = modal;
telatotal.appendChild(botao);

function alert(a) {

    if(a == 1) {

        mensagem.className = 'mensagem';
        mensagem.style.borderColor = 'rgb(141, 15, 15)'
        mensagem.style.backgroundColor = 'red';
        mensagem.innerText = 'Preencha todos os campos!';
        telatotal.appendChild(mensagem);

    } else {

        mensagem.className = 'mensagem';
        mensagem.style.borderColor = 'green';
        mensagem.style.backgroundColor = 'rgb(20, 161, 20)';
        mensagem.innerText = 'Cadastro realizado com sucesso!';
        telatotal.appendChild(mensagem);
        telatotal.removeChild(caixa);
        nome.value = '';
        sobrenome.value = '';
        data.value = '';
        tela.style.opacity = '1';
        tabela();

    }

    setTimeout(tirarmensagem, 3500);

}

let tabeladiv = document.createElement("div");
tabeladiv.className = 'tabela';

let contagem = 0;

function tabela(){

    if(contagem == 0) {
        linhainicial();
    }

    let linha = document.createElement("div");
    linha.className = 'linha';
    
    let dado1 = document.createElement("div");
    dado1.className = 'dado';
    
    let dado2 = document.createElement("div");
    dado2.className = 'dado';
    
    let dado3 = document.createElement("div");
    dado3.className = 'dado';

    tabeladiv.appendChild(linha);

    let objeto = lista[contagem];

    dado1.innerText = objeto.a;
    linha.appendChild(dado1);
    
    dado2.innerText = objeto.b;
    linha.appendChild(dado2);

    dado3.innerText = objeto.c;
    linha.appendChild(dado3);

    contagem++;
}

function linhainicial() {

    let linha = document.createElement("div");
    linha.className = 'linha';
    
    let dado1 = document.createElement("div");
    dado1.className = 'dado';
    dado1.innerText = 'Nome:'
    
    let dado2 = document.createElement("div");
    dado2.className = 'dado';
    dado2.innerText = 'Sobrenome:'
    
    let dado3 = document.createElement("div");
    dado3.className = 'dado';
    dado3.innerText = 'Data de Nascimento:'

    linha.appendChild(dado1);
    linha.appendChild(dado2);
    linha.appendChild(dado3);

    tabeladiv.appendChild(linha);

}

telatotal.appendChild(tabeladiv);

function tirarmensagem() {
    telatotal.removeChild(mensagem);
}

function voltar() {
    telatotal.removeChild(caixa);
    tela.style.opacity = '1';
    nome.value = '';
    sobrenome.value = '';
    data.value = '';
}

function modal() {
    caixa = document.createElement("div");
    caixa.className = 'caixa'
    telatotal.appendChild(caixa);
    let caixap = document.createElement("div");
    caixap.className = 'caixamenor';
    let titulo = document.createElement("span");
    titulo.innerText = 'Cadastre-se';
    titulo.className = 'tit';
    caixa.appendChild(titulo);
    let info = document.createElement('span');
    info.innerText = 'Ao criar uma conta, você concorda com as Condições de Uso.'
    info.className = 'info'
    let inferior = document.createElement('div');
    inferior.className = 'inferior';
    caixa.appendChild(caixap);
    caixap.appendChild(nome);
    caixap.appendChild(sobrenome);
    caixap.appendChild(data);
    caixap.appendChild(info);
    caixap.appendChild(inferior);
    inferior.appendChild(botao1);
    inferior.appendChild(botao2);
    tela.style.opacity = '0.2';
}

function cadastrar() {

    let nome2 = nome.value;
    let sobre = sobrenome.value;
    let dat = data.value;

    if(nome2 != '' && sobre != '' && dat != '') {

        let variavel = {
            a: nome2,
            b: sobre,
            c: dat
        }
    
        lista.push(variavel);
    
        console.log(variavel);
        console.log(lista);

        alert(2);

    } else {

        alert(1);

    }

}