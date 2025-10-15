// script.js
// Array de produtos — edite apenas este array para adicionar/remover produtos.
const produtos = [
    {
    imagem: "https://via.placeholder.com/800x533.png?text=Fone+Bluetooth",
    nome: "Fone Bluetooth Compacto - Qualidade e baixo preço",
    link: "https://shopee.com.br/exemplo-produto-1?affid=SEUIDAFILIACAO"
},
    {
    imagem: "https://via.placeholder.com/800x533.png?text=Capa+de+Celular",
    nome: "Capa resistente para celular — anticerdas",
    link: "https://shopee.com.br/exemplo-produto-2?affid=SEUIDAFILIACAO"
    },
{
    imagem: "https://via.placeholder.com/800x533.png?text=Carregador+USB",
    nome: "Carregador USB Turbo 30W",
    link: "https://shopee.com.br/exemplo-produto-3?affid=SEUIDAFILIACAO"
    }
];

// Função que cria um card HTML a partir de um objeto produto
function criarCard(produto) {
    const card = document.createElement('article');
    card.className = 'card';

    const imageWrap = document.createElement('div');
    imageWrap.className = 'image';
    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;
    imageWrap.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = produto.nome;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const btn = document.createElement('a');
    btn.className = 'btn btn-visit';
    btn.href = produto.link;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.textContent = 'Ver na Shopee';

    actions.appendChild(btn);
    content.appendChild(title);

  // opcional: nota pequena (ex: "Clique para abrir Shopee")
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = 'Abrirá no site da Shopee (link de afiliado)';
    content.appendChild(note);

    content.appendChild(actions);

    card.appendChild(imageWrap);
    card.appendChild(content);

    return card;
}

// Insere os cards no container
function popularProdutos() {
    const grid = document.getElementById('produtos-grid');
  // Limpa (caso seja chamado novamente)
grid.innerHTML = '';

produtos.forEach(produto => {
    // validações simples
    if (!produto.nome || !produto.link) return;
    // se imagem vazia, usar placeholder
    if (!produto.imagem) produto.imagem = "https://via.placeholder.com/800x533.png?text=Sem+Imagem";
    const card = criarCard(produto);
    grid.appendChild(card);
    });
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', popularProdutos);
