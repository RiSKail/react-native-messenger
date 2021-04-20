import { createStore } from 'redux'

import reducer from '@/reducer'

let store = null

const createDevelopmentStore = () =>
  createStore(reducer)

const createProductionStore = () =>
  createStore(reducer)

export const getStore = () => {
  if (!store) {
    store =
      process.env.NODE_ENV === 'development' ? createDevelopmentStore() : createProductionStore()
  }

  return store
}
