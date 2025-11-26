import { useCartStore } from './stores/cart'
import { watch } from 'vue'

export function persistCart() {
  const cart = useCartStore()

  watch(
    () => cart.items,
    (newValue) => {
      localStorage.setItem('cart', JSON.stringify(newValue))
    },
    { deep: true }
  )
}
