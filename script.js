const produtosCatalogo = {
  "123456": { nome: "Arroz 5kg", preco: 22.99 },
  "789012": { nome: "Feijão 1kg", preco: 6.99 },
  "345678": { nome: "Açúcar 1kg", preco: 4.49 },
  "901234": { nome: "Óleo de Soja", preco: 8.99 }
};

const carrinho = [];

function adicionarProduto() {
  const codigo = document.getElementById("codigo").value;
  const produto = produtosCatalogo[codigo];
  const carrinhoEl = document.getElementById("carrinho");
  const totalEl = document.getElementById("total");

  if (produto) {
    carrinho.push(produto);

    const li = document.createElement("li");
    li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    carrinhoEl.appendChild(li);

    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
  } else {
    alert("Produto não encontrado");
  }

  document.getElementById("codigo").value = "";
}
