import React from 'react'
import { Provider } from 'react-redux'

import { getStore } from '@/store'
import Messenger from './components/pages/Messenger'

const App = () => (
  <Provider store={getStore()}>
    <Messenger />
  </Provider>
)

export default App
