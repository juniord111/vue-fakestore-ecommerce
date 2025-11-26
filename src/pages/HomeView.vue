<template>
  <div class="home-container">
    <h1 class="title">✨ ¡Bienvenido a la Plataforma JDev! ✨</h1>

    <p class="intro">
      Esta es la página principal de la aplicación.
    </p>

    <div class="info-box">
      <h2>📌 ¿Qué puedes hacer aquí?</h2>
      <ul>
        <li>🔹 Explorar los productos disponibles</li>
        <li>🔹 Agregar artículos al carrito</li>
        <li>🔹 Ver el total de tus compras en tiempo real</li>
        <li>🔹 Gestionar tu cuenta e iniciar sesión</li>
      </ul>
    </div>

    <p class="route-text">
      Ruta actual: <strong>/</strong>
    </p>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 40px 20px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 10px;
}

.intro {
  font-size: 18px;
  margin-bottom: 25px;
  color: #666;
}

.info-box {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  background: #f0f4ff;
  padding: 20px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

.info-box h2 {
  margin-bottom: 10px;
  color: #1a4ecc;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  font-size: 16px;
  margin-bottom: 6px;
  color: #333;
}

.route-text {
  margin-top: 30px;
  color: #999;
}
</style>
