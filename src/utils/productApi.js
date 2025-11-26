import api from './api.js'

export async function fetchAllProducts() {
  try{
    const response = await api.get('/products')
    return response.data
  }catch(error){
    console.error('Error en fetchAllProducts', error.message);
    throw new Error("Fallo la conexion con la API de los productos");



  }
}
