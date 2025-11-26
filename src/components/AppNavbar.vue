<script setup>
import { useCartStore } from '../stores/cartStore'

const cart = useCartStore()
</script>

<template>
  <div>
    Carrito ({{ cart.totalItems }})
  </div>
</template>
