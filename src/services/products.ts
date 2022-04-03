import { Product } from '../types/product.js'
import httpClient from './http.js'

async function getAllProducts(): Promise<Product[]> {
  const client = httpClient()
  return client.get('products')
}

export { getAllProducts }
