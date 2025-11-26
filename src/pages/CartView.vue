<template>
  <div class="cart-container">
    <h1>Carrito de Compras</h1>

    <div v-if="cart.cartItems.length === 0" class="empty">
      <p>El carrito está vacío</p>
    </div>

    <div v-else class="cart-list">

      <!-- LISTA DE PRODUCTOS -->
      <div
        v-for="item in cart.cartItems"
        :key="item.id"
        class="cart-item"
      >
        <img :src="item.image" alt="product" class="cart-img" />

        <div class="cart-info">
          <h3>{{ item.title }}</h3>
          <p>Precio: ${{ item.price }}</p>

          <div class="quantity">
            <button @click="increase(item.id)">+</button>
            <span>{{ item.quantity }}</span>
            <button @click="decrease(item.id)">-</button>
          </div>

          <button class="remove" @click="remove(item.id)">
            Eliminar
          </button>
        </div>
      </div>

      <!-- TOTAL DEL CARRITO -->
      <div class="total">
        Total: ${{ total }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

// Cargar localStorage al entrar
onMounted(() => {
  cart.loadFromLocalStorage()
})

// Funciones botones
const increase = (id) => cart.addProduct(id)
const decrease = (id) => cart.decreaseProduct(id)
const remove = (id) => cart.removeProduct(id)

// Total calculado correctamente
const total = computed(() => {
  if (!cart.cartItems.length) return 0
  return cart.cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)
})
</script>

<style scoped>
.cart-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.cart-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  border-radius: 10px;
  background: white;
}

.cart-info {
  flex: 1;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity button {
  background: #222;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.remove {
  margin-top: 10px;
  background: rgb(255, 80, 80);
  color: white;
  border: none;
  padding: 7px 12px;
  border-radius: 6px;
  cursor: pointer;
}

.total {
  margin-top: 30px;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
}
</style>
