<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import {ref, onMounted} from 'vue'
import { fetchAllProducts } from '@/utils/productApi';
const products = ref([])
const isLoading = ref(true)
const error = ref(null)
const loadProducts = async () => {
  isLoading.value = true
  error.value = null
  try {
    const data = await fetchAllProducts()
    products.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

onMounted(()=>{
  loadProducts()
})
</script>

<template>
  <div class="product-container">
    <h1>Catalogo de Productos</h1>
    <div v-if="isLoading" class="loading">
      <p>Productos Cargando...</p>
    </div>
    <div v-else-if="error" class="error-message">
      <p>Error: {{ error }}</p>
    </div>

    <div v-else-if="products.length > 0">
      <h3>Productos Encontrados ({{ products.length }})</h3>
      <div class="products-grid">
        <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        >
        </ProductCard>
      </div>
    </div>
    <div v-else>
      <p>No se encontraron productos disponibles</p>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor general */
.product-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

/* Título */
h1 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #111;
}

/* Subtítulo */
h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
}

/* Loading y Error */
.loading,
.error-message,
.empty-message {
  text-align: center;
  font-size: 18px;
  padding: 25px;
  border-radius: 10px;
  margin-top: 20px;
  font-weight: bold;
}

.loading {
  background: #f6f6f6;
  color: #333;
  border: 1px solid #ddd;
}

.error-message {
  background: #ffe5e5;
  color: #b40000;
  border: 1px solid #ffb3b3;
}

/* GRID estilo tienda */
.products-grid {
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding-bottom: 40px;
}

/* Animación suave de carga */
.products-grid > * {
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Ajustes visuales opcionales */
.product-container p {
  color: #444;
  font-size: 16px;
}

/* Diseño tipo Amazon: cajas separadas */
.product-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  transition: 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}
</style>
