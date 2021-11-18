let telatotal = document.querySelector("body");
telatotal.className = 'body'
let tela = document.querySelector("main");
tela.className = 'main'
let botao = document.createElement("button");
let caixa;
let nm;
let sobrenome;
let data;
botao.className = 'botao';
botao.innerText = 'Cadastre-se'
botao.onclick = modal;
telatotal.appendChild(botao);

function voltar() {
    telatotal.removeChild(caixa);
    tela.style.opacity = '1';
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
    nm = document.createElement('input');
    nm.placeholder = 'Nome';
    nm.className = 'nome';
    sobrenome = document.createElement('input');
    sobrenome.placeholder = 'Sobrenome';
    sobrenome.className = 'nome';
    data = document.createElement('input');
    data.type = 'date'
    data.placeholder = 'Data de Nascimento';
    data.className = 'nome';
    let info = document.createElement('span');
    info.innerText = 'Ao criar uma conta, você concorda com as Condições de Uso.'
    info.className = 'info'
    let inferior = document.createElement('div');
    inferior.className = 'inferior';
    let botao1 = document.createElement('button');
    botao1.className = 'bt1';
    botao1.innerText = 'Cadastrar';
    botao1.onclick = cadastrar;
    let botao2 = document.createElement('button');
    botao2.className = 'bt1';
    botao2.innerText = 'Cancelar';
    botao2.onclick = voltar;
    caixa.appendChild(caixap);
    caixap.appendChild(nm);
    caixap.appendChild(sobrenome);
    caixap.appendChild(data);
    caixap.appendChild(info);
    caixap.appendChild(inferior);
    inferior.appendChild(botao1);
    inferior.appendChild(botao2);
    tela.style.opacity = '0.2';
}

function cadastrar() {
    let variavel = {
        a: nm.value,
        b: sobrenome.value,
        c: data.value
    }

    let lista = [];

    lista.push(variavel);

    return lista;
}