// Obtener los elementos del DOM
const cartItemsEl = document.querySelector('.cart-items');
const cartTotalEl = document.querySelector('#cart-total');
const emptyCartBtn = document.querySelector('#empty-cart-btn');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

// Inicializar el carrito como un objeto vacío
let cart = {};
