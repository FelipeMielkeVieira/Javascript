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
data.pattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}";

let dataf;

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
        montarLinha(montarTabela());

    }

    setTimeout(tirarmensagem, 3500);

}

let tabelaDiv = document.createElement('div');

function montarLinha(tabela) {
    lista.forEach(function (e) {
        let linhaDado = document.createElement('tr');

        let colunanum = document.createElement('td');
        colunanum.className = 'contagem';
        let colunaNome = document.createElement('td');
        let colunaSobrenome = document.createElement('td');
        let colunaData = document.createElement('td');

        tabela.appendChild(linhaDado);

        colunanum.innerText = contagem;
        colunaNome.innerText = e.a;
        colunaSobrenome.innerText = e.b

        let data1 = e.c;
        let data2 = data1.split("-");
        let dia = data2[2];
        let mes = data2[1];
        let ano = data2[0];

        dataf = dia + "/" + mes + "/" + ano;

        colunaData.innerText = dataf;

        linhaDado.appendChild(colunanum);
        linhaDado.appendChild(colunaNome);
        linhaDado.appendChild(colunaSobrenome);
        linhaDado.appendChild(colunaData);

        contagem++;
    });

    document.querySelector('table').style.textAlign = 'center';
}

let contagem = 0;

function montarTabela() {
    let tabelaAtual = document.querySelector('table');

    if (tabelaAtual) {
        tabelaAtual.remove();
        contagem = 0;
    }

    let tabela = document.createElement('table');

    linha = document.createElement('tr');
    let colunanum = document.createElement('th');
    colunanum.className = 'contagem';
    let colunaNomeHeader = document.createElement('th')
    let colunaSobrenomeHeader = document.createElement('th')
    let colunaDataHeader = document.createElement('th')

    colunanum.innerText = '-';

    colunaNomeHeader.innerText = 'Nome';
    colunaSobrenomeHeader.innerText = 'Sobrenome'
    colunaDataHeader.innerText = 'Data'

    linha.appendChild(colunanum);
    linha.appendChild(colunaNomeHeader);
    linha.appendChild(colunaSobrenomeHeader);
    linha.appendChild(colunaDataHeader);

    telatotal.appendChild(tabela);
    tabela.appendChild(linha);

    contagem++;

    return tabela;
}

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

let tabelaatual;

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
    cont = 1;
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

        alert(2);

    } else {

        alert(1);

    }

    console.log(lista);
}