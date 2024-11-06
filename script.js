const apiUrl = 'https://fakestoreapi.com/products';
let products = [];
let favorites = [];

// Função para buscar produtos da API
async function fetchProducts() {
    const response = await fetch(apiUrl);
    products = await response.json();
    displayProducts(products);
}

// Função para exibir produtos na tela
function displayProducts(products) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Limpa a div antes de adicionar novos produtos

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <p>Preço: $${product.price}</p>
            <button onclick="toggleFavorite(${product.id})">
                ${favorites.includes(product.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

// Função para adicionar ou remover favoritos
function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    displayProducts(products);
    displayFavorites();
}

// Função para exibir os favoritos
function displayFavorites() {
    const favoritesDiv = document.getElementById('favorites');
    favoritesDiv.innerHTML = ''; // Limpa a div antes de adicionar novos favoritos

    if (favorites.length === 0) {
        favoritesDiv.innerHTML = '<p>Nenhum favorito adicionado.</p>';
        return;
    }

    favorites.forEach(id => {
        const product = products.find(product => product.id === id);
        if (product) {
            const favoriteDiv = document.createElement('div');
            favoriteDiv.classList.add('favorite');
            favoriteDiv.innerHTML = `
                <h3>${product.title}</h3>
                <p>Preço: $${product.price}</p>
                <button onclick="toggleFavorite(${product.id})">Remover dos Favoritos</button>
            `;
            favoritesDiv.appendChild(favoriteDiv);
        }
    });
}

// Inicializa a aplicação
fetchProducts();