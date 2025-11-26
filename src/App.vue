<template>
  <nav class="navbar">
    <div class="logo">🛍️ MiTienda</div>

    <div class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Nosotros</router-link>
      <router-link to="/products">Productos</router-link>
      <router-link to="/login">Login</router-link>

      <!-- 🛒 Carrito -->
      <router-link to="/cart" class="cart-link">
        🛒 Carrito
        <span v-if="cart.totalItems > 0" class="badge">{{ cart.totalItems }}</span>
      </router-link>
    </div>
  </nav>

  <main class="main-container">
    <router-view></router-view>
  </main>
</template>

<script setup>
import { useCartStore } from './stores/cart'
const cart = useCartStore()
</script>

<style scoped>
/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 22px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  font-size: 17px;
  color: #444;
  transition: 0.3s ease;
  padding: 6px 10px;
  border-radius: 6px;
}

.nav-links a:hover {
  background: #f0f0f0;
  color: #111;
}

/* Carrito */
.cart-link {
  position: relative;
  font-weight: bold;
}

.badge {
  background: rgb(255, 54, 54);
  color: white;
  padding: 2px 7px;
  border-radius: 50%;
  font-size: 13px;
  margin-left: 6px;
}

/* MAIN CONTENT */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px;
  animation: fadeIn 0.4s ease-in-out;
}

/* ANIMACIÓN SUAVE */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
