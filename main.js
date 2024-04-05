const form = document.getElementById('formulario');
let linhas = '';
const quantidadecontatos = document.getElementById('resultadoContatos');
const somacontatos = [];


form.addEventListener('submit', function(e) {

    e.preventDefault();

    adicionalinha();
    atualizatabela();
    totalcontatos();
}
) 

function adicionalinha() {

    const inputnome = document.getElementById('nomeContato');
    const inputnumero = document.getElementById('numeroContato');

    let linha = `<tr>`;
    linha = linha + `<td>${inputnome.value}</td>`;
    linha += `<td>${inputnumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    somacontatos.push(inputnome.value);

    inputnome.value = '';
    inputnumero.value = '';
    
}

function atualizatabela() {

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function totalcontatos() {

    quantidadecontatos.textContent = `${somacontatos.length}`;
}