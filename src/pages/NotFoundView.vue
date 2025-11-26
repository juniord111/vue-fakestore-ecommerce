<template>
  <div class="error-container">
    <h1 class="code">404</h1>
    <h2 class="message">¡Ups! Página No Encontrada</h2>
    <p class="description">
      La ruta que intentas visitar no existe o fue movida.
    </p>

    <router-link to="/" class="back-btn">
      ⬅ Volver al Inicio
    </router-link>
  </div>
</template>

<script setup>
// Sin lógica adicional por ahora
</script>

<style scoped>
.error-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: #f9fafb;
}

.code {
  font-size: 90px;
  font-weight: bold;
  color: #ff6b6b;
  animation: bounce 1.5s infinite;
}

.message {
  font-size: 28px;
  font-weight: 600;
  margin-top: 10px;
  color: #333;
}

.description {
  margin-top: 10px;
  font-size: 18px;
  color: #555;
  max-width: 400px;
}

.back-btn {
  margin-top: 25px;
  display: inline-block;
  padding: 12px 22px;
  background: #4f46e5;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s ease;
  font-weight: 600;
}

.back-btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
</style>
