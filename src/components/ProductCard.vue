<template>
  <div class="product-card">
    <img :src="product.image" alt="product" class="product-img" />

    <h2>{{ product.title }}</h2>
    <p class="price">\${{ product.price }}</p>

    <button @click="addToCart">
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
  padding: 15px;
  background: #f4f4f4;
  border-radius: 12px;
  text-align: center;
}

.product-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
</style>
