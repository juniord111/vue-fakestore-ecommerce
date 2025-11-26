<template>
  <div class="product-card">
    <div class="img-container">
      <img :src="product.image" alt="product" class="product-img" />
    </div>

    <h2 class="title">{{ product.title }}</h2>

    <p class="price">$ {{ product.price }}</p>

    <button class="add-btn" @click="addToCart">
      Añadir al Carrito
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: Object
})

const cart = useCartStore()

const addToCart = () => {
  cart.addToCart(props.product)
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: 0.3s ease;
  border: 1px solid #e5e5e5;
  min-height: 380px; /* Para que el botón quede siempre al fondo */
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 25px rgba(0,0,0,0.12);
}

.img-container {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-img {
  max-width: 100%;
  max-height: 160px;
  object-fit: contain;
}

.title {
  font-size: 17px;
  font-weight: 600;
  margin: 12px 0;
  color: #333;
  min-height: 48px; /* Evita que el diseño brinque */
}

.price {
  font-size: 20px;
  color: #111;
  font-weight: 700;
  margin-bottom: 15px;
}

.add-btn {
  background: #ffd814;
  border: 1px solid #fcd200;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease;
  width: 100%;
}

.add-btn:hover {
  background: #f7ca00;
}
</style>
