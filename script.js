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

  document.getElementById("const produtos = [
  { nome: "Arroz 5kg", preco: 20.99, codigo: "7891234567890" },
  { nome: "Feijão 1kg", preco: 7.50, codigo: "7899876543210" },
  { nome: "Leite 1L", preco: 4.30, codigo: "7894567890123" },
  { nome: "Açúcar 1kg", preco: 3.20, codigo: "7891112223334" },
  { nome: "Óleo de soja 900ml", preco: 6.75, codigo: "7892223334445" }
];

let total = 0;

function adicionarProduto() {
  const codigo = document.getElementById("codigo").value;
  const produto = produtos.find(p => p.codigo === codigo);
  const carrinho = document.getElementById("carrinho");
  const totalEl = document.getElementById("total");

  if (produto) {
    const item = document.createElement("li");
    item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    carrinho.appendChild(item);

    total += produto.preco;
    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;

    document.getElementById("codigo").value = ""; // limpa o campo
  } else {
    alert("Produto não encontrado!");
  }
}
").value = "";
}
