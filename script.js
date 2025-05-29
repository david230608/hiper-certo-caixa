const produtos = {
  "7896011102856": { descricao: "BISC CARTOON FLOCOS 140G", preco: 1.59 },
  "7896085075575": { descricao: "BIS ZABET MOUSSE LIMAO 145G", preco: 1.89 },
  "7896011127071": { descricao: "REFRESCO TRINK 30G UVA", preco: 0.85 }
};

let contador = 1;
let subtotal = 0;

document.getElementById('codigoBarras').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') adicionarProduto();
});

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

    document.getElementById('valorUnitario').innerText = produto.preco.toFixed(2).replace('.', ',');
    document.getElementById('totalItem').innerText = produto.preco.toFixed(2).replace('.', ',');

    subtotal += produto.preco;
    document.getElementById('subtotal').innerText = subtotal.toFixed(2).replace('.', ',');
    calcularTroco();
  } else {
    alert("Produto não encontrado!");
  }

  document.getElementById('codigoBarras').value = '';
}

function calcularTroco() {
  const totalRecebido = parseFloat(document.getElementById('totalRecebido').value);
  const troco = totalRecebido - subtotal;
  document.getElementById('troco').innerText = troco >= 0 ? troco.toFixed(2).replace('.', ',') : '0,00';
}

function finalizarCompra() {
  alert("Compra finalizada! Troco: R$ " + document.getElementById('troco').innerText);
  location.reload();
}

