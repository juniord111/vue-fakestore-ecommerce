import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])

  // --- Cargar desde localStorage ---
  const loadFromLocalStorage = () => {
    try {
      const data = localStorage.getItem('cart')
      if (data) {
        const parsed = JSON.parse(data)

        // Validación para evitar errores
        if (Array.isArray(parsed)) {
          cartItems.value = parsed
        }
      }
    } catch (error) {
      console.error("Error leyendo localStorage:", error)
    }
  }

  // --- Guardar automáticamente ---
  watch(
    cartItems,
    (newValue) => {
      localStorage.setItem('cart', JSON.stringify(newValue))
    },
    { deep: true }
  )

  // --- Agregar producto completo ---
  const addToCart = (product) => {
    const item = cartItems.value.find(p => p.id === product.id)

    if (item) {
      item.quantity++
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
  }

  // --- Incrementar por ID ---
  const addProduct = (id) => {
    const item = cartItems.value.find(p => p.id === id)
    if (item) item.quantity++
  }

  // --- Decrementar por ID ---
  const decreaseProduct = (id) => {
    const item = cartItems.value.find(p => p.id === id)

    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        cartItems.value = cartItems.value.filter(p => p.id !== id)
      }
    }
  }

  // --- Eliminar ---
  const removeProduct = (id) => {
    cartItems.value = cartItems.value.filter(p => p.id !== id)
  }

  // --- Total del carrito ---
  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      const price = Number(item.price) || 0
      return total + price * item.quantity
    }, 0)
  })

  return {
    cartItems,
    loadFromLocalStorage,
    addToCart,
    addProduct,
    decreaseProduct,
    removeProduct,
    cartTotal
  }
})
