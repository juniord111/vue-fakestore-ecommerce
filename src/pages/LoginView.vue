<template>
  <div class="login-container">
    <h1>Inicia sesión para continuar</h1>

    <form @submit.prevent="login" class="login-form">

      <label>Email:</label>
      <input
        type="email"
        v-model="email"
        placeholder="Ingresa tu correo"
      />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>

      <label>Contraseña:</label>
      <input
        type="password"
        v-model="password"
        placeholder="Ingresa tu contraseña"
      />
      <span v-if="errors.password" class="error">{{ errors.password }}</span>

      <button type="submit">Ingresar</button>

      <p v-if="errors.general" class="error">{{ errors.general }}</p>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const errors = ref({
  email: null,
  password: null,
  general: null
})

// --- LOGIN SIMULADO ---
const login = () => {
  errors.value = { email: null, password: null, general: null }

  if (!email.value) {
    errors.value.email = 'El correo es obligatorio'
  }

  if (!password.value) {
    errors.value.password = 'La contraseña es obligatoria'
  }

  // Si hay errores → no continuar
  if (errors.value.email || errors.value.password) {
    return
  }

  // Aquí NO se valida contra una base de datos…
  // solo pasamos si escribió ambos campos.
  router.push('/products')
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 25px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background: #3a7afe;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #1e5ffb;
}

.error {
  font-size: 14px;
  color: red;
  text-align: left;
}
</style>
