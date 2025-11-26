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
.products-container {
  padding: 20px;
}

.loading {
  font-size: 18px;
  font-weight: bold;
}

.error-message {
  color: red;
  font-weight: bold;
}

.products-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
