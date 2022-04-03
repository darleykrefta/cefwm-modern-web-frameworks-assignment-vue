import { defineStore } from 'pinia'
import { Order } from '../types/order'

export const useOrderStore = defineStore('order', {
  state: (): Order => ({}), //return an order
  actions: {
    addItem: product => {
      console.log('addItem', product)
      // TODO addItem method
    },
    removeItem: product => {
      console.log('removeItem', product)
      // TODO removeItem method
    }
  }
})
