import { Product } from '../types/product.js'
import httpClient from './http.js'

async function getAllProducts(): Promise<Product[]> {
  const client = httpClient()
  return client.get('products')
}

async function postProduct(product: Product): Promise<Product> {
  const client = httpClient()
  return client.post('products', product)
}

export { getAllProducts, postProduct }
