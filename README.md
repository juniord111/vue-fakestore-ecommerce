# PROYECTO FINAL -- VUE.JS (Domingo)

## 🛒 Mini E-commerce con FakeStoreAPI + Pinia + Vue Router

Este proyecto es una **SPA (Single Page Application)** desarrollada con
**Vue 3 + Vite**, que consume la API pública **FakeStoreAPI**, integra
un **carrito global con Pinia**, maneja rutas con **Vue Router**,
incluye un **login simulado**, y está lista para **deploy** en Netlify o
Vercel.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-   **Vue 3**
-   **Vite**
-   **Vue Router**
-   **Pinia**
-   **Axios**
-   **FakeStoreAPI**
-   **Netlify / Vercel** (para despliegue)

------------------------------------------------------------------------

## 📌 Funcionalidades obligatorias

### 1️⃣ Páginas principales

-   **Home** → Pantalla inicial del proyecto.\
-   **Productos** → Lista de productos consumidos desde la
    FakeStoreAPI.\
-   **Detalle de Producto** → Ruta dinámica `/products/:id`.\
-   **About** → Información del creador o del proyecto.\
-   **Login** → Inicio de sesión simulado.

------------------------------------------------------------------------

### 2️⃣ Productos

-   Consumir **https://fakestoreapi.com/products**
-   Mostrar listado con:
    -   Imagen
    -   Título
    -   Precio
    -   Botón "Agregar al carrito"
-   Mostrar detalle individual usando parámetros dinámicos.

------------------------------------------------------------------------

### 3️⃣ Carrito Global (Pinia)

Store obligatorio:

#### **State**

-   `products`\
-   `cart`

#### **Actions**

-   `addToCart(product)`
-   `removeFromCart(id)`
-   `clearCart()`

#### **Getters**

-   `totalItems`
-   `totalPrice`

#### Persistencia:

-   Guardar el carrito en **localStorage**.

------------------------------------------------------------------------

### 4️⃣ Dashboard de Productos

Debe incluir: - Loader mientras carga la API. - Manejo de errores. -
Grid responsivo. - Filtro opcional (categorías o búsqueda).

------------------------------------------------------------------------

### 5️⃣ Login Simulado

-   Validar que el usuario ingrese:
    -   Email
    -   Contraseña
-   Guardar el nombre del usuario en **localStorage**.
-   Navbar reactiva que muestre el estado del usuario.

------------------------------------------------------------------------

### 6️⃣ Estructura obligatoria del proyecto

    src/
     ├── components/
     ├── pages/
     ├── router/
     ├── stores/
     ├── assets/
     └── App.vue

------------------------------------------------------------------------

### 7️⃣ Deploy

El proyecto debe desplegarse en: - **Netlify** - Arrastrar carpeta
`dist` o conectar el repositorio. - **Vercel** - Deploy automático desde
GitHub.

------------------------------------------------------------------------

## 📦 Instalación y ejecución

``` bash
npm install
npm run dev
```

Para build:

``` bash
npm run build
```

------------------------------------------------------------------------

## 🎯 Objetivo del proyecto

Crear una aplicación completa tipo e-commerce con funcionalidades reales
utilizando tecnologías modernas del ecosistema **Vue 3**. El objetivo es
demostrar dominio de:

-   Estados globales (Pinia)
-   Routing dinámico (Vue Router)
-   Consumo de APIs externas (Axios)
-   LocalStorage
-   Componentización
-   Deploy profesional

------------------------------------------------------------------------

## 👨‍💻 Autor

Proyecto desarrollado por **Johan (David Rengifo)**, estudiante de
ingeniería de sistemas y desarrollador web enfocado en el stack Vue.js +
Node.js.

------------------------------------------------------------------------

¡Gracias por revisar este proyecto! 🚀\
Siéntete libre de mejorar, extender o personalizar cada módulo.
# vue-fakestore-ecommerce
