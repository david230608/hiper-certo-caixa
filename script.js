const produtos = {
  "7896011102856": { descricao: "BISC CARTOON FLOCOS 140G", preco: 1.59 },
  "7896085075575": { descricao: "BIS ZABET MOUSSE LIMAO 145G", preco: 1.89 },
  "7896011127071": { descricao: "REFRESCO TRINK 30G UVA", preco: 0.85 },
  // adicione mais conforme necessário
};

let contador = 1;
let subtotal = 0;

function adicionarProduto() {
  const codigo = document.getElementById('codigoBarras').value;
  const produto = produtos[codigo];

  if (produto) {
    const tabela = document.getElementById('tabelaProdutos');
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${contador++}</td>
      <td>${codigo}</td>
      <td>${produto.descricao}</td>
      <td>1</td>
      <td>${produto.preco.toFixed(2)}</td>
      <td>${produto.preco.toFixed(2)}</td>
    `;

    tabela.appendChild(tr);
    subtotal += produto.preco;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2).replace('.', ',');
    calcularTroco();
  } else {
    alert('Produto não encontrado!');
  }

  document.getElementById('codigoBarras').value = '';
}

function calcularTroco() {
  const totalRecebido = parseFloat(document.getElementById('totalRecebido').value);
  const troco = totalRecebido - subtotal;
  document.getElementById('troco').innerText = troco >= 0 ? troco.toFixed(2).replace('.', ',') : '0,00';
}
