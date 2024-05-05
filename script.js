const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', addProduct);

function addProduct(event) {
    event.preventDefault();

    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');

    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    if (!productName || !productPrice || isNaN(productPrice)) {
        alert('Por favor, insira um nome e um preço válido para o produto.');
        return;
    }

    const productItem = document.createElement('li');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <span>${productName}</span>
        <span>${productPrice.toFixed(2)}</span>
        <button class="delete-btn">Excluir</button>
    `;

    productList.appendChild(productItem);

    productNameInput.value = '';
    productPriceInput.value = '';

    productItem.querySelector('.delete-btn').addEventListener('click', () => {
        productList.removeChild(productItem);
    });
}
