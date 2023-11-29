
const products = [
  { name: 'Товар 1', image: 'images/Doc1.jpg', price: 1000 },
  { name: 'Товар 2', image: 'images/Doc2.jpg', price: 1500 },
  { name: 'Товар 3', image: 'images/shrek.jpg', price: 1200 },
  { name: 'Товар 4', image: 'images/shrek.jpg', price: 100 },
  { name: 'Товар 5', image: 'images/favicon.png', price: 150 },
  { name: 'Товар 6', image: 'images/favicon.png', price: 120 },
];

const container = document.getElementById('product-container');
const sortSelect = document.getElementById('sortSelect');


function renderProducts(productList) {
  container.innerHTML = '';
  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.classList.add("card-product-img");
    image.src = product.image;
    image.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    productPrice.classList.add("p-product-price");
    productPrice.textContent = `Цена: ${product.price}`;

    const addBtn = document.createElement('i');
    addBtn.classList.add("fa-solid", "fa-cart-plus")

    card.appendChild(image);
    card.appendChild(productName);
    card.appendChild(productPrice);
    card.appendChild(addBtn);

    container.appendChild(card);
  });
}

function sortProducts() {
  const order = sortSelect.value;
  let sortedProducts;
  if (order === 'asc') {
    sortedProducts = [...products].sort((a, b) => a.price - b.price);
  } else if (order === 'desc') {
    sortedProducts = [...products].sort((a, b) => b.price - a.price);
  } else {
    sortedProducts = [...products].sort((a, b) => a.price - b.price);
  }
  renderProducts(sortedProducts);
}

// Применение сортировки сразу при выборе
sortSelect.addEventListener('change', sortProducts);

renderProducts(products);



//////////////////////////////// Add to Cart ////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    // Поиск элементов на странице
    const cartContainer = document.querySelector('.cart-cont');
    const totalElement = document.querySelector('.total-price');
    const buyButton = document.querySelector('.btn-buy');
    const closeCartButton = document.querySelector('#close-cart');
    const productContainer = document.querySelector('#product-container');
    const clearCartButton = document.querySelector('#clear-cart');
  
    //Cart initialization
    const cart = [];
  
    //Adding to cart
    function addToCart(product) {
        const existingProduct = cart.find(item => item.name === product.name);
      
        if (existingProduct) {
          //Already present in the cart
          alert('Already in Cart.')
        } else {
          product.quantity = 1;
          cart.push(product);
        }
      
        updateCart();
      }

      function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }


  
    //Update-display cart
    function updateCart() {
        cartContainer.innerHTML = ''; //clear cart
    
        //For-each cart and display all of 'em
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-box');
    
            //HTML for cart
            const itemHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-img" height="100px" width="100px">
            <div class="detail-box">
                <div class="cart-product-title">${product.name}</div>
                <div class="cart-price">${product.price}</div>
                <input type="number" value="1" class="quantity">
            </div>
            <i class="fa-regular fa-trash-can cart-remove"></i>
            `;
    
            cartItem.innerHTML = itemHTML;
            cartContainer.appendChild(cartItem);
        });
  

        const quantityInputs = document.querySelectorAll('.quantity');
        quantityInputs.forEach((input, index) => {
          input.addEventListener('input', function () { 
            const newQuantity = parseInt(this.value, 10);

            if(newQuantity<1){this.value = 1;}
      
            //Quantity update
            cart[index].quantity = parseInt(this.value, 10);
            updateTotal(); //Update total after quantity change
          });
        });
      
        //Listener for Remove buttons
        const removeButtons = document.querySelectorAll('.cart-remove');
        removeButtons.forEach((button, index) => {
          button.addEventListener('click', function () {
            removeFromCart(index);
          });
        });

        //Clear button listener
        clearCartButton.addEventListener('click', function () {
        if (cart.length > 0) {
            if (confirm('Are you sure you want to clear cart?')) {
            cart.length = 0;
            updateCart();
        }
        } 
  });
      
        // Обновление общей стоимости в корзине
        updateTotal();
    }   
      
    // Обновленная функция обновления общей стоимости
    function updateTotal() {
        const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
        totalElement.textContent = total;
    }

    buyButton.addEventListener('click', function () {
   
      alert('Thank you for your purchase!');
      cart.length = 0;
      updateCart();
    });
  

    closeCartButton.addEventListener('click', function () {
      alert('Cart closed!');
    });


 
   
    //HTML for a product inside the cart
    function renderProducts() {
      productContainer.innerHTML = '';
  
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const cardHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.price}</p>
          <i class="fa-solid fa-cart-plus" data-title="${product.name}" data-price="${product.price}"></i>
        `;
  
        card.innerHTML = cardHTML;
        productContainer.appendChild(card);
      });
    }
  
    // "Add to Cart"
    productContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('fa-cart-plus')) {
          const title = event.target.dataset.title; // Change this line
          const price = parseInt(event.target.dataset.price, 10);
      
          console.log('Title:', title);
          console.log('Price:', price);
      
          const image = products.find(product => product.name === title).image;
      
          const product = { name: title, price, image };
          addToCart(product);
        }
      });

    renderProducts();
  });